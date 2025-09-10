// src/pages/admin/Dashboard.tsx
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import {
  Mail, Calendar, Briefcase, FileText, Trash2, ArrowRight, LogOut,
  User as UserIcon, Building2, AtSign, Phone, MapPin, CalendarClock,
  FileDown, BadgeCheck, Info, FileText as FileIcon, Plus, Pencil, Check, X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { format as formatDateFns } from "date-fns";

type Contact = { id:number; name:string; email:string; company?:string|null; message:string; created_at:string; };
type Demo   = { id:number; name:string; email:string; company_name?:string|null; job_title?:string|null; message:string; created_at:string; };
type Job    = { id:number; title:string; location?:string|null; employment_type?:string|null; description:string; is_active:boolean; created_at:string; };
type App    = { id:number; job_id:number; name:string; email:string; phone?:string|null; cv_filename:string; cover_letter?:string|null; created_at:string; };
type Trash  = { id:number; entity_type:string; entity_id:number; payload:any; deleted_at:string; };

type View = "home"|"contacts"|"demos"|"jobs"|"apps"|"trash";

const Section: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onViewAll?: () => void;
}> = ({ title, icon, children, onViewAll }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="flex items-center gap-2">{icon}{title}</CardTitle>
      {onViewAll && <Button variant="ghost" size="sm" onClick={onViewAll}>View all <ArrowRight className="ml-1 h-4 w-4"/></Button>}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

function formatDate(s: string) {
  try { return formatDateFns(new Date(s), "PPpp"); } catch { return s; }
}

const Dashboard = () => {
  const api = useApi();
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  const qc = useQueryClient();

  const [view, setView] = useState<View>("home");
  const [selected, setSelected] = useState<any|null>(null);

  // Local UI state for job create/edit
  const [showJobCreator, setShowJobCreator] = useState(false);
  const [jobEditMode, setJobEditMode] = useState(false);

  // queries
  const qContacts = useQuery({
    queryKey: ["admin","contacts"],
    queryFn: () => api.get<Contact[]>("/admin/contacts?limit=20"),
  });
  const qDemos = useQuery({
    queryKey: ["admin","demos"],
    queryFn: () => api.get<Demo[]>("/admin/demos?limit=20"),
  });
  const qJobs = useQuery({
    queryKey: ["admin","jobs"],
    queryFn: () => api.get<Job[]>("/admin/jobs?limit=20"),
  });
  const qApps = useQuery({
    queryKey: ["admin","apps"],
    queryFn: () => api.get<App[]>("/admin/applications?limit=20"),
  });
  const qTrash = useQuery({
    queryKey: ["admin","trash"],
    queryFn: () => api.get<Trash[]>("/admin/trash?limit=20"),
  });

  const loading = qContacts.isLoading || qDemos.isLoading || qJobs.isLoading || qApps.isLoading || qTrash.isLoading;
  const anyError = qContacts.error || qDemos.error || qJobs.error || qApps.error || qTrash.error;

  // mutations (delete)
  const mDeleteContact = useMutation({
    mutationFn: (id:number)=> api.del(`/admin/contacts/${id}`),
    onSuccess: async (_,_id) => {
      await qc.invalidateQueries({ queryKey: ["admin","contacts"] });
      await qc.invalidateQueries({ queryKey: ["admin","trash"] });
      if (selected?.id === _id && view === "contacts") setSelected(null);
    }
  });
  const mDeleteDemo = useMutation({
    mutationFn: (id:number)=> api.del(`/admin/demos/${id}`),
    onSuccess: async (_,_id) => {
      await qc.invalidateQueries({ queryKey: ["admin","demos"] });
      await qc.invalidateQueries({ queryKey: ["admin","trash"] });
      if (selected?.id === _id && view === "demos") setSelected(null);
    }
  });
  const mDeleteJob = useMutation({
    mutationFn: (id:number)=> api.del(`/admin/jobs/${id}`),
    onSuccess: async (_,_id) => {
      await qc.invalidateQueries({ queryKey: ["admin","jobs"] });
      await qc.invalidateQueries({ queryKey: ["admin","trash"] });
      if (selected?.id === _id && view === "jobs") setSelected(null);
    }
  });
  const mDeleteApp = useMutation({
    mutationFn: (id:number)=> api.del(`/admin/applications/${id}`),
    onSuccess: async (_,_id) => {
      await qc.invalidateQueries({ queryKey: ["admin","apps"] });
      await qc.invalidateQueries({ queryKey: ["admin","trash"] });
      if (selected?.id === _id && view === "apps") setSelected(null);
    }
  });

  // JOB mutations (create/update)
  const mCreateJob = useMutation({
    mutationFn: (body: Partial<Job>) => api.postJson<Job>("/admin/jobs", body),
    onSuccess: async (job) => {
      await qc.invalidateQueries({ queryKey: ["admin","jobs"] });
      setShowJobCreator(false);
      setView("jobs");
      setSelected(job);
    }
  });

  const mUpdateJob = useMutation({
    mutationFn: ({ id, body }: { id:number; body: Partial<Job> }) => api.patchJson<Job>(`/admin/jobs/${id}`, body),
    onSuccess: async (job) => {
      await qc.invalidateQueries({ queryKey: ["admin","jobs"] });
      setSelected(job);
      setJobEditMode(false);
    }
  });

  // delete confirm dialog state
  const [confirm, setConfirm] = useState<{ open:boolean; onConfirm?: ()=>void; title?:string }>({ open:false });
  const askDelete = (title:string, action:()=>void) => setConfirm({ open:true, onConfirm: action, title });

  // if any request 401-ed and we auto-signed out, kick to /admin (login view)
  useEffect(() => {
    if (!user) navigate("/admin", { replace: true });
  }, [user, navigate]);

  const headerRight = useMemo(() => (
    <div className="flex items-center gap-3">
      <div className="text-sm text-muted-foreground">{user?.username}</div>
      <Button variant="outline" onClick={() => { signout(); navigate("/admin", { replace: true }); }}>
        <LogOut className="h-4 w-4 mr-2" /> Sign out
      </Button>
    </div>
  ), [user, signout, navigate]);

  // helpers
  const isCurrent = (v:View) => view === v;

  const renderRowDelete = (entity: "contacts"|"demos"|"jobs"|"apps", id:number) => {
    const onConfirm = () => {
      if (entity === "contacts") mDeleteContact.mutate(id);
      if (entity === "demos") mDeleteDemo.mutate(id);
      if (entity === "jobs") mDeleteJob.mutate(id);
      if (entity === "apps") mDeleteApp.mutate(id);
      setConfirm({ open:false });
    };
    return (
      <Button
        variant="ghost"
        size="sm"
        className="text-destructive hover:text-destructive"
        onClick={(e)=>{ e.stopPropagation(); askDelete(`Delete ${entity.slice(0,-1)} #${id}?`, onConfirm); }}
      >
        Delete
      </Button>
    );
  };

  // Download CV as file (preserve filename if available)
  async function handleDownloadCv(app: App) {
    const blob = await api.getBlob(`/admin/applications/${app.id}/cv`);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = app.cv_filename || `cv-${app.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ===== Details helpers (layout-safe) =====
  function DetailsShell({
    title,
    subtitle,
    meta,
    leadingIcon,
    rightArea,
  }: {
    title: string;
    subtitle?: string;
    meta?: React.ReactNode;
    leadingIcon: React.ReactNode;
    rightArea?: React.ReactNode;
  }) {
    return (
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          {/* allow truncation: */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 shrink-0 rounded-2xl bg-muted flex items-center justify-center">{leadingIcon}</div>
            <div className="min-w-0">
              <div className="text-lg font-semibold truncate">{title}</div>
              {subtitle && <div className="text-sm text-muted-foreground truncate">{subtitle}</div>}
            </div>
          </div>
          {/* keep actions from squishing content */}
          {rightArea && <div className="shrink-0">{rightArea}</div>}
        </div>
        {meta}
      </div>
    );
  }

  function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value?: React.ReactNode; }) {
    return (
      <div className="flex items-start gap-3 rounded-lg border p-3">
        <div className="mt-0.5 shrink-0">{icon}</div>
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
          <div className="text-sm break-words">{value || <span className="text-muted-foreground">—</span>}</div>
        </div>
      </div>
    );
  }

  function TruncBadge({ children, icon }: { children: string; icon?: React.ReactNode; }) {
    return (
      <Badge variant="secondary" className="max-w-full">
        {icon && <span className="inline-flex items-center mr-1">{icon}</span>}
        <span className="truncate max-w-[220px] inline-block align-bottom" title={children}>{children}</span>
      </Badge>
    );
  }

  function MessageCard({ icon, label, text }: { icon: React.ReactNode; label: string; text?: string | null }) {
    return (
      <div className="rounded-xl border p-4 bg-muted/40">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="text-sm font-medium">{label}</div>
        </div>
        <div className="text-sm whitespace-pre-wrap break-words leading-relaxed max-h-80 overflow-auto">
          {text || <span className="text-muted-foreground">No message</span>}
        </div>
      </div>
    );
  }

  // ===== Job Create / Edit form =====
  type JobDraft = {
    title: string;
    location?: string;
    employment_type?: string;
    description: string;
    is_active: boolean;
  };
  const emptyJob: JobDraft = { title: "", location: "", employment_type: "", description: "", is_active: true };

  function JobForm({
    initial,
    onCancel,
    onSubmit,
    submitting,
  }: {
    initial: JobDraft;
    onCancel: () => void;
    onSubmit: (draft: JobDraft) => void;
    submitting?: boolean;
  }) {
    const [draft, setDraft] = useState<JobDraft>(initial);

    return (
      <div className="rounded-xl border p-4 space-y-4 bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Title *</label>
            <input
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
              placeholder="Senior Software Engineer"
              value={draft.title}
              onChange={(e)=>setDraft({...draft, title: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Employment Type</label>
            <select
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
              value={draft.employment_type || ""}
              onChange={(e)=>setDraft({...draft, employment_type: e.target.value || ""})}
            >
              <option value="">—</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Temporary</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Location</label>
            <input
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
              placeholder="Remote / Colombo / etc."
              value={draft.location || ""}
              onChange={(e)=>setDraft({...draft, location: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Active</label>
            <div>
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={draft.is_active}
                  onChange={(e)=>setDraft({...draft, is_active: e.target.checked})}
                />
                {draft.is_active ? "Active" : "Inactive"}
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">Description</label>
          <textarea
            className="w-full rounded-md border px-3 py-2 text-sm bg-background min-h-[120px]"
            placeholder="Write the role overview, responsibilities, requirements, benefits…"
            value={draft.description}
            onChange={(e)=>setDraft({...draft, description: e.target.value})}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={()=>onSubmit(draft)}
            disabled={!draft.title.trim() || submitting}
          >
            <Check className="h-4 w-4 mr-2" /> Save
          </Button>
          <Button variant="secondary" onClick={onCancel} disabled={submitting}>
            <X className="h-4 w-4 mr-2" /> Cancel
          </Button>
        </div>
      </div>
    );
  }

  // ===== Details View =====
  function DetailsView() {
    if (!selected) return <div className="text-muted-foreground">Select an item to view details.</div>;

    if (view === "contacts") {
      const c = selected as Contact;
      return (
        <div className="space-y-4">
          <DetailsShell
            title={c.name}
            subtitle={c.email}
            leadingIcon={<UserIcon className="h-5 w-5" />}
            rightArea={
              <Button variant="destructive" onClick={()=>askDelete(`Delete contact #${c.id}?`, ()=>mDeleteContact.mutate(c.id))}>
                <Trash2 className="h-4 w-4 mr-2"/> Delete
              </Button>
            }
            meta={<div className="flex flex-wrap gap-3">
              <Badge variant="secondary"><CalendarClock className="h-3.5 w-3.5 mr-1" /> {formatDate(c.created_at)}</Badge>
              {c.company && <TruncBadge icon={<Building2 className="h-3.5 w-3.5" />}>{c.company}</TruncBadge>}
            </div>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field icon={<UserIcon className="h-4 w-4" />} label="Name" value={c.name}/>
            <Field icon={<AtSign className="h-4 w-4" />} label="Email" value={c.email}/>
          </div>
          <MessageCard icon={<Mail className="h-4 w-4" />} label="Message" text={c.message}/>
        </div>
      );
    }

    if (view === "demos") {
      const d = selected as Demo;
      return (
        <div className="space-y-4">
          <DetailsShell
            title={d.name}
            subtitle={d.email}
            leadingIcon={<Calendar className="h-5 w-5" />}
            rightArea={
              <Button variant="destructive" onClick={()=>askDelete(`Delete demo #${d.id}?`, ()=>mDeleteDemo.mutate(d.id))}>
                <Trash2 className="h-4 w-4 mr-2"/> Delete
              </Button>
            }
            meta={<div className="flex flex-wrap gap-3">
              <Badge variant="secondary"><CalendarClock className="h-3.5 w-3.5 mr-1" /> {formatDate(d.created_at)}</Badge>
              {d.company_name && <TruncBadge icon={<Building2 className="h-3.5 w-3.5" />}>{d.company_name}</TruncBadge>}
              {d.job_title && <TruncBadge icon={<Briefcase className="h-3.5 w-3.5" />}>{d.job_title}</TruncBadge>}
            </div>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field icon={<UserIcon className="h-4 w-4" />} label="Name" value={d.name}/>
            <Field icon={<AtSign className="h-4 w-4" />} label="Email" value={d.email}/>
          </div>
          <MessageCard icon={<Info className="h-4 w-4" />} label="Request Notes" text={d.message}/>
        </div>
      );
    }

    if (view === "jobs") {
      const j = selected as Job;

      // Edit mode UI for job
      if (jobEditMode) {
        const initial: JobDraft = {
          title: j.title || "",
          location: j.location || "",
          employment_type: j.employment_type || "",
          description: j.description || "",
          is_active: !!j.is_active,
        };
        return (
          <div className="space-y-4">
            <DetailsShell
              title={`Editing: ${j.title || "Job"}`}
              subtitle={`Job #${(j as any).id}`}
              leadingIcon={<Briefcase className="h-5 w-5" />}
              rightArea={
                <Button variant="secondary" onClick={()=>setJobEditMode(false)}>
                  <X className="h-4 w-4 mr-2" /> Cancel
                </Button>
              }
              meta={<div className="flex flex-wrap gap-3">
                <Badge variant={j.is_active ? "secondary" : "outline"}>
                  <BadgeCheck className="h-3.5 w-3.5 mr-1" /> {j.is_active ? "Active" : "Inactive"}
                </Badge>
                <Badge variant="outline"><CalendarClock className="h-3.5 w-3.5 mr-1" /> {formatDate(j.created_at)}</Badge>
              </div>}
            />
            <JobForm
              initial={initial}
              onCancel={()=>setJobEditMode(false)}
              submitting={mUpdateJob.isPending}
              onSubmit={(draft)=> mUpdateJob.mutate({ id: (j as any).id, body: draft })}
            />
          </div>
        );
      }

      // Read-only details with actions
      return (
        <div className="space-y-4">
          <DetailsShell
            title={j.title}
            subtitle={j.employment_type || "—"}
            leadingIcon={<Briefcase className="h-5 w-5" />}
            rightArea={
              <div className="flex gap-2">
                <Button variant="outline" onClick={()=>setJobEditMode(true)}>
                  <Pencil className="h-4 w-4 mr-2" /> Edit
                </Button>
                <Button
                  variant={j.is_active ? "secondary" : "default"}
                  onClick={()=> mUpdateJob.mutate({ id: (j as any).id, body: { is_active: !j.is_active } })}
                >
                  <BadgeCheck className="h-4 w-4 mr-2" /> {j.is_active ? "Deactivate" : "Activate"}
                </Button>
                <Button variant="destructive" onClick={()=>askDelete(`Delete job #${(j as any).id}?`, ()=>mDeleteJob.mutate((j as any).id))}>
                  <Trash2 className="h-4 w-4 mr-2"/> Delete
                </Button>
              </div>
            }
            meta={<div className="flex flex-wrap gap-3">
              <Badge variant={j.is_active ? "secondary" : "outline"}>
                <BadgeCheck className="h-3.5 w-3.5 mr-1" /> {j.is_active ? "Active" : "Inactive"}
              </Badge>
              <Badge variant="outline"><CalendarClock className="h-3.5 w-3.5 mr-1" /> {formatDate(j.created_at)}</Badge>
              {j.location && <TruncBadge icon={<MapPin className="h-3.5 w-3.5" />}>{j.location}</TruncBadge>}
            </div>}
          />
          <MessageCard icon={<FileIcon className="h-4 w-4" />} label="Job Description" text={j.description}/>
        </div>
      );
    }

    if (view === "apps") {
      const a = selected as App;
      return (
        <div className="space-y-4">
          <DetailsShell
            title={a.name}
            subtitle={`Job #${a.job_id}`}
            leadingIcon={<FileText className="h-5 w-5" />}
            rightArea={
              <div className="flex gap-2">
                <Button variant="secondary" onClick={()=>handleDownloadCv(a)}>
                  <FileDown className="h-4 w-4 mr-2" /> Download CV
                </Button>
                <Button variant="destructive" onClick={()=>askDelete(`Delete application #${a.id}?`, ()=>mDeleteApp.mutate(a.id))}>
                  <Trash2 className="h-4 w-4 mr-2"/> Delete
                </Button>
              </div>
            }
            meta={<div className="flex flex-wrap gap-3">
              <Badge variant="outline"><CalendarClock className="h-3.5 w-3.5 mr-1" /> {formatDate(a.created_at)}</Badge>
              {a.cv_filename && (
                <Badge variant="secondary" className="max-w-full">
                  <FileDown className="h-3.5 w-3.5 mr-1" />
                  <span className="truncate max-w-[220px]" title={a.cv_filename}>{a.cv_filename}</span>
                </Badge>
              )}
            </div>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field icon={<AtSign className="h-4 w-4" />} label="Email" value={a.email}/>
            <Field icon={<Phone className="h-4 w-4" />} label="Phone" value={a.phone || "—"}/>
          </div>
          <MessageCard icon={<FileText className="h-4 w-4" />} label="Cover Letter" text={a.cover_letter || ""}/>
        </div>
      );
    }

    if (view === "trash") {
      const t = selected as Trash;
      return (
        <div className="space-y-4">
          <DetailsShell
            title={`${t.entity_type} #${t.entity_id}`}
            subtitle="Deleted item snapshot"
            leadingIcon={<Trash2 className="h-5 w-5" />}
            meta={<Badge variant="outline"><CalendarClock className="h-3.5 w-3.5 mr-1" /> {formatDate(t.deleted_at)}</Badge>}
            rightArea={null}
          />
          <div className="rounded-xl border p-4 bg-muted/40">
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-4 w-4" />
              <div className="text-sm font-medium">Payload snapshot (read-only)</div>
            </div>
            <pre className="text-xs whitespace-pre-wrap break-words leading-relaxed max-h-80 overflow-auto">
{JSON.stringify(t.payload, null, 2)}
            </pre>
          </div>
        </div>
      );
    }

    return null;
  }
  // ===== end details renderers =====

  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            {headerRight}
          </div>

          {anyError && (
            <div className="mb-4 rounded border border-red-200 bg-red-50 text-red-700 p-3 text-sm">
              Failed to load some data. Try refreshing or re-login.
            </div>
          )}

          {/* Main layout: left nav + content */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px,1fr] gap-6">
            {/* Left navigation */}
            <Card className="h-fit">
              <CardHeader><CardTitle>Navigation</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <button className={clsx("w-full text-left p-2 rounded hover:bg-muted", isCurrent("home") && "bg-muted")} onClick={()=>setView("home")}>
                  Overview
                </button>
                <button className={clsx("w-full text-left p-2 rounded hover:bg-muted", isCurrent("contacts") && "bg-muted")} onClick={()=>setView("contacts")}>
                  Contact Requests
                </button>
                <button className={clsx("w-full text-left p-2 rounded hover:bg-muted", isCurrent("demos") && "bg-muted")} onClick={()=>setView("demos")}>
                  Demo Requests
                </button>
                <button className={clsx("w-full text-left p-2 rounded hover:bg-muted", isCurrent("jobs") && "bg-muted")} onClick={()=>setView("jobs")}>
                  Jobs
                </button>
                <button className={clsx("w-full text-left p-2 rounded hover:bg-muted", isCurrent("apps") && "bg-muted")} onClick={()=>setView("apps")}>
                  Applications
                </button>
                <button className={clsx("w-full text-left p-2 rounded hover:bg-muted", isCurrent("trash") && "bg-muted")} onClick={()=>setView("trash")}>
                  Trash
                </button>
              </CardContent>
            </Card>

            {/* Right content */}
            <div className="space-y-6">
              {/* Overview grid */}
              {view === "home" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  <Section title="Contact Requests" icon={<Mail className="h-5 w-5" />} onViewAll={()=>setView("contacts")}>
                    <ul className="space-y-3">
                      {(qContacts.data || []).slice(0,5).map((c)=>(
                        <li key={c.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>{setSelected(c); setView("contacts");}}>
                          <div className="min-w-0">
                            <div className="font-medium truncate">{c.name} <span className="text-muted-foreground">({c.email})</span></div>
                            <div className="text-sm text-muted-foreground line-clamp-2 break-words">{c.message}</div>
                            <div className="text-xs text-muted-foreground mt-1">{formatDate(c.created_at)}</div>
                          </div>
                          {renderRowDelete("contacts", c.id)}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Demo Requests" icon={<Calendar className="h-5 w-5" />} onViewAll={()=>setView("demos")}>
                    <ul className="space-y-3">
                      {(qDemos.data || []).slice(0,5).map((d)=>(
                        <li key={d.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>{setSelected(d); setView("demos");}}>
                          <div className="min-w-0">
                            <div className="font-medium truncate">{d.name} <span className="text-muted-foreground">({d.email})</span></div>
                            <div className="text-sm text-muted-foreground line-clamp-2 break-words">{d.message}</div>
                            <div className="text-xs text-muted-foreground mt-1">{formatDate(d.created_at)}</div>
                          </div>
                          {renderRowDelete("demos", d.id)}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Jobs" icon={<Briefcase className="h-5 w-5" />} onViewAll={()=>setView("jobs")}>
                    <ul className="space-y-3">
                      {(qJobs.data || []).slice(0,5).map((j)=>(
                        <li key={j.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>{setSelected(j); setView("jobs");}}>
                          <div className="min-w-0">
                            <div className="flex items-center justify-between gap-4">
                              <div className="font-medium truncate">{j.title}</div>
                              <Badge variant="secondary" className="shrink-0">{j.employment_type || "—"}</Badge>
                            </div>
                            <div className="text-xs text-muted-foreground">{formatDate(j.created_at)} • {j.is_active ? "Active" : "Inactive"}</div>
                          </div>
                          {renderRowDelete("jobs", j.id)}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Applications" icon={<FileText className="h-5 w-5" />} onViewAll={()=>setView("apps")}>
                    <ul className="space-y-3">
                      {(qApps.data || []).slice(0,5).map((a)=>(
                        <li key={a.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>{setSelected(a); setView("apps");}}>
                          <div className="min-w-0">
                            <div className="font-medium truncate">{a.name} <span className="text-muted-foreground">({a.email})</span></div>
                            <div className="text-xs text-muted-foreground">Job #{a.job_id} • {formatDate(a.created_at)}</div>
                          </div>
                          {renderRowDelete("apps", a.id)}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Trash" icon={<Trash2 className="h-5 w-5" />} onViewAll={()=>setView("trash")}>
                    <ul className="space-y-3">
                      {(qTrash.data || []).slice(0,5).map((t)=>(
                        <li key={t.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>{setSelected(t); setView("trash");}}>
                          <div className="font-medium capitalize">{t.entity_type} #{t.entity_id}</div>
                          <div className="text-xs text-muted-foreground">{formatDate(t.deleted_at)}</div>
                        </li>
                      ))}
                    </ul>
                  </Section>
                </div>
              )}

              {/* List + Details */}
              {view !== "home" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    {/* Dynamic header: add "New Job" button when in Jobs */}
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="capitalize">{view}</CardTitle>
                      {view === "jobs" && (
                        <div className="flex items-center gap-2">
                          <Button size="sm" onClick={()=>{ setShowJobCreator(true); setSelected(null); setJobEditMode(false); }}>
                            <Plus className="h-4 w-4 mr-2" /> New Job
                          </Button>
                        </div>
                      )}
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Inline creator panel */}
                      {view === "jobs" && showJobCreator && (
                        <JobForm
                          initial={emptyJob}
                          submitting={mCreateJob.isPending}
                          onCancel={()=>setShowJobCreator(false)}
                          onSubmit={(draft)=> mCreateJob.mutate(draft)}
                        />
                      )}

                      {loading && <div className="text-muted-foreground">Loading…</div>}

                      {!loading && view === "contacts" && (
                        <ul className="space-y-3">
                          {(qContacts.data || []).map((c)=>(
                            <li key={c.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>setSelected(c)}>
                              <div className="min-w-0">
                                <div className="font-medium truncate">{c.name} <span className="text-muted-foreground">({c.email})</span></div>
                                <div className="text-sm text-muted-foreground line-clamp-2 break-words">{c.message}</div>
                                <div className="text-xs text-muted-foreground mt-1">{formatDate(c.created_at)}</div>
                              </div>
                              {renderRowDelete("contacts", c.id)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {!loading && view === "demos" && (
                        <ul className="space-y-3">
                          {(qDemos.data || []).map((d)=>(
                            <li key={d.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>setSelected(d)}>
                              <div className="min-w-0">
                                <div className="font-medium truncate">{d.name} <span className="text-muted-foreground">({d.email})</span></div>
                                <div className="text-sm text-muted-foreground line-clamp-2 break-words">{d.message}</div>
                                <div className="text-xs text-muted-foreground mt-1">{formatDate(d.created_at)}</div>
                              </div>
                              {renderRowDelete("demos", d.id)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {!loading && view === "jobs" && (
                        <ul className="space-y-3">
                          {(qJobs.data || []).map((j)=>(
                            <li key={j.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-3" onClick={()=>{setSelected(j); setJobEditMode(false);}}>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-4">
                                  <div className="font-medium truncate">{j.title}</div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <Badge variant="secondary">{j.employment_type || "—"}</Badge>
                                    <Badge variant={j.is_active ? "secondary" : "outline"}>{j.is_active ? "Active" : "Inactive"}</Badge>
                                  </div>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {formatDate(j.created_at)} {j.location ? `• ${j.location}` : ""}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0" onClick={(e)=>e.stopPropagation()}>
                                <Button size="sm" variant="outline" onClick={()=>{ setSelected(j); setJobEditMode(true); }}>
                                  <Pencil className="h-4 w-4 mr-1" /> Edit
                                </Button>
                                <Button
                                  size="sm"
                                  variant={j.is_active ? "secondary" : "default"}
                                  onClick={()=> mUpdateJob.mutate({ id: j.id, body: { is_active: !j.is_active } })}
                                >
                                  <BadgeCheck className="h-4 w-4 mr-1" /> {j.is_active ? "Deactivate" : "Activate"}
                                </Button>
                                {renderRowDelete("jobs", j.id)}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}

                      {!loading && view === "apps" && (
                        <ul className="space-y-3">
                          {(qApps.data || []).map((a)=>(
                            <li key={a.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer flex items-start justify-between gap-2" onClick={()=>setSelected(a)}>
                              <div className="min-w-0">
                                <div className="font-medium truncate">{a.name} <span className="text-muted-foreground">({a.email})</span></div>
                                <div className="text-xs text-muted-foreground">Job #{a.job_id} • {formatDate(a.created_at)}</div>
                              </div>
                              {renderRowDelete("apps", a.id)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {!loading && view === "trash" && (
                        <ul className="space-y-3">
                          {(qTrash.data || []).map((t)=>(
                            <li key={t.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>setSelected(t)}>
                              <div className="font-medium capitalize">{t.entity_type} #{t.entity_id}</div>
                              <div className="text-xs text-muted-foreground">{formatDate(t.deleted_at)}</div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle>Details</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      <DetailsView />
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>

          {/* Confirm dialog */}
          <AlertDialog open={confirm.open} onOpenChange={(open)=> setConfirm(s=>({...s, open}))}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{confirm.title || "Are you sure?"}</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={confirm.onConfirm}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
