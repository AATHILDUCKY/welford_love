import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CtaSection from "@/components/ui/cta-section";
import {
  Shield,
  Users,
  Key,
  Eye,
  FileCheck,
  Settings,
  ArrowRight,
  Calendar,
  Phone,
  Clock,
  Workflow,
  KeyRound,
  FileCheck2,
  RefreshCw,
  Cloud,
  ShieldCheck,
  Zap,
  Users2,
  Target,
  Landmark,
  Lightbulb,
  ScanEye,
  LockKeyhole,
  Scale,
  CheckCircle2,
  Building2,
  Globe2,
  Award,
  BarChart3,
  Database,
  Server,
  Lock,
  Network,
  Github,
  Linkedin,
  Mail,
  Quote,
  Star,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";
import { cn } from "@/lib/utils";

/**
 * =====================================================================================
 *  About.tsx — Professional Refactor (Same Theme, Improved Structure & Consistency)
 * -------------------------------------------------------------------------------------
 *  • Preserves Welford’s blue theme (#032955 / #0b4aa8) and overall aesthetic
 *  • Standardizes card sizing, spacing, and responsive behavior
 *  • Extracts repeated UI patterns into small, reusable components
 *  • Improves accessibility (aria-labels, semantic headings, alt text)
 *  • Adds additional polished sections (Timeline, Leadership, Certifications, Stats, FAQ)
 *  • No external data fetching; safe drop-in replacement
 *
 *  Tailwind + shadcn/ui + lucide-react
 * =====================================================================================
 */

// -------------------------------------------------------------------------------------
// Theme Tokens — centralize commonly reused colors and sizes for consistency
// -------------------------------------------------------------------------------------
const BRAND_NAVY = "#032955";
const BRAND_BLUE = "#0b4aa8";
const CARD_BG_GRADIENT = "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)";
const CARD_BORDER = "1px solid rgba(3,41,85,0.12)";
const RING = "rgba(3,41,85,0.18)";

// Standardized card padding, radius and min height for consistency across the page
const CARD_CLASSES = "group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 bg-white/70 backdrop-blur [--card-min-h:220px] min-h-[--card-min-h] hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]";

// -------------------------------------------------------------------------------------
// Utility Components
// -------------------------------------------------------------------------------------

function KickerBadge({ children, ariaLabel }: { children: React.ReactNode; ariaLabel?: string }) {
  return (
    <span
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
      style={{ borderColor: "rgba(3,41,85,0.15)", color: BRAND_NAVY, background: "rgba(255,255,255,0.65)" }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: BRAND_BLUE, opacity: 0.75 }} />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: BRAND_NAVY }} />
      </span>
      {children}
    </span>
  );
}

function SectionHeader({
  kicker,
  title,
  subtitle,
  center = true,
  large = true,
  id,
}: {
  kicker?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  center?: boolean;
  large?: boolean;
  id?: string;
}) {
  return (
    <div className={cn("mb-12", center && "text-center")} id={id}>
      {kicker && (
        <div className={cn("mb-6", center ? "flex justify-center" : "")}>{<KickerBadge>{kicker}</KickerBadge>}</div>
      )}
      <h2
        className={cn(
          "font-bold leading-tight tracking-tight text-transparent bg-clip-text",
          large ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
        )}
        style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 100%)` }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-slate-700 font-light", center ? "mx-auto" : "", "text-lg sm:text-xl max-w-3xl")}>{subtitle}</p>
      )}
      <div
        className={cn("mt-4 h-1 rounded-full", center ? "mx-auto" : "")}
        style={{ width: 112, background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, ${BRAND_NAVY} 100%)` }}
      />
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 bg-white"
      style={{ boxShadow: "0 6px 20px rgba(3,41,85,0.12)", borderColor: RING, color: BRAND_NAVY }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function GlassCard({
  children,
  className,
  as: As = "article",
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
}) {
  return (
    <As
      className={cn(
        CARD_CLASSES,
        className,
        "ring-1",
      )}
      style={{ background: CARD_BG_GRADIENT, border: CARD_BORDER }}
    >
      {children}
    </As>
  );
}

function InfoChip({ label }: { label: string }) {
  return (
    <span
      className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
      style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: BRAND_NAVY }}
    >
      {label}
    </span>
  );
}

function DeviceFrame({ title, src, alt }: { title: string; src: string; alt: string }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
      style={{ background: "linear-gradient(180deg, rgba(3,41,85,0.08) 0%, rgba(11,74,168,0.08) 100%)" }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "rgba(3,41,85,0.12)", background: "rgba(255,255,255,0.8)" }}>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="text-xs font-medium tracking-wide" style={{ color: BRAND_NAVY }}>
          {title}
        </span>
        <div className="w-10" />
      </div>
      <div className="relative">
        <img src={src} alt={alt} className="w-full h-[420px] object-cover" loading="lazy" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,41,85,0.45) 100%)" }} />
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------------------
// Data — content structures for features, values, goals, timeline, leadership, etc.
// -------------------------------------------------------------------------------------

const INTRO_FEATURES = [
  {
    icon: Shield,
    title: "Identity & Access Governance (IAG)",
    text: "We specialize in: Identity & Access Governance (IAG)",
  },
  {
    icon: Cloud,
    title: "Cybersecurity & Cloud Security Services",
    text: "We specialize in: Cybersecurity & Cloud Security Services",
  },
  {
    icon: FileCheck2,
    title: "Governance, Risk & Compliance (GRC) Consultancy",
    text: "We specialize in: Governance, Risk & Compliance (GRC) Consultancy",
  },
] as const;

const MISSION_GOALS = [
  { icon: Shield, title: "Least Privilege by Design", text: "Implementing strict access controls to ensure minimal privilege for all users." },
  { icon: Eye, title: "Continuous Verification under Zero Trust", text: "Validating identities continuously to minimize risks and ensure secure access." },
  { icon: FileCheck, title: "Audit Readiness through Embedded Evidence", text: "Ensuring compliance with automated and continuous audit trails for faster assessments." },
];

const OUTCOME_FEATURES = [
  { icon: Cloud, title: "Unified Access Governance", text: "Comprehensive governance across Azure, AWS, GCP, M365, and SAP HANA with centralized management." },
  { icon: LockKeyhole, title: "Just-in-Time Provisioning", text: "Elimination of standing access via Just-in-Time (JIT) provisioning for enhanced security." },
  { icon: ScanEye, title: "Audit-Ready Visibility", text: "Complete entitlement lineage and comprehensive audit trails for regulatory compliance." },
  { icon: ShieldCheck, title: "Regulated Industries", text: "Specialized support for finance, energy, healthcare, and public sector compliance requirements." },
  { icon: FileCheck2, title: "Accelerated ISO Readiness", text: "Streamlined compliance through integrated controls and automated certification processes." },
  { icon: Users2, title: "Sustained Assurance", text: "We don't just help organizations meet standards — we help them sustain assurance long-term." },
] as const;

const CORE_VALUES = [
  { icon: Scale, title: "Trust", text: "We earn trust through transparency, accountability, and consistent delivery. Every product, policy, and partnership reflects integrity by design." },
  { icon: ShieldCheck, title: "Security", text: "Security is embedded in our architecture and operations. We apply protection and privacy by design in alignment with ISO/IEC 27001 and GDPR." },
  { icon: Zap, title: "Innovation", text: "We push boundaries through automation, intelligence, and design simplicity making Zero Trust achievable for modern enterprises." },
  { icon: Landmark, title: "Governance", text: "Governance is our foundation. We design systems that align compliance with growth enabling business confidence, not bureaucracy." },
] as const;

const TIMELINE = [
  { year: "2024", title: "Welford Systems Founded", text: "Established to redefine Identity & Governance for the modern enterprise." },
  { year: "2025", title: "IAG Suite Alpha", text: "First customers onboarded to Welford IAG suite with JIT access and unified governance." },
  { year: "2025", title: "ISMS Expansion", text: "ISO/IEC 27001-aligned controls, continuous evidence capture, and supplier governance maturity." },
] as const;

const LEADERSHIP = [
  {
    name: "Sabrin Mohamed",
    role: "Founder & CEO",
    bio: "Driving vision, strategy, and product innovation across Identity, Governance, and Cloud Security.",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "LinkedIn", icon: Linkedin, href: "#" },
      { label: "GitHub", icon: Github, href: "#" },
      { label: "Email", icon: Mail, href: "mailto:info@welfordsystems.com" },
    ],
  },
  {
    name: "Aathil S. (Welford)",
    role: "Head of Engineering",
    bio: "Leads platform engineering and secure-by-design development practices.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    links: [
      { label: "LinkedIn", icon: Linkedin, href: "#" },
      { label: "GitHub", icon: Github, href: "#" },
      { label: "Email", icon: Mail, href: "mailto:engineering@welfordsystems.com" },
    ],
  },
] as const;

const CERTIFICATIONS = [
  { title: "ISO/IEC 27001 Aligned", icon: ShieldCheck },
  { title: "GDPR Principles", icon: Lock },
  { title: "Zero Trust", icon: Network },
  { title: "Secure SDLC", icon: Workflow },
] as const;

const STATS = [
  { label: "Industries Served", value: "4+", note: "Finance, Energy, Healthcare, Public" },
  { label: "Controls Automated", value: "120+", note: "Continuous evidence collection" },
  { label: "Platforms Covered", value: "8+", note: "Azure, AWS, GCP, M365, SAP…" },
  { label: "Avg. Time-to-Audit", value: "↓40%", note: "Accelerated ISO readiness" },
] as const;

const FAQ = [
  {
    q: "How does Welford IAG support Zero Trust?",
    a: "By eliminating standing access via JIT, enforcing least privilege, and continuously verifying identity, device, and context across hybrid multi-cloud.",
  },
  { q: "Do you work with on‑prem and legacy systems?", a: "Yes. We unify governance across AD, Azure AD (Entra ID), databases, and line-of-business apps alongside modern SaaS." },
  { q: "Can you help with ISO 27001 certification?", a: "We align controls, automate evidence, and streamline audits to shorten certification timelines." },
  { q: "Where are you based?", a: "Founded in 2024 • London, serving global clients with hybrid teams." },
] as const;

// -------------------------------------------------------------------------------------
// Section Blocks — each block sticks to standardized card sizes & spacing
// -------------------------------------------------------------------------------------

function BackgroundGlows() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
        style={{ background: `radial-gradient(40% 40% at 50% 50%, ${BRAND_BLUE} 0%, transparent 70%)` }}
      />
      <div
        className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
        style={{ background: `radial-gradient(40% 40% at 50% 50%, ${BRAND_NAVY} 0%, transparent 70%)` }}
      />
    </div>
  );
}

function IntroFeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
      {INTRO_FEATURES.map(({ icon: Icon, title, text }) => (
        <GlassCard key={title}>
          <div className="flex items-start gap-4">
            <div
              className="relative grid place-items-center h-14 w-14 shrink-0 rounded-2xl ring-1"
              style={{ borderColor: RING, background: "white" }}
              aria-hidden="true"
            >
              <Icon className="h-7 w-7" style={{ color: BRAND_NAVY }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100" style={{ boxShadow: `inset 0 0 0 1px rgba(11,74,168,0.18)` }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">{text}</p>
        </GlassCard>
      ))}
    </div>
  );
}

function VisionMission() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker="Our Vision & Mission" title="Our Vision & Mission" />

          <div className="mt-10 text-center">
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">Our Vision</h3>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-700 font-light max-w-2xl mx-auto">
              “To be the innovation leader in cybersecurity — transforming identity governance from a control into a strategic enabler.”
            </p>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light max-w-3xl mx-auto">
              We envision a world where governance fuels agility. Welford transforms identity and access management from a reactive compliance process into a proactive driver of resilience and efficiency.
            </p>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">Our Mission</h3>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-700 font-light max-w-2xl mx-auto">
              “To empower organizations to securely govern digital identities and access through intelligent, scalable, and automated solutions.”
            </p>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light max-w-3xl mx-auto">
              We combine security, automation, and compliance to help enterprises achieve:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10">
              {MISSION_GOALS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="text-center transform transition-transform duration-300 ease-in-out hover:scale-105">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full text-white mb-6 shadow-2xl transition-all duration-500 ease-in-out hover:shadow-xl border-2"
                    style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_NAVY})`, borderColor: BRAND_NAVY }}
                  >
                    <Icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
                  <p className="text-sm text-slate-600 mt-2">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-slate-700 font-light text-center max-w-4xl mx-auto">
              Every identity. Every system. Governed with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ISMSOverview() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
      {/* Ambient brand glows */}
      <BackgroundGlows />

      <div className="container mx-auto px-4 relative z-10">
        {/* TOP: Center badge */}
        <div className="mb-6 flex justify-center">
          <KickerBadge ariaLabel="ISMS Overview">ISMS Overview</KickerBadge>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="mx-auto w-[90%] sm:w:[85%] lg:w-[80%]">
            <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              <span className="relative inline-block bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 100%)` }}>
                Built on Security. Driven by Compliance.
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full" style={{ background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, ${BRAND_NAVY} 100%)` }} />
          </div>
        </div>

        {/* BODY: Left content + Right image */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="text-left">
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
              Our Information Security Management System (ISMS) is not a document — it’s the backbone of how we operate. Aligned with ISO/IEC 27001:2022 and GDPR, our ISMS governs every process — from engineering and supplier management to employee awareness and product lifecycle controls.
            </p>

            <h3 className="mt-8 text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" style={{ color: BRAND_NAVY }} />
              Our ISMS Management
            </h3>

            <ul className="mt-4 space-y-6 text-lg sm:text-xl text-slate-700 font-light list-disc pl-6">
              <li>
                <span className="font-semibold">Risk and Control Ownership</span>: We establish clear ownership of risks and controls to ensure accountability.
              </li>
              <li>
                <span className="font-semibold">Supplier Governance</span>: Our ISMS governs the way we select, manage, and assess our suppliers, ensuring compliance at every level.
              </li>
              <li>
                <span className="font-semibold">Training and Awareness</span>: We emphasize continuous training and awareness programs for all employees to maintain a culture of security.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement</span>: Through regular reviews, audits, and feedback loops, we continuously improve our security posture.
              </li>
            </ul>

            <p className="mt-4 text-lg sm:text-xl text-slate-700">
              Through structure and accountability, we turn compliance into confidence, ensuring security and privacy across all business processes.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <InfoChip label="Zero Trust aligned" />
              <InfoChip label="Continuous verification" />
              <InfoChip label="Auditable trails" />
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -top-4 -left-2 z-10">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-md backdrop-blur"
                  style={{ borderColor: "rgba(3,41,85,0.15)", background: "rgba(255,255,255,0.7)", color: BRAND_NAVY }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: BRAND_BLUE }} />
                  ISMS Overview
                </span>
              </div>

              <DeviceFrame
                title="Welford ISMS Overview"
                src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
                alt="ISMS Overview"
              />

              {/* Caption overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-white drop-shadow">
                  <p className="text-sm/6 opacity-90">Security Management</p>
                  <p className="text-base font-semibold">Building Trust & Confidence Through Compliance</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/90 rounded-full px-3 py-1.5 shadow">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
                  <span className="text-xs font-medium" style={{ color: BRAND_NAVY }}>
                    On track
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[80%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker="Core Values" title="Our Core Values" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map(({ icon: Icon, title, text }) => (
              <GlassCard key={title}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 bg-white" style={{ borderColor: RING }} aria-hidden="true">
                    <Icon className="h-6 w-6" style={{ color: BRAND_NAVY }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader kicker="Trusted by Industry Leaders" title="Where Innovation Meets Accountability" subtitle="Through a combination of Zero Trust principles, autonomous access provisioning, and intelligent governance, Welford Systems delivers measurable outcomes:" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OUTCOME_FEATURES.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="inline-flex h-16 w-16 items-center justify-center rounded-xl ring-1 shadow-sm mx-auto mb-4"
                style={{ color: BRAND_NAVY, background: "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)", borderColor: RING }}
                aria-hidden="true"
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-xl" style={{ color: BRAND_NAVY }}>
                {title}
              </h3>
              <p className="text-slate-700 leading-relaxed mt-2">{text}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg sm:text-xl text-slate-700 font-light max-w-2xl mx-auto">
            Join forward-thinking organizations that trust Welford Systems to transform their security posture and maintain continuous compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

function QuoteBlock() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-20" style={{ background: `radial-gradient(40% 40% at 50% 50%, ${BRAND_BLUE} 0%, transparent 70%)` }} />
        <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[160px] opacity-15" style={{ background: `radial-gradient(40% 40% at 50% 50%, ${BRAND_NAVY} 0%, transparent 70%)` }} />
        <div className="absolute top-[-100px] left-[-100px] h-[320px] w-[320px] rounded-full blur-[120px] opacity-10" style={{ background: `radial-gradient(40% 40% at 50% 50%, ${BRAND_BLUE} 0%, transparent 70%)` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl ring-1 shadow-lg" style={{ color: BRAND_NAVY, background: "linear-gradient(135deg, #ffffff 0%, #f6f9ff 100%)", borderColor: "rgba(3,41,85,0.15)" }} aria-hidden="true">
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
              <span className="relative inline-block bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 100%)` }}>
                "We don't just help organizations meet standards — we help them sustain assurance."
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full opacity-30 animate-pulse" style={{ background: BRAND_BLUE }} />
        <div className="absolute bottom-1/3 right-20 w-6 h-6 rounded-full opacity-20 animate-pulse" style={{ background: BRAND_NAVY, animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full opacity-25 animate-pulse" style={{ background: BRAND_BLUE, animationDelay: "2s" }} />
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader kicker="Our Journey" title="Milestones" subtitle="A snapshot of how we’re building a modern governance company." />
        <ol className="relative border-l border-slate-200 max-w-4xl mx-auto">
          {TIMELINE.map((item, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ring-2" style={{ background: BRAND_BLUE, color: "white", borderColor: "white" }}>
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <h4 className="text-lg font-semibold" style={{ color: BRAND_NAVY }}>
                {item.year} — {item.title}
              </h4>
              <p className="text-sm text-slate-600 mt-1">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader kicker="Leadership" title="People behind Welford" subtitle="A hands‑on team focused on secure, scalable innovation." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {LEADERSHIP.map((p) => (
            <Card key={p.name} className="overflow-hidden rounded-3xl border" style={{ borderColor: "rgba(3,41,85,0.12)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="relative h-56 sm:h-full">
                  <img src={p.photo} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="sm:col-span-2 p-6">
                  <h3 className="text-xl font-semibold" style={{ color: BRAND_NAVY }}>{p.name}</h3>
                  <p className="text-sm text-slate-600">{p.role}</p>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">{p.bio}</p>
                  <div className="mt-4 flex items-center gap-3">
                    {p.links.map((l) => (
                      <Link key={l.label} to={l.href} aria-label={l.label} className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900">
                        <l.icon className="h-4 w-4" /> {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader kicker="Assurance" title="Certifications & Principles" subtitle="We align to recognized standards and embed assurance into daily operations." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map(({ title, icon: Icon }) => (
            <Card key={title} className="rounded-2xl border bg-white/60 backdrop-blur">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <Icon className="h-8 w-8" style={{ color: BRAND_NAVY }} />
                <span className="text-sm font-medium text-slate-800 text-center">{title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader kicker="Impact" title="Numbers that matter" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {STATS.map((s) => (
            <Card key={s.label} className="rounded-2xl border bg-white/60 backdrop-blur text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold" style={{ color: BRAND_NAVY }}>{s.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-700">{s.label}</div>
                {s.note && <div className="mt-1 text-xs text-slate-500">{s.note}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQBlock() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 w-[90%] mx-auto">
      <BackgroundGlows />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader kicker="FAQ" title="Common questions" subtitle="If you don’t see what you need, contact us and we’ll help." />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white/60 backdrop-blur rounded-2xl border">
            {FAQ.map((f, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="px-6">{f.q}</AccordionTrigger>
                <AccordionContent className="px-6 text-slate-700">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------------------------------
// Page Component — Assembles all sections with consistent spacing & card sizes
// -------------------------------------------------------------------------------------

const About = () => {
  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: `radial-gradient(60rem 60rem at 50% -10%, rgba(3,41,85,0.06) 0%, transparent 60%)` }} />

        <HeroSection2
          badge="About Welford Systems"
          title="Empowering Secure Digital Transformation Through Trust, Innovation, and Governance."
          subtitle="Founded in 2024, Welford Systems is here to help organizations simplify access, automate compliance, and strengthen security."
          bullets={["Explore Welford IAG", "Book a Demo", "Partner with Us"]}
          primaryCta={{ label: "Explore Welford IAG", href: "/products/welford-iag", icon: <ArrowRight className="mr-2 h-4 w-4" /> }}
          secondaryCta={{ label: "Book a Demo", href: "/demo", icon: <Calendar className="mr-2 h-4 w-4" /> }}
          image={{ src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/aboutus.jpg", alt: "About Welford Systems" }}
          imageBadgeText="Since 2024 • London"
          id="about-hero"
        />
      </section>

      {/* ================= INTRO / PROPOSITION ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
        <BackgroundGlows />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="mb-6 flex justify-center">
                <KickerBadge>Redefining Identity & Governance for the Modern Enterprise</KickerBadge>
              </div>
              <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span className="relative inline-block bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 100%)` }}>
                  Redefining Identity & Governance for the Modern Enterprise
                </span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-28 rounded-full" style={{ background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, ${BRAND_NAVY} 100%)` }} />
            </div>

            <IntroFeatureCards />

            <p className="mt-10 text-lg sm:text-xl leading-relaxed text-slate-700 font-light text-center max-w-4xl mx-auto">
              Our flagship platform, the Welford Identity & Access Governance Suite (Welford IAG), is designed around a Zero Trust architecture. It eliminates standing access, unifies governance across hybrid and multi-cloud environments, and enables password-free Linux access — all while simplifying compliance with ISO 27001 and GDPR frameworks.
            </p>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-700 font-light text-center max-w-4xl mx-auto">
              At Welford Systems, we believe security and governance shouldn’t slow innovation — they should empower it.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <VisionMission />

      {/* ================= ISMS OVERVIEW ================= */}
      <ISMSOverview />

      {/* ================= CORE VALUES ================= */}
      <CoreValues />

      {/* ================= OUTCOMES ================= */}
      <Outcomes />

      {/* ================= QUOTE ================= */}
      <QuoteBlock />

      {/* ================= TIMELINE ================= 
      <Timeline />
      */}

      {/* ================= LEADERSHIP ================= 
      <Leadership />
      */}

      {/* ================= CERTIFICATIONS ================= 
      <Certifications />
      */}

      {/* ================= STATS ================= 
      <Stats />
      */}

      {/* ================= FAQ ================= 
      <FAQBlock />
      */}

      {/* ================= CTA ================= */}
      <CtaSection />
    </Layout>
  );
};

export default About;
