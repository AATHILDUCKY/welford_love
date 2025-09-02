// src/pages/Career.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  ChevronUp,
  Upload,
  Loader2,
  Paperclip,
} from "lucide-react";

const API_BASE =
  (import.meta as any)?.env?.VITE_API_BASE ?? "http://127.0.0.1:8000";

type Job = {
  id: number;
  title: string;
  location?: string | null;
  employment_type?: string | null;
  description?: string | null;
  is_active: boolean;
  created_at: string; // ISO
};

type ApplicationOut = {
  id: number;
  job_id: number;
  name: string;
  email: string;
  phone?: string | null;
  cover_letter?: string | null;
  cv_filename: string;
  created_at: string;
};

const LIMIT = 9;

// --- utils ---
function timeAgo(iso: string) {
  const d = new Date(iso);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return d.toLocaleDateString();
}

function stripHtml(html?: string | null) {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const allowedCvExt = [".pdf", ".doc", ".docx"];

// --- page ---
const Career: React.FC = () => {
  const { toast } = useToast();

  // query state
  const [q, setQ] = useState("");
  const [timeFilter, setTimeFilter] = useState<string | undefined>(undefined);
  const [activeOnly, setActiveOnly] = useState(true);

  // data state
  const [jobs, setJobs] = useState<Job[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // UI state
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // apply form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // debounce q
  const [qDebounced, setQDebounced] = useState(q);
  const qTimer = useRef<number | null>(null);
  useEffect(() => {
    if (qTimer.current) window.clearTimeout(qTimer.current);
    qTimer.current = window.setTimeout(() => setQDebounced(q), 400);
    return () => {
      if (qTimer.current) window.clearTimeout(qTimer.current);
    };
  }, [q]);

  // fetch jobs
  const fetchJobs = async (fresh = true) => {
    const params = new URLSearchParams();
    if (qDebounced) params.set("q", qDebounced);
    if (activeOnly) params.set("active_only", "true");
    if (timeFilter && timeFilter !== "any") params.set("time_filter", timeFilter);
    params.set("offset", fresh ? "0" : String(offset));
    params.set("limit", String(LIMIT));

    try {
      if (fresh) {
        setLoading(true);
        setHasMore(true);
      } else {
        setLoadingMore(true);
      }
      const res = await fetch(`${API_BASE}/careers/jobs?${params.toString()}`);
      if (!res.ok) throw new Error(`Failed to load jobs (${res.status})`);
      const data: Job[] = await res.json();
      if (fresh) {
        setJobs(data);
        setOffset(data.length);
      } else {
        setJobs((prev) => [...prev, ...data]);
        setOffset((prev) => prev + data.length);
      }
      if (data.length < LIMIT) setHasMore(false);
    } catch (e: any) {
      toast({
        title: "Couldn’t load jobs",
        description: e?.message ?? "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // initial + whenever filters change
  useEffect(() => {
    fetchJobs(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qDebounced, timeFilter, activeOnly]);

  const onToggleExpand = (id: number) =>
    setExpanded((s) => ({ ...s, [id]: !s[id] }));

  const openApply = (job: Job) => {
    setSelectedJob(job);
    // reset form
    setName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
    setCvFile(null);
    setApplyOpen(true);
  };

  const onCvChange = (f: File | null) => {
    if (!f) {
      setCvFile(null);
      return;
    }
    const ext = "." + f.name.split(".").pop()?.toLowerCase();
    if (!allowedCvExt.includes(ext)) {
      toast({
        title: "Unsupported file type",
        description: "Upload a PDF or Word (.doc/.docx) file.",
        variant: "destructive",
      });
      return;
    }
    if (f.size > 15 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Max size is 15 MB.",
        variant: "destructive",
      });
      return;
    }
    setCvFile(f);
  };

  const canSubmit = useMemo(
    () => !!selectedJob && name.trim() && /\S+@\S+\.\S+/.test(email) && !!cvFile && !submitting,
    [selectedJob, name, email, cvFile, submitting]
  );

  const submitApplication = async () => {
    if (!selectedJob || !cvFile) return;
    setSubmitting(true);
    try {
      const form = new FormData();
      form.set("name", name.trim());
      form.set("email", email.trim());
      if (phone.trim()) form.set("phone", phone.trim());
      if (coverLetter.trim()) form.set("cover_letter", coverLetter.trim());
      form.set("cv", cvFile);

      const res = await fetch(
        `${API_BASE}/careers/jobs/${selectedJob.id}/apply`,
        {
          method: "POST",
          body: form,
        }
      );
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `Failed to apply (${res.status})`);
      }
      const _data: ApplicationOut = await res.json();

      toast({
        title: "Application submitted",
        description: `Thanks ${name}, we’ll be in touch.`,
      });
      setApplyOpen(false);
    } catch (e: any) {
      toast({
        title: "Couldn’t submit application",
        description: e?.message ?? "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header / Filters */}
      <section className="py-10 lg:py-14 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">Careers</h1>
                <p className="text-muted-foreground">
                  Join us and help build secure, governed access for everyone.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-9"
                    placeholder="Search positions..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>
              </div>

              <Select
                value={timeFilter ?? "any"}
                onValueChange={(v) =>
                  setTimeFilter(v === "any" ? undefined : v)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Posted anytime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Posted anytime</SelectItem>
                  <SelectItem value="last_hour">Last hour</SelectItem>
                  <SelectItem value="last_24h">Last 24 hours</SelectItem>
                  <SelectItem value="last_7d">Last 7 days</SelectItem>
                  <SelectItem value="last_30d">Last 30 days</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center justify-between gap-2 rounded-md border px-3 py-2">
                <div className="space-y-0">
                  <div className="text-sm font-medium leading-none">
                    Active only
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Hide closed roles
                  </div>
                </div>
                <Switch checked={activeOnly} onCheckedChange={setActiveOnly} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs list */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  key={i}
                  className="border bg-muted/20 animate-pulse h-48"
                />
              ))}
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No openings found</h3>
              <p className="text-muted-foreground">
                Try changing your filters or check back later.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => {
                  const isOpen = !!expanded[job.id];
                  const desc = stripHtml(job.description);
                  const short =
                    desc.length > 220 ? desc.slice(0, 220) + "…" : desc;
                  return (
                    <Card
                      key={job.id}
                      className="relative transition-all hover:shadow-md"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between gap-3">
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <Badge
                            variant="secondary"
                            className="whitespace-nowrap"
                          >
                            {job.employment_type || "—"}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location || "Remote / Flexible"}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.is_active ? "Open" : "Closed"}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {timeAgo(job.created_at)}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {isOpen ? desc : short}
                        </p>

                        <div className="flex items-center justify-between">
                          <Button
                            variant="ghost"
                            className="px-0"
                            onClick={() => onToggleExpand(job.id)}
                          >
                            {isOpen ? (
                              <>
                                Show less <ChevronUp className="ml-1 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Read more{" "}
                                <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </Button>

                          <Button onClick={() => openApply(job)}>Apply</Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    disabled={loadingMore}
                    onClick={() => fetchJobs(false)}
                  >
                    {loadingMore ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading…
                      </>
                    ) : (
                      "Load more"
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Apply Dialog */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Upload your CV (PDF or Word) and share your details.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-2">
                <Label htmlFor="app-name">Full name</Label>
                <Input
                  id="app-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-email">Email</Label>
                <Input
                  id="app-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-phone">Phone (optional)</Label>
                <Input
                  id="app-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+94 7X XXX XXXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-cover">Cover letter (optional)</Label>
                <Textarea
                  id="app-cover"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Briefly tell us why you're a great fit…"
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label>CV (PDF/DOC/DOCX, max 15MB)</Label>
                <div className="flex items-center gap-3">
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => onCvChange(e.target.files?.[0] ?? null)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      (document.querySelector<HTMLInputElement>(
                        'input[type="file"]'
                      )?.click())
                    }
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
                {cvFile && (
                  <div className="text-sm text-muted-foreground inline-flex items-center gap-2">
                    <Paperclip className="h-4 w-4" />
                    {cvFile.name} • {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                  </div>
                )}
              </div>
            </div>
          </div>

          <DialogFooter className="mt-2">
            <Button variant="ghost" onClick={() => setApplyOpen(false)}>
              Cancel
            </Button>
            <Button disabled={!canSubmit} onClick={submitApplication}>
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Submit application"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Career;
