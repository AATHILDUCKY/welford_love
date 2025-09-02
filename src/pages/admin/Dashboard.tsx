// src/pages/admin/Dashboard.tsx
import { useState } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Briefcase, FileText, Trash2, ArrowRight } from "lucide-react";

type Contact = { id:number; name:string; email:string; company?:string|null; message:string; created_at:string; };
type Demo   = { id:number; name:string; email:string; company_name?:string|null; job_title?:string|null; message:string; created_at:string; };
type Job    = { id:number; title:string; location?:string|null; employment_type?:string|null; description:string; is_active:boolean; created_at:string; };
type App    = { id:number; job_id:number; name:string; email:string; phone?:string|null; cv_filename:string; cover_letter?:string|null; created_at:string; };
type Trash  = { id:number; entity_type:string; entity_id:number; payload:any; deleted_at:string; };

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
  try { return new Date(s).toLocaleString(); } catch { return s; }
}

const Dashboard = () => {
  const api = useApi();
  const [view, setView] = useState<"contacts"|"demos"|"jobs"|"apps"|"trash"|"home">("home");
  const [selected, setSelected] = useState<any|null>(null);

  const qContacts = useQuery({
    queryKey: ["admin","contacts"],
    queryFn: () => api.get<Contact[]>("/admin/contacts?limit=5"),
  });
  const qDemos = useQuery({
    queryKey: ["admin","demos"],
    queryFn: () => api.get<Demo[]>("/admin/demos?limit=5"),
  });
  const qJobs = useQuery({
    queryKey: ["admin","jobs"],
    queryFn: () => api.get<Job[]>("/admin/jobs?limit=5"),
  });
  const qApps = useQuery({
    queryKey: ["admin","apps"],
    queryFn: () => api.get<App[]>("/admin/applications?limit=5"),
  });
  const qTrash = useQuery({
    queryKey: ["admin","trash"],
    queryFn: () => api.get<Trash[]>("/admin/trash?limit=5"),
  });

  const loading = qContacts.isLoading || qDemos.isLoading || qJobs.isLoading || qApps.isLoading || qTrash.isLoading;

  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            {view !== "home" && <Button variant="outline" onClick={() => {setView("home"); setSelected(null);}}>Back to overview</Button>}
          </div>

          {/* Overview grid */}
          {view === "home" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <Section title="Contact Requests" icon={<Mail className="h-5 w-5" />} onViewAll={()=>setView("contacts")}>
                <ul className="space-y-3">
                  {(qContacts.data || []).map((c)=>(
                    <li key={c.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>{setSelected(c); setView("contacts");}}>
                      <div className="font-medium">{c.name} <span className="text-muted-foreground">({c.email})</span></div>
                      <div className="text-sm text-muted-foreground line-clamp-2">{c.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">{formatDate(c.created_at)}</div>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Demo Requests" icon={<Calendar className="h-5 w-5" />} onViewAll={()=>setView("demos")}>
                <ul className="space-y-3">
                  {(qDemos.data || []).map((d)=>(
                    <li key={d.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>{setSelected(d); setView("demos");}}>
                      <div className="font-medium">{d.name} <span className="text-muted-foreground">({d.email})</span></div>
                      <div className="text-sm text-muted-foreground line-clamp-2">{d.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">{formatDate(d.created_at)}</div>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Jobs" icon={<Briefcase className="h-5 w-5" />} onViewAll={()=>setView("jobs")}>
                <ul className="space-y-3">
                  {(qJobs.data || []).map((j)=>(
                    <li key={j.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>{setSelected(j); setView("jobs");}}>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{j.title}</div>
                        <Badge variant="secondary">{j.employment_type || "—"}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{formatDate(j.created_at)} • {j.is_active ? "Active" : "Inactive"}</div>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Applications" icon={<FileText className="h-5 w-5" />} onViewAll={()=>setView("apps")}>
                <ul className="space-y-3">
                  {(qApps.data || []).map((a)=>(
                    <li key={a.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>{setSelected(a); setView("apps");}}>
                      <div className="font-medium">{a.name} <span className="text-muted-foreground">({a.email})</span></div>
                      <div className="text-xs text-muted-foreground">Job #{a.job_id} • {formatDate(a.created_at)}</div>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Trash" icon={<Trash2 className="h-5 w-5" />} onViewAll={()=>setView("trash")}>
                <ul className="space-y-3">
                  {(qTrash.data || []).map((t)=>(
                    <li key={t.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>{setSelected(t); setView("trash");}}>
                      <div className="font-medium capitalize">{t.entity_type} #{t.entity_id}</div>
                      <div className="text-xs text-muted-foreground">{formatDate(t.deleted_at)}</div>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          )}

          {/* List views */}
          {view !== "home" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
              <Card className="lg:col-span-2">
                <CardHeader><CardTitle className="capitalize">{view}</CardTitle></CardHeader>
                <CardContent>
                  {loading && <div className="text-muted-foreground">Loading…</div>}
                  {!loading && view === "contacts" && (
                    <ul className="space-y-3">
                      {(qContacts.data || []).map((c)=>(
                        <li key={c.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>setSelected(c)}>
                          <div className="font-medium">{c.name} <span className="text-muted-foreground">({c.email})</span></div>
                          <div className="text-sm text-muted-foreground line-clamp-2">{c.message}</div>
                          <div className="text-xs text-muted-foreground mt-1">{formatDate(c.created_at)}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!loading && view === "demos" && (
                    <ul className="space-y-3">
                      {(qDemos.data || []).map((d)=>(
                        <li key={d.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>setSelected(d)}>
                          <div className="font-medium">{d.name} <span className="text-muted-foreground">({d.email})</span></div>
                          <div className="text-sm text-muted-foreground line-clamp-2">{d.message}</div>
                          <div className="text-xs text-muted-foreground mt-1">{formatDate(d.created_at)}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!loading && view === "jobs" && (
                    <ul className="space-y-3">
                      {(qJobs.data || []).map((j)=>(
                        <li key={j.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>setSelected(j)}>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{j.title}</div>
                            <Badge variant="secondary">{j.employment_type || "—"}</Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">{formatDate(j.created_at)} • {j.is_active ? "Active" : "Inactive"}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!loading && view === "apps" && (
                    <ul className="space-y-3">
                      {(qApps.data || []).map((a)=>(
                        <li key={a.id} className="p-3 rounded border hover:bg-muted/50 cursor-pointer" onClick={()=>setSelected(a)}>
                          <div className="font-medium">{a.name} <span className="text-muted-foreground">({a.email})</span></div>
                          <div className="text-xs text-muted-foreground">Job #{a.job_id} • {formatDate(a.created_at)}</div>
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
                <CardContent>
                  {!selected && <div className="text-muted-foreground">Select an item to view details.</div>}
                  {selected && <pre className="text-xs whitespace-pre-wrap break-all">{JSON.stringify(selected, null, 2)}</pre>}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
