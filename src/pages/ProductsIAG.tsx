import Layout from "@/components/layout/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Eye,
  Lock,
  Users,
  RefreshCw,
  BarChart,
  CheckCircle,
  Server,
  Cloud,
  Database,
  Settings,
  Calendar,
  Phone,
} from "lucide-react";
import HeroSection2 from "@/components/ui/herosection2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faMicrosoft,
  faGoogle,
  faGithub,
  faGitlab,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer as faServerSolid,
  faCloud as faCloudSolid,
  faDatabase as faDatabaseSolid,
  faShieldHalved,
  faUserShield,
  faUsers as faUsersSolid,
  faSitemap,
  faBucket,
  faMicrochip,
  faIdBadge,
  faLock as faLockSolid,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

/** ---------------- Copy & Data ---------------- */

const breadcrumb = [
  { label: "Products", href: "/products" },
  { label: "Welford Identity & Access Governance (IAG)", href: "/products/iag" },
];

const keyCapabilities = [
  {
    icon: Zap,
    title: "Autonomous Access Provisioning",
    description:
      "Eliminate tickets and admin bottlenecks with fully automated provisioning and revocation using time-bound entitlements.",
  },
  {
    icon: RefreshCw,
    title: "Universal Just-in-Time (JIT) Access",
    description:
      "Grant access only when it’s needed—and revoke automatically when it’s not. Treat every access like privileged access.",
  },
  {
    icon: Eye,
    title: "Real-Time Visibility & Control",
    description:
      "Instantly see who has access to what across systems or by user—no more waiting for exports or admin reports.",
  },
  {
    icon: Settings,
    title: "Granular Entitlement Management",
    description:
      "Fine-grained control for Linux, Microsoft 365, Azure, AWS, GCP, and enterprise databases with session-level enforcement and no standing credentials.",
  },
  {
    icon: BarChart,
    title: "Intelligent Recommendations",
    description:
      "AI-powered insights flag risky entitlements, recommend right-sizing, and continuously strengthen your governance posture.",
  },
  {
    icon: Users,
    title: "Non-Personal Technical Accounts",
    description:
      "Securely govern service principals, app identities, and schema-based technical accounts across platforms and databases.",
  },
  {
    icon: RefreshCw,
    title: "Identity Lifecycle Automation",
    description:
      "Automate onboarding, offboarding, and role changes for joiners, movers, and leavers with policy-driven workflows.",
  },
  {
    icon: Lock,
    title: "Single Sign-On (SSO) & MFA",
    description:
      "Deliver seamless authentication and strong security with integrated SSO and multi-factor authentication.",
  },
  {
    icon: Database,
    title: "Password Management & Key Vault",
    description:
      "Store and rotate credentials securely and integrate with Key Vaults for sensitive asset handling.",
  },
  {
    icon: Server,
    title: "Universal Integration",
    description:
      "Connect to modern and legacy systems via APIs, database connectors, LDAP, and file-based mechanisms for rapid rollout.",
  },
];

const whyChoose = [
  {
    title: "Unified Access Governance",
    description:
      "Centrally manage access across all enterprise resources from one powerful, cloud-native platform.",
  },
  {
    title: "Built for Zero Trust",
    description:
      "Treat all access as privileged and eliminate standing entitlements by default.",
  },
  {
    title: "Autonomous & Scalable",
    description:
      "Automate provisioning at scale without tickets or administrator queues.",
  },
  {
    title: "Continuous Visibility",
    description:
      "See every entitlement in real time—by system or by user—for faster, smarter decisions.",
  },
  {
    title: "Compliance Made Easy",
    description:
      "Align with ISO 27001, Zero Trust, and more with full audit trails, SoD checks, and policy enforcement.",
  },
  {
    title: "Rapid, Flexible Integration",
    description:
      "Plug into your existing IT landscape quickly using standards-based connectors.",
  },
];

const integrations = [
  "Azure Cloud",
  "Linux",
  "Oracle",
  "SAP",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "LDAP",
  "Google Groups",
  "GCP",
  "GitLab",
  "GitHub",
  "GCP Project",
  "GCP Compute",
  "GCP Cloud SQL",
  "GCP Bucket",
  "Azure VM",
  "Azure SQL",
  "Azure Blob Storage",
  "AWS SSO IAM Identity Center",
  "AWS IAM Role",
  "AWS",
  "Amazon EKS",
  "Amazon EC2",
  "Amazon Aurora",
  "Microsoft AD",
];

function faIconFor(name: string) {
  const s = name.toLowerCase();
  if (s.includes("aws")) return faAws;
  if (s.includes("azure")) return faMicrosoft;
  if (s.includes("microsoft ad")) return faSitemap;
  if (s === "linux") return faLinux;
  if (s.includes("gcp") || s.includes("google")) return faGoogle;
  if (s.includes("github")) return faGithub;
  if (s.includes("gitlab")) return faGitlab;

  if (s.includes("compute") || s.includes("vm") || s.includes("ec2"))
    return faServerSolid;
  if (s.includes("eks") || s.includes("project")) return faDiagramProject;
  if (s.includes("bucket") || s.includes("blob")) return faBucket;

  if (
    s.includes("sql") ||
    s.includes("postgres") ||
    s.includes("mysql") ||
    s.includes("aurora") ||
    s.includes("oracle")
  )
    return faDatabaseSolid;
  if (s.includes("mongo")) return faDatabaseSolid;

  if (s.includes("iam role") || s.includes("privilege")) return faUserShield;
  if (s.includes("sso") || s.includes("identity center")) return faIdBadge;
  if (s.includes("ldap") || s.includes("directory")) return faSitemap;
  if (s.includes("groups")) return faUsersSolid;

  if (s.includes("security") || s.includes("lock")) return faLockSolid;
  if (s.includes("cloud")) return faCloudSolid;
  if (s.includes("micro") || s.includes("cpu")) return faMicrochip;

  return faShieldHalved;
}

/** ---------------- Page ---------------- */

const ProductsIAG = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 lg:px-8 pt-6 pb-2 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumb.map((b, i) => (
            <li key={b.href} className="flex items-center gap-2">
              {i > 0 && <span className="opacity-60">/</span>}
              <Link to={b.href} className="hover:underline">
                {b.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* Hero */}
      <HeroSection2
        badge="Welford Identity & Access Governance (IAG)"
        title="Secure. Simplify. Govern."
        subtitle="Welford IAG is a unified, cloud-native identity and access governance platform built to simplify access management across your enterprise. Designed with Zero Trust at its core, it automates identity lifecycle, enforces just-in-time access, and gives real-time visibility into user entitlements across all systems."
        bullets={[
          "Unified, cloud-native platform",
          "Zero Trust by design",
          "Real-time entitlement visibility",
        ]}
        primaryCta={{
          label: "Schedule a Demo",
          href: "/demo",
          icon: <Calendar className="mr-2 h-4 w-4" />,
        }}
        secondaryCta={{
          label: "Talk to Sales",
          href: "tel:+18001234567",
          icon: <Phone className="mr-2 h-4 w-4" />,
        }}
        image={{
          src: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
          alt: "Welford IAG live preview",
        }}
        imageBadgeText="30–45 min session"
        id="demo-hero"
      />

      {/* Product Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Visual */}
            <div className="bg-muted rounded-xl p-6 lg:p-8 border border-border">
              <img
                src="https://images.pexels.com/photos/7418077/pexels-photo-7418077.jpeg"
                alt="Welford IAG Dashboard"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Copy */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                <span>Product Overview</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
                Centralized, Intelligent Access Governance
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-4 leading-relaxed">
                Welford IAG provides centralized, intelligent access governance
                across the enterprise. It replaces fragmented, manual processes
                with automated, policy-driven workflows to govern access across
                applications, servers, databases, and cloud services.
              </p>
              <p className="text-base lg:text-lg text-foreground mb-6 leading-relaxed">
                By treating all access as privileged and enforcing just-in-time
                controls, Welford IAG enhances security, reduces operational
                complexity, and empowers your organization to meet compliance
                requirements with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-secondary/30 px-3 py-1.5 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  <span>Zero Trust Ready</span>
                </div>
                <div className="bg-secondary/30 px-3 py-1.5 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  <span>Policy-Driven Automation</span>
                </div>
                <div className="bg-secondary/30 px-3 py-1.5 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  <span>Audit-Grade Visibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 lg:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              <Settings className="w-4 h-4" />
              <span>⚙️ Key Capabilities</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient">
              Govern Every Access. Automatically.
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Automate provisioning, enforce JIT, and get real-time visibility across your entire estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyCapabilities.map((item, idx) => (
              <Card key={idx} className="card-feature group">
                <CardHeader className="pb-3">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base lg:text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Welford IAG */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Copy */}
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                <span>🌟 Why Choose Welford IAG?</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gradient">
                Built for Zero Trust. Ready for Scale.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Centrally govern access across cloud, on-prem, and hybrid environments with audit-ready evidence and continuous insight.
              </p>

              <div className="space-y-4">
                {whyChoose.map((f, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base lg:text-lg">
                        {f.title}
                      </h3>
                      <p className="text-muted-foreground text-sm lg:text-base">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Why choose Welford IAG"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative py-14 lg:py-20 bg-white overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50rem 50rem at 50% -10%, rgba(3,41,85,0.05) 0%, transparent 60%)",
          }}
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[rgba(3,41,85,0.12)]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-[rgba(3,41,85,0.12)]" />

        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-2 mb-10">
            <span
              className="inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium"
              style={{
                color: "#032955",
                backgroundColor: "rgba(3,41,85,0.08)",
                border: "1px solid rgba(3,41,85,0.2)",
              }}
            >
              Integrations
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold">
              The Welford IAG Integration Ecosystem
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Cloud Platforms: Azure, AWS, GCP • Identity: Entra ID, LDAP, AD • Databases: Oracle, SQL Server, PostgreSQL, MySQL • Apps: Oracle ERP, Salesforce (coming soon)
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {integrations.map((name, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.15)" }}
                title={name}
              >
                <div
                  className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-sm group-hover:scale-105 transition-transform"
                  style={{
                    color: "#032955",
                    backgroundColor: "rgba(3,41,85,0.08)",
                    border: "1px solid rgba(3,41,85,0.2)",
                  }}
                >
                  <FontAwesomeIcon icon={faIconFor(name)} className="text-base" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-sm truncate max-w-[9rem]">
                    {name}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Connector
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="sm"
              className="border-[#032955] text-[#032955] hover:bg-[#032955] hover:text-white"
              asChild
            >
              <Link to="/integrations">View All Integrations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "rgba(3,41,85,0.03)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "rgba(3,41,85,0.10)",
                color: "#032955",
                border: "1px solid rgba(3,41,85,0.25)",
              }}
            >
              <Users className="w-4 h-4" style={{ color: "#032955" }} />
              <span>FAQs</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold">Common Questions</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers about deployment, integrations, and security.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            <details className="rounded-lg border p-4 bg-white">
              <summary className="cursor-pointer font-medium">
                How fast can we go live with Welford IAG?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Most customers start with a phased rollout targeting priority systems.
                Standards-based connectors and file/API options accelerate time-to-value.
              </p>
            </details>
            <details className="rounded-lg border p-4 bg-white">
              <summary className="cursor-pointer font-medium">
                Does Welford IAG work across hybrid environments?
              </summary>
              <p className="mt-2 text-muted-foreground">
                Yes. Govern access consistently across cloud, on-prem, and hybrid estates from a single control plane.
              </p>
            </details>
            <details className="rounded-lg border p-4 bg-white">
              <summary className="cursor-pointer font-medium">
                Can we enforce JIT without disrupting teams?
              </summary>
              <p className="mt-2 text-muted-foreground">
                JIT policies are time-bound and approval-driven. Users request access when needed, and revocation is automatic after use.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              <Cloud className="w-4 h-4" />
              <span>From the Blog</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold">Identity, Access & Governance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Insights on Zero Trust, entitlement risk, and practical IAG rollouts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Eliminating Standing Privileges with JIT",
                desc: "A practical blueprint for moving from static roles to time-bound access.",
              },
              {
                title: "Building an Audit-Ready Access Program",
                desc: "How to automate evidence for ISO 27001, SOC 2, GDPR and more.",
              },
              {
                title: "Bringing Legacy Systems into Modern IAG",
                desc: "File, DB and LDAP strategies to bridge older apps without re-platforming.",
              },
            ].map((post, i) => (
              <Card key={i} className="border bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {post.desc}
                  </CardDescription>
                  <div className="mt-4">
                    <Button variant="ghost" asChild>
                      <Link to="/blog">Read more →</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-20" style={{ backgroundColor: "#032955" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 bg-white/10">
              Ready to transform access?
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Let’s get started.
            </h2>

            <p className="text-lg lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover how Identity Security can make your organization more secure and cyber-resilient. Request a demo or meet our experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-[#032955] hover:bg-white/90 text-base lg:text-lg px-7 py-3 shadow-md"
                asChild
              >
                <Link to="/demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#032955] hover:bg-white/90 text-base lg:text-lg px-7 py-3 shadow-md"
                asChild
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
              <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                <span>Industry-certified experts</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                <span>Outcome-driven engagements</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                <span>Flexible delivery models</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsIAG;
