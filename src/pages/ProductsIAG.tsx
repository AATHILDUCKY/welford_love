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
  Server,
  Cloud,
  Database,
  Settings,
  Calendar,
  Phone,
  CheckCircle,
  ShieldCheck,
  Settings2,
  BarChart3,
  Layers,
  FileCheck2,
  LockKeyhole,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
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

// Updated to reflect your Core Capabilities + Security Features content
const keyCapabilities = [
  {
    icon: Shield,
    title: "Centralised Access Management",
    description:
      "Unified governance for all access rights across systems, applications, and infrastructure from a single control point.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control (RBAC)",
    description:
      "Group entitlements into intuitive roles that align with business functions, reduce complexity, and enforce least privilege.",
  },
  {
    icon: Zap,
    title: "Access Requests",
    description:
      "Support self-service, delegated, and just-in-time access requests with advanced approval workflows tailored to your organisation.",
  },
  {
    icon: RefreshCw,
    title: "Pre-Approval Automation",
    description:
      "Define pre-approved access windows to eliminate bottlenecks and accelerate operations without compromising control.",
  },
  {
    icon: Database,
    title: "User & Entitlement Management",
    description:
      "Deliver full lifecycle governance for human users, technical accounts, privileged identities, and their entitlements.",
  },
  {
    icon: Eye,
    title: "Access Reconciliation",
    description:
      "Automatically detect mismatches between approved access and what is actually provisioned in target systems.",
  },
  {
    icon: BarChart,
    title: "Audit Trails & Compliance Reporting",
    description:
      "Maintain complete traceability of access requests, approvals, changes, and historical entitlements with audit-ready reporting.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication (MFA)",
    description:
      "Use flexible MFA options to protect high-value systems and reduce reliance on passwords alone.",
  },
  {
    icon: Cloud,
    title: "Secure Self-Service Password Reset",
    description:
      "Allow users to reset passwords securely without IT involvement, reducing helpdesk load and improving user experience.",
  },
  {
    icon: Settings,
    title: "Password Policies & Multi-Layer Encryption",
    description:
      "Apply strong, configurable password rules and multi-layer encryption to protect sensitive identity and access data end-to-end.",
  },
];

// kept for future use if needed, but not used in JSX
const whyChoose = [
  {
    title: "Centralised Control",
    description:
      "Replace fragmented access tools with one unified control point for the entire enterprise.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Automate provisioning, de-provisioning, approvals, and lifecycle workflows to reduce manual effort.",
  },
  {
    title: "Management Visibility",
    description:
      "Give executives, auditors, and managers real-time insight into who has access, why they have it, how long they should keep it, and when it was approved.",
  },
  {
    title: "Flexibility & Scalability",
    description:
      "Seamlessly integrate with existing infrastructure and scale across cloud, on-premises, hybrid, and SaaS environments.",
  },
  {
    title: "Compliance & Audit Readiness",
    description:
      "Use complete audit trails and point-in-time access views to make audits faster and less disruptive.",
  },
  {
    title: "Universal Just-In-Time Access",
    description:
      "Securely grant temporary access on-demand, reducing standing privileges and supporting Zero Trust principles.",
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
  "Entra ID",
  "Dinamic 365",
  "PowerBI",
  "Active Directory",
  "SAP HANA",
  "SAP business one",
];

/**
 * Map each integration name to a suitable Font Awesome icon
 * (brand logos where possible, otherwise a clear functional icon).
 */
function faIconFor(name: string) {
  const s = name.toLowerCase().trim();

  // Explicit platform & brand mappings
  if (s === "azure cloud" || s.startsWith("azure ")) return faMicrosoft;
  if (s === "aws" || s.startsWith("aws ") || s.startsWith("amazon "))
    return faAws;
  if (s === "gcp" || s.startsWith("gcp ") || s.includes("google"))
    return faGoogle;
  if (s === "linux") return faLinux;

  // Dev & code platforms
  if (s.includes("github")) return faGithub;
  if (s.includes("gitlab")) return faGitlab;

  // Identity & directory services
  if (s.includes("entra id")) return faIdBadge;
  if (s.includes("active directory")) return faSitemap;
  if (s === "ldap" || s.includes("directory")) return faSitemap;
  if (s.includes("groups")) return faUsersSolid;
  if (s.includes("sso") || s.includes("iam identity center"))
    return faIdBadge;
  if (s.includes("iam role")) return faUserShield;

  // Databases & data platforms
  if (
    s.includes("sql") ||
    s.includes("postgres") ||
    s.includes("mysql") ||
    s.includes("aurora") ||
    s.includes("oracle") ||
    s.includes("hana")
  ) {
    return faDatabaseSolid;
  }
  if (s.includes("mongo")) return faDatabaseSolid;

  // Compute & infrastructure
  if (
    s.includes("vm") ||
    s.includes("ec2") ||
    s.includes("compute") ||
    s.includes("eks") ||
    s.includes("server")
  ) {
    return faServerSolid;
  }

  // Storage
  if (s.includes("bucket") || s.includes("blob") || s.includes("storage"))
    return faBucket;

  // Business apps / analytics (PowerBI, SAP, 365)
  if (s.includes("powerbi") || s.includes("power bi")) return faDiagramProject;
  if (s.includes("sap")) return faDiagramProject;
  if (s.includes("365")) return faDiagramProject;

  // Generic fallbacks (keep for anything not matched above)
  if (s.includes("cloud")) return faCloudSolid;
  if (s.includes("security") || s.includes("lock")) return faLockSolid;
  if (s.includes("micro") || s.includes("cpu")) return faMicrochip;

  return faShieldHalved;
}

/** ---------------- Page ---------------- */

const ProductsIAG = () => {
  return (
    <Layout>
      {/* Breadcrumb (unchanged structure) */}
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

      {/* HERO SECTION (content updated to your Hero text) */}
      <section className="relative">
        {/* subtle brand tint backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 60rem at 50% -10%, rgba(3,41,85,0.06) 0%, transparent 60%)",
          }}
        />

        <HeroSection2
          badge="Welford Identity & Access Governance (IAG)"
          title="Secure Every Identity. Simplify Access. Govern with Confidence."
          subtitle="Welford IAG is an enterprise-grade identity governance platform designed to automate, centralise, and simplify access management across your entire organisation. Built on Zero Trust principles, it delivers real-time visibility, stronger security controls, and seamless compliance—without adding operational complexity."
          bullets={[
            "Centralised control over enterprise access",
            "Automated provisioning & de-provisioning",
            "Real-time visibility for executives & auditors",
          ]}
          primaryCta={{
            label: "Schedule a Demo",
            href: "/demo",
            icon: <Calendar className="mr-2 h-4 w-4" />,
          }}
          secondaryCta={{
            label: "Talk to Our Team",
            href: "tel:+94772539327",
            icon: <Phone className="mr-2 h-4 w-4" />,
          }}
          image={{
            src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/9.webp",
            alt: "Welford IAG live preview",
          }}
          imageBadgeText="30–45 min discovery session"
          id="demo-hero"
        />
      </section>

      {/* PRODUCT OVERVIEW SECTION (content updated to your Product Overview) */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
        {/* Ambient brand glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* TOP: Center badge */}
          <div className="mb-4 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
              style={{
                borderColor: "rgba(3,41,85,0.15)",
                color: "#032955",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "#0b4aa8", opacity: 0.75 }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#032955" }}
                />
              </span>

              <span>Product Overview</span>
            </span>
          </div>

          {/* Heading (updated title) */}
          <div className="text-center mb-10">
            <div className="mx-auto w-[90%] sm:w-[85%] lg:w-[70%]">
              <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span
                  className="relative inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
                  }}
                >
                  Unified Identity Governance for Modern Enterprises
                </span>
              </h2>

              {/* Accent underline */}
              <div
                className="mx-auto mt-4 h-1 w-24 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)",
                }}
              />
            </div>
          </div>

          {/* BODY: Visual + copy */}
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Visual */}
            <div
              className="relative rounded-3xl p-6 lg:p-8 shadow-xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.96) 100%)",
                border: "1px solid rgba(3,41,85,0.12)",
              }}
            >
              <div
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #0b4aa8 0%, transparent 70%)",
                }}
              />
              <img
                src="https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/inteeee.jpg"
                alt="Welford IAG Dashboard"
                className="rounded-2xl shadow-lg w-full relative z-10"
              />
            </div>

            {/* Copy (updated paragraphs) */}
            <div>
              <p className="text-lg lg:text-xl text-slate-700 mb-4 leading-relaxed font-light">
                Welford IAG enables organisations to securely manage user access
                across applications, platforms, directories, and cloud environments.
                The platform eliminates fragmented access tools and provides a single
                source of truth that empowers IT, security teams, and business
                stakeholders with shared visibility and control.
              </p>
              <p className="text-base lg:text-lg text-slate-800 mb-6 leading-relaxed">
                With Welford IAG, you can automate provisioning, enforce consistent
                access policies, monitor entitlements, and maintain audit-ready
                compliance—all from one central platform.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <span
                  className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm flex items-center gap-2"
                  style={{
                    borderColor: "rgba(3,41,85,0.15)",
                    background: "white",
                    color: "#032955",
                  }}
                >
                  <Cloud className="w-4 h-4" />
                  Centralised control plane
                </span>
                <span
                  className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm flex items-center gap-2"
                  style={{
                    borderColor: "rgba(3,41,85,0.15)",
                    background: "white",
                    color: "#032955",
                  }}
                >
                  <RefreshCw className="w-4 h-4" />
                  Automated lifecycle &amp; JIT
                </span>
                <span
                  className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm flex items-center gap-2"
                  style={{
                    borderColor: "rgba(3,41,85,0.15)",
                    background: "white",
                    color: "#032955",
                  }}
                >
                  <BarChart className="w-4 h-4" />
                  Audit-ready insights
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES + SECURITY FEATURES (same layout, updated content via keyCapabilities) */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
        {/* Ambient brand glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-140px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-14">
              <div className="mb-6 flex justify-center">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
                  style={{
                    borderColor: "rgba(3,41,85,0.15)",
                    color: "#032955",
                    background: "rgba(255,255,255,0.65)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full"
                      style={{ background: "#0b4aa8", opacity: 0.75 }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "#032955" }}
                    />
                  </span>
                  Core Capabilities &amp; Security Features
                </span>
              </div>

              <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span
                  className="relative inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
                  }}
                >
                  Empowering Secure, Automated &amp; Compliant IAG
                </span>
              </h2>
              <div
                className="mx-auto mt-4 h-1 w-24 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)",
                }}
              />
              <p className="mt-6 text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto">
                From access requests and time-bound entitlements to strong
                authentication and encryption, Welford IAG brings your core
                capabilities and security controls into one unified platform.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyCapabilities.map((item, idx) => (
                <article
                  key={idx}
                  className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
                    border: "1px solid rgba(3,41,85,0.12)",
                  }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)",
                    }}
                  />
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <item.icon className="h-6 w-6" style={{ color: "#032955" }} />
                      <span
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        style={{
                          boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.22)",
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE WELFORD IAG (content changed to your section 7, same layout) */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
        {/* Brand glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[160px] opacity-20"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* TOP: Center badge */}
          <div className="mb-6 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
              style={{
                borderColor: "rgba(3,41,85,0.15)",
                color: "#032955",
                background: "rgba(255,255,255,0.65)",
              }}
              aria-label="Why Choose Welford IAG"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "#0b4aa8", opacity: 0.75 }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#032955" }}
                />
              </span>
              Why Choose Welford IAG?
            </span>
          </div>

          {/* Heading + full-width copy */}
          <div className="text-center mb-10">
            <div className="mx-auto w-[90%] sm:w-[85%] lg:w-[80%]">
              <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span
                  className="relative inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
                  }}
                >
                  One Control Point for Access Governance
                </span>
              </h2>

              {/* Accent underline */}
              <div
                className="mx-auto mt-4 h-1 w-28 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)",
                }}
              />

              {/* Full-width descriptive copy (updated to your text) */}
              <div className="mt-6 mx-auto max-w-3xl space-y-4 text-base sm:text-lg text-slate-700">
                <p>
                  Welford IAG gives your organisation a single, centralised control
                  point for identity governance—eliminating silos, reducing risk, and
                  enabling faster and more consistent security decisions.
                </p>
                <p>
                  The platform ensures every stakeholder—from IT to security to
                  business managers—gets clear visibility into who has access, why
                  they have it, and how it is controlled, supporting:
                </p>
                <ul className="mt-2 grid gap-1 text-sm sm:text-base text-slate-700 sm:grid-cols-2">
                  <li>• Zero Trust</li>
                  <li>• Faster audits</li>
                  <li>• Stronger compliance</li>
                  <li>• Reduced operational overhead</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BODY: Left benefits, right image */}
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT: Business & governance benefits (updated descriptions for Key Benefits) */}
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Centralised Control",
                    description:
                      "Replace fragmented access tools with one unified control point for the entire enterprise.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Operational Efficiency",
                    description:
                      "Automate provisioning, de-provisioning, approvals, and lifecycle workflows to reduce manual effort.",
                    icon: Settings2,
                  },
                  {
                    title: "Management Visibility",
                    description:
                      "Give executives, auditors, and managers real-time insight into who has access, why they have it, how long they should keep it, and when it was approved.",
                    icon: BarChart3,
                  },
                  {
                    title: "Flexibility & Scalability",
                    description:
                      "Seamlessly integrate with existing infrastructure and scale across cloud, on-premises, hybrid, and SaaS environments.",
                    icon: Layers,
                  },
                  {
                    title: "Compliance & Audit Readiness",
                    description:
                      "Leverage complete audit trails and point-in-time access views to make internal and external audits faster and less disruptive.",
                    icon: FileCheck2,
                  },
                  {
                    title: "Universal Just-In-Time Access",
                    description:
                      "Securely grant temporary access on-demand, reducing standing privileges and supporting Zero Trust principles.",
                    icon: LockKeyhole,
                  },
                ].map((item, index) => {
                  const Icon = item.icon as LucideIcon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <span
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 shadow-sm"
                        style={{
                          color: "#032955",
                          background:
                            "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
                          borderColor: "rgba(3,41,85,0.18)",
                        }}
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm sm:text-base leading-relaxed text-slate-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Modern Image Mockup (unchanged structure & feel) */}
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                {/* floating badge */}
                <div className="absolute -top-4 -left-2 z-10">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-md backdrop-blur"
                    style={{
                      borderColor: "rgba(3,41,85,0.15)",
                      background: "rgba(255,255,255,0.7)",
                      color: "#032955",
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: "#0b4aa8" }}
                    />
                    Live Governance Dashboard
                  </span>
                </div>

                {/* device frame */}
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(3,41,85,0.08) 0%, rgba(11,74,168,0.08) 100%)",
                  }}
                >
                  {/* top bar */}
                  <div
                    className="flex items-center justify-between px-4 py-3 border-b"
                    style={{
                      borderColor: "rgba(3,41,85,0.12)",
                      background: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: "#ff5f57" }}
                      />
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: "#ffbd2e" }}
                      />
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: "#28c840" }}
                      />
                    </div>
                    <span
                      className="text-xs font-medium tracking-wide"
                      style={{ color: "#032955" }}
                    >
                      Welford IAG • Control Plane
                    </span>
                    <div className="w-10" />
                  </div>

                  {/* image area */}
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                      alt="Why choose Welford IAG"
                      className="w-full h-[420px] object-cover"
                      loading="lazy"
                    />

                    {/* gradient overlay bottom for caption */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,41,85,0.45) 100%)",
                      }}
                    />

                    {/* caption */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="text-white">
                        <p className="text-sm/6 opacity-90">
                          Executive &amp; Audit Visibility
                        </p>
                        <p className="text-base font-semibold">
                          Real-time access posture across identities &amp; systems
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 bg-white/90 rounded-full px-3 py-1.5 shadow">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: "#28c840" }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: "#032955" }}
                        >
                          Healthy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* info chips – updated to match “supporting” bullets */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span
                    className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
                    style={{
                      borderColor: "rgba(3,41,85,0.15)",
                      background: "white",
                      color: "#032955",
                    }}
                  >
                    Zero Trust aligned
                  </span>
                  <span
                    className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
                    style={{
                      borderColor: "rgba(3,41,85,0.15)",
                      background: "white",
                      color: "#032955",
                    }}
                  >
                    Faster audits
                  </span>
                  <span
                    className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
                    style={{
                      borderColor: "rgba(3,41,85,0.15)",
                      background: "white",
                      color: "#032955",
                    }}
                  >
                    Stronger compliance
                  </span>
                  <span
                    className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
                    style={{
                      borderColor: "rgba(3,41,85,0.15)",
                      background: "white",
                      color: "#032955",
                    }}
                  >
                    Reduced operational overhead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
        {/* Ambient brand glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
                style={{
                  borderColor: "rgba(3,41,85,0.15)",
                  color: "#032955",
                  background: "rgba(255,255,255,0.75)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full"
                    style={{ background: "#0b4aa8", opacity: 0.75 }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: "#032955" }}
                  />
                </span>
                Integrations
              </span>
            </div>

            <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              <span
                className="relative inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
                }}
              >
                The Welford IAG Integration Ecosystem
              </span>
            </h2>

            <div
              className="mx-auto mt-4 h-1 w-24 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)",
              }}
            />
          </div>

          {/* Description + highlight chips */}
          <div className="max-w-3xl mx-auto text-center text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4 mb-10">
            <p>
              Welford IAG connects effortlessly with modern cloud, legacy applications,
              and enterprise systems—ensuring unified, scalable, and secure identity
              governance across your entire technology stack.
            </p>

            <p className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
              <span className="px-3 py-1 rounded-full border bg-white/70 backdrop-blur-sm text-slate-800 border-[rgba(3,41,85,0.18)]">
                Cloud Platforms
              </span>
              <span className="px-3 py-1 rounded-full border bg-white/70 backdrop-blur-sm text-slate-800 border-[rgba(3,41,85,0.18)]">
                Directories &amp; RBAC
              </span>
              <span className="px-3 py-1 rounded-full border bg-white/70 backdrop-blur-sm text-slate-800 border-[rgba(3,41,85,0.18)]">
                Databases
              </span>
              <span className="px-3 py-1 rounded-full border bg-white/70 backdrop-blur-sm text-slate-800 border-[rgba(3,41,85,0.18)]">
                Operating Systems
              </span>
              <span className="px-3 py-1 rounded-full border bg-white/70 backdrop-blur-sm text-slate-800 border-[rgba(3,41,85,0.18)]">
                SaaS &amp; Legacy Applications
              </span>
            </p>
          </div>

          {/* Divider before grid for a cleaner split */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(3,41,85,0.18)] to-transparent" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {integrations.map((name, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center rounded-xl border bg-white/95 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(3,41,85,0.18)]"
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
        </div>
      </section>

      {/* CTA / Contact — EXACTLY SAME AS YOUR CODE (unchanged as requested) */}
      <section className="py-20" style={{ backgroundColor: "#032955" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 bg-white/10">
              Ready to transform identity &amp; access governance?
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Secure Every Identity. Simplify Access. Govern with Confidence.
            </h2>

            <p className="text-lg lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover how Welford IAG can centralise control, automate access
              lifecycle, and prepare your organisation for audits. Request a demo or
              speak with our experts today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-[#032955] hover:bg:white/90 text-base lg:text-lg px-7 py-3 shadow-md"
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
                <Link to="/contact">Contact Us</Link>
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

            <p className="text-sm text-white/70 pt-4">
              Email: info@welfordsystems.com · Phone: +94 77 253 9327 / +94 75 321
              2303
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsIAG;
