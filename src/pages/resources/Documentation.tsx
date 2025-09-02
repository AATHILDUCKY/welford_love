import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Book,
  Search,
  Download,
  ExternalLink,
  FileText,
  Code,
  Settings,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/layout/layout";

/** ======= THEME ======= */
const BRAND = "#032955"; // Welford brand

/** ======= TYPES ======= */
type DocSection = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  items: string[];
};

type Resource = {
  title: string;
  description: string;
  type: "PDF" | "Web" | "ZIP" | string;
  size: string;
  href?: string;
};

/** ======= DATA ======= */
const docSections: DocSection[] = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Quick start guide and initial setup instructions",
    items: ["Installation Guide", "Quick Start Tutorial", "System Requirements", "Initial Configuration"],
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation and code examples",
    items: ["Authentication API", "User Management API", "Access Control API", "Reporting API"],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Advanced configuration and customization guides",
    items: ["Identity Providers Setup", "Policy Configuration", "Workflow Automation", "Integration Setup"],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    items: ["Common Error Codes", "Performance Optimization", "Debugging Guide", "Support Resources"],
  },
];

const resources: Resource[] = [
  {
    title: "Administrator Guide",
    description: "Complete guide for system administrators",
    type: "PDF",
    size: "2.4 MB",
    href: "/docs/admin-guide.pdf",
  },
  {
    title: "Developer Documentation",
    description: "Technical documentation for developers",
    type: "Web",
    size: "Online",
    href: "/developer",
  },
  {
    title: "Security Best Practices",
    description: "Security guidelines and recommendations",
    type: "PDF",
    size: "1.8 MB",
    href: "/docs/security-best-practices.pdf",
  },
  {
    title: "Integration Examples",
    description: "Sample code and integration examples",
    type: "ZIP",
    size: "5.2 MB",
    href: "/downloads/integration-examples.zip",
  },
];

/** ======= UTILS ======= */
function normalize(s: string) {
  return s.toLowerCase().trim();
}

function highlight(text: string, query: string) {
  if (!query) return text;
  const q = normalize(query);
  const idx = normalize(text).indexOf(q);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);

  return (
    <>
      {before}
      <mark className="bg-[rgba(3,41,85,0.12)] text-[#032955] rounded px-0.5">{match}</mark>
      {after}
    </>
  );
}

/** ======= BADGES ======= */
function TypeBadge({ type }: { type: string }) {
  const palettes: Record<string, string> = {
    PDF: "bg-red-500/10 text-red-700 ring-red-500/20",
    Web: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20",
    ZIP: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
  };
  const cls = palettes[type] || "bg-[rgba(3,41,85,0.08)] text-[#032955] ring-[rgba(3,41,85,0.18)]";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ring-1 ${cls}`}>
      <FileText className="w-3.5 h-3.5 text-[#032955]" />
      {type}
    </span>
  );
}

/** ======= PAGE ======= */
const Documentation = () => {
  const [query, setQuery] = useState("");

  const { filteredSections, filteredResources } = useMemo(() => {
    if (!query) return { filteredSections: docSections, filteredResources: resources };
    const q = normalize(query);

    const filteredSections = docSections
      .map((section) => {
        const matchesTitle = normalize(section.title).includes(q);
        const matchesDesc = normalize(section.description).includes(q);
        const matchedItems = section.items.filter((i) => normalize(i).includes(q));
        if (matchesTitle || matchesDesc || matchedItems.length) {
          return { ...section, items: matchedItems.length ? matchedItems : section.items };
        }
        return null;
      })
      .filter(Boolean) as DocSection[];

    const filteredResources = resources.filter(
      (r) => normalize(r.title).includes(q) || normalize(r.description).includes(q) || normalize(r.type).includes(q),
    );

    return { filteredSections, filteredResources };
  }, [query]);

  return (
    <Layout>
      {/* HERO / SEARCH */}
      <section
        className="relative py-20 lg:py-28 text-white overflow-hidden"
        style={{
          background: `
            radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,0.08), transparent 60%),
            radial-gradient(1200px 800px at 90% 10%, rgba(255,255,255,0.06), transparent 60%),
            linear-gradient(180deg, ${BRAND}, #0a1e3f 70%)
          `,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(50rem 20rem at 50% -10%, rgba(255,255,255,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Documentation</h1>
            <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
              Everything you need to implement, configure, and optimize Welford IAG in your environment.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/85">
                <Search className="w-5 h-5" />
              </div>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation…"
                className="pl-11 h-12 rounded-2xl bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm 
                           focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:border-white/40"
                aria-label="Search documentation"
              />
              <div className="mt-3 text-sm text-white/70">
                {query ? (
                  <>Showing results for: <span className="font-medium text-white">{query}</span></>
                ) : (
                  <>Try “Authentication API”, “Policy Configuration”, or “Installation Guide”.</>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOC SECTIONS */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSections.map((section, index) => (
              <Card
                key={index}
                className="
                  card-hover transition hover:shadow-xl hover:shadow-foreground/5
                  border border-[rgba(3,41,85,0.18)]
                  bg-[linear-gradient(180deg,rgba(3,41,85,0.045),rgba(3,41,85,0.02))]
                "
              >
                <CardContent className="p-7 lg:p-8">
                  <div className="flex items-start gap-4">
                    <section.icon className="w-9 h-9 text-[#032955] flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xl mb-1.5">{highlight(section.title, query)}</h3>
                      <p className="text-muted-foreground mb-4">{highlight(section.description, query)}</p>

                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="group">
                            <a
                              href="#"
                              className="inline-flex items-center text-sm text-foreground/90 hover:text-[#032955] transition"
                            >
                              <span>{highlight(item, query)}</span>
                              <ExternalLink className="ml-2 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 text-[#032955]" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[rgba(3,41,85,0.18)] pt-4 text-xs text-muted-foreground">
                    Updated regularly • Comprehensive guides and examples
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSections.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No sections match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-16 lg:py-20 bg-[rgba(3,41,85,0.04)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Downloadable Resources</h2>
            <p className="text-muted-foreground">Download guides, examples, and reference materials</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredResources.map((resource, index) => (
              <Card
                key={index}
                className="
                  card-hover transition hover:shadow-xl hover:shadow-foreground/5
                  border border-[rgba(3,41,85,0.18)]
                  bg-[linear-gradient(180deg,rgba(3,41,85,0.045),rgba(3,41,85,0.02))]
                "
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-[#032955] flex-shrink-0 mt-1" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{highlight(resource.title, query)}</h3>
                          <TypeBadge type={resource.type} />
                          <span className="text-xs text-muted-foreground">{resource.size}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1.5">
                          {highlight(resource.description, query)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild={!!resource.href}
                        className="group border-[rgba(3,41,85,0.25)] text-[#032955] hover:bg-[rgba(3,41,85,0.06)]"
                        aria-label={`Download ${resource.title}`}
                      >
                        {resource.href ? (
                          <a href={resource.href}>
                            <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition text-[#032955]" />
                            Download
                          </a>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2 text-[#032955]" />
                            Download
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found.</p>
            </div>
          )}
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Quick Links</h2>
          </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Release Notes",
              desc: "Latest updates and feature releases",
              icon: Book,
              href: "/release-notes",
              cta: "View Updates",
            },
            {
              title: "SDK & Tools",
              desc: "Development tools and libraries",
              icon: Code,
              href: "/sdk",
              cta: "Download SDK",
            },
            {
              title: "Community",
              desc: "Join our developer community",
              icon: HelpCircle,
              href: "/community",
              cta: "Join Forum",
            },
          ].map((q, i) => (
            <a key={i} href={q.href} className="group" aria-label={`${q.title} - ${q.cta}`}>
              <Card
                className="
                  card-hover h-full transition hover:shadow-xl hover:shadow-foreground/5
                  border border-[rgba(3,41,85,0.18)]
                  bg-[linear-gradient(180deg,rgba(3,41,85,0.045),rgba(3,41,85,0.02))]
                "
              >
                <CardContent className="p-8 text-center">
                  <q.icon className="w-12 h-12 text-[#032955] mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{q.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{q.desc}</p>
                  <div className="inline-flex items-center text-sm text-[#032955]">
                    {q.cta}
                    <ChevronRight className="w-4 h-4 ml-1 transition group-hover:translate-x-0.5 text-[#032955]" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        </div>
      </section>

      {/* SUPPORT CTA — styled like your Videos & Demos CTA */}
      <section className="py-16 text-white" style={{ backgroundColor: BRAND }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Need Additional Help?</h2>
            <p className="text-lg text-white/85">
              Can’t find what you’re looking for? Our team is here to help, or explore more learning options.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-[#032955] hover:bg-white/90" asChild>
                <a href="/support" aria-label="Contact Support">Contact Support</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#032955] hover:bg-white/90"
                asChild
              >
                <a href="/training" aria-label="Schedule Training">Schedule Training</a>
              </Button>
            </div>

            <p className="text-sm text-white/70">
              Response within 1 business day • Knowledge base & training resources available
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documentation;
