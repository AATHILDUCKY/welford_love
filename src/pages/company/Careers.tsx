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
  ChevronRight,
  Upload,
  Loader2,
  Paperclip,
} from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ✅ NEW: checkbox import
import { Checkbox } from "@/components/ui/checkbox";

const API_BASE =
  (import.meta as any)?.env?.VITE_API_BASE ?? "https://welfordsystems.com/api";

type Job = {
  id: number;
  title: string;
  location?: string | null;
  employment_type?: string | null;
  description?: string | null; // Markdown/HTML
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

// ---------- utils ----------
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

/** Remove common Markdown syntax so previews don’t show raw `##`/`*` etc. */
function stripMarkdown(text?: string | null) {
  if (!text) return "";
  let s = text;

  // Remove code fences & inline code
  s = s.replace(/```[\s\S]*?```/g, " ");
  s = s.replace(/`[^`]*`/g, " ");

  // Images ![alt](url) -> alt
  s = s.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1");

  // Links [text](url) -> text
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Headings: remove leading hashes
  s = s.replace(/^\s{0,3}#{1,6}\s+/gm, "");

  // Blockquotes
  s = s.replace(/^\s{0,3}>\s?/gm, "");

  // Lists bullets & numbers
  s = s.replace(/^\s*([-*+])\s+/gm, "");
  s = s.replace(/^\s*\d+\.\s+/gm, "");

  // Bold/italic/strike markers
  s = s.replace(/(\*\*|__|\*|_|~~)/g, "");

  // Horizontal rules
  s = s.replace(/^\s*(-{3,}|\*{3,}|_{3,})\s*$/gm, " ");

  // Tables pipes
  s = s.replace(/^\|/gm, " ");
  s = s.replace(/\|$/gm, " ");
  s = s.replace(/\|/g, " ");

  // Collapse whitespace
  s = s.replace(/\s+/g, " ").trim();

  return s;
}

const allowedCvExt = [".pdf", ".doc", ".docx"];

// ---------- small UI bits ----------
const Dot = () => <span className="mx-1 opacity-50">•</span>;

function FieldLabel({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] md:text-sm text-muted-foreground">
      {icon}
      {children}
    </span>
  );
}

/** Rich Markdown renderer for the Read More dialog with attractive headings */
function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-2 mb-3 text-2xl md:text-3xl font-semibold tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-5 mb-2 text-xl md:text-2xl font-semibold tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-4 mb-2 text-lg md:text-xl font-semibold">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-3 mb-2 text-base md:text-lg font-semibold">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-2 leading-7 text-[15px] text-foreground/90">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-3 list-disc pl-5 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-3 list-decimal pl-5 space-y-1">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-7">{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 text-[13px]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-3 overflow-x-auto rounded-xl bg-muted p-3">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-3 border-l-4 pl-4 text-foreground/90">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-6 border-muted" />,
          table: ({ children }) => (
            <div className="my-3 overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="bg-muted/60 px-3 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 align-top">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

// ---------- page ----------
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

  // dialogs state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // apply form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // ✅ NEW: consent checkbox state
  const [consent, setConsent] = useState(false);

  // debounce search
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

  useEffect(() => {
    fetchJobs(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qDebounced, timeFilter, activeOnly]);

  // open dialogs
  const openDetails = (job: Job) => {
    setSelectedJob(job);
    setDetailsOpen(true);
  };

  const openApplyFromCard = (job: Job) => {
    setSelectedJob(job);
    // reset form
    setName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
    setCvFile(null);
    setConsent(false); // ✅ reset consent each time
    setApplyOpen(true);
  };

  const openApplyFromDetails = () => {
    if (!selectedJob) return;
    setDetailsOpen(false);
    // reset form
    setName("");
    setEmail("");
    setPhone("");
    setCoverLetter("");
    setCvFile(null);
    setConsent(false); // ✅ reset consent each time
    setApplyOpen(true);
  };

  // file validate
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
    () =>
      !!selectedJob &&
      name.trim() &&
      /\S+@\S+\.\S+/.test(email) &&
      !!cvFile &&
      !submitting,
    [selectedJob, name, email, cvFile, submitting]
  );

  // submit
  const submitApplication = async () => {
    // ✅ Enforce consent with a toast if missing
    if (!consent) {
      toast({
        title: "Please confirm data processing",
        description:
          "Tick the checkbox to allow Welford Systems to process your personal data for reviewing your application.",
        variant: "destructive",
      });
      return;
    }

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
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                  Careers
                </h1>
                <p className="mt-1 text-muted-foreground">
                  Join us and help build secure, governed access for everyone.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    aria-hidden
                  />
                  <Input
                    className="pl-9"
                    placeholder="Search positions…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    aria-label="Search positions"
                  />
                </div>
              </div>

              <Select
                value={timeFilter ?? "any"}
                onValueChange={(v) =>
                  setTimeFilter(v === "any" ? undefined : v)
                }
              >
                <SelectTrigger aria-label="Posted timeframe">
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

              <div className="flex items-center justify-between gap-2 rounded-xl border px-3 py-2">
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
                  className="rounded-2xl border bg-muted/20 animate-pulse h-48"
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
                  // Build a clean preview: strip HTML then Markdown, then slice
                  const raw = job.description ?? "";
                  const previewText = stripMarkdown(stripHtml(raw));
                  const short =
                    previewText.length > 240
                      ? previewText.slice(0, 240) + "…"
                      : previewText;

                  return (
                    <Card
                      key={job.id}
                      className="relative transition-all rounded-2xl border-muted/60 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <CardHeader className="pb-0">
                        {/* Card H2 (job title) */}
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-xl md:text-2xl leading-tight">
                            {job.title}
                          </CardTitle>
                          <Badge variant="secondary" className="shrink-0">
                            {job.employment_type || "—"}
                          </Badge>
                        </div>

                        {/* Quick facts */}
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                          <FieldLabel icon={<MapPin className="h-4 w-4" />}>
                            {job.location || "Remote / Flexible"}
                          </FieldLabel>
                          <Dot />
                          <FieldLabel icon={<Briefcase className="h-4 w-4" />}>
                            {job.is_active ? "Open" : "Closed"}
                          </FieldLabel>
                          <Dot />
                          <FieldLabel icon={<Clock className="h-4 w-4" />}>
                            {timeAgo(job.created_at)}
                          </FieldLabel>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-5">
                        {/* Clean preview (no ## or MD symbols) */}
                        <p className="text-[15px] leading-6 text-muted-foreground mb-6">
                          {short || "No description provided."}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <Button
                            variant="link"
                            className="px-0"
                            onClick={() => openDetails(job)}
                            aria-label={`Read more about ${job.title}`}
                          >
                            Read more <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>

                          <Button
                            onClick={() => openApplyFromCard(job)}
                            disabled={!job.is_active}
                            title={
                              job.is_active
                                ? "Apply for this job"
                                : "Applications are closed"
                            }
                          >
                            {job.is_active ? "Apply" : "Closed"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-10">
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

      {/* Details Dialog (Read more) */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-2xl md:max-w-3xl">
          <DialogHeader className="mb-1">
            {/* Dialog H1 */}
            <DialogTitle className="text-2xl md:text-3xl leading-[1.2]">
              {selectedJob?.title}
            </DialogTitle>
            <DialogDescription>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                <FieldLabel icon={<MapPin className="h-4 w-4" />}>
                  {selectedJob?.location || "Remote / Flexible"}
                </FieldLabel>
                <Dot />
                <FieldLabel icon={<Briefcase className="h-4 w-4" />}>
                  {selectedJob?.employment_type || "—"}
                </FieldLabel>
                <Dot />
                <FieldLabel icon={<Clock className="h-4 w-4" />}>
                  {selectedJob ? timeAgo(selectedJob.created_at) : ""}
                </FieldLabel>
              </div>
            </DialogDescription>
          </DialogHeader>

          {/* Markdown body with attractive multiple headings & elements */}
          <div className="max-h-[60vh] overflow-y-auto pr-1">
            {selectedJob?.description ? (
              <MarkdownBody content={selectedJob.description} />
            ) : (
              <p className="text-sm text-muted-foreground">
                No description provided.
              </p>
            )}
          </div>

          <DialogFooter className="mt-3">
            <Button variant="ghost" onClick={() => setDetailsOpen(false)}>
              Close
            </Button>
            <Button
              onClick={openApplyFromDetails}
              disabled={!selectedJob?.is_active}
            >
              {selectedJob?.is_active ? "Apply" : "Closed"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Apply Dialog */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            {/* Dialog H2 */}
            <DialogTitle className="text-xl md:text-2xl">
              Apply for {selectedJob?.title || "this role"}
            </DialogTitle>
            <DialogDescription>
              Upload your CV (PDF or Word) and share your details.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4">
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
                  placeholder="+44 7X XXX XXXX"
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

              {/* ✅ NEW: Consent checkbox */}
              <div className="flex items-start gap-3 rounded-lg border p-3">
                <Checkbox
                  id="app-consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(Boolean(v))}
                  aria-label="Consent to process personal data"
                />
                <Label htmlFor="app-consent" className="text-sm leading-6">
                  I agree that Welford Systems may process my personal data for
                  the purpose of reviewing my application.
                </Label>
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
