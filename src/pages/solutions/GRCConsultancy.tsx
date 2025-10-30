import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Gauge
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const GRCConsultancy = () => {
  // (kept for future use if you render cards from this; not used below)
  const solutions = [
    {
      icon: FileCheck2,
      title: "ISO 27001 Readiness & Certification",
      description:
        "From scoping and risk assessment to SoA design and pre-audit review.",
    },
    {
      icon: Workflow,
      title: "Risk Register & Treatment Planning",
      description:
        "Structured, repeatable method aligned with ISO 27005 and your business context.",
    },
    {
      icon: Settings,
      title: "SoA & Control Design",
      description:
        "Annex A controls tailored to operations with traceable evidence frameworks.",
    },
    {
      icon: ShieldCheck,
      title: "Internal Audits, CAPA & Supplier Governance",
      description:
        "Plan audits, manage findings, and govern suppliers with measurable cycles.",
    },
    {
      icon: Users2,
      title: "Policy, Procedure & Awareness",
      description:
        "Policies, SOPs, and training that embed compliance as a shared responsibility.",
    },
    {
      icon: Eye,
      title: "Continuous Audit Readiness",
      description:
        "Evidence management, dashboards, and ongoing assurance.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section (reused; only copy changed) */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 60rem at 50% -10%, rgba(3,41,85,0.06) 0%, transparent 60%)",
          }}
        />

<HeroSection2
  badge="Welford Systems — GRC Consultancy"
  title="Build Governance That Scales with Your Business"
  subtitle="Accelerate ISO 27001 readiness. Simplify audits. Strengthen assurance through structured, automated, and auditable governance."
  bullets={[
    "ISO 27001:2022 alignment",
    "Operationalized governance",
    "Continuous audit readiness",
  ]}
  primaryCta={{
    label: "Talk to a Consultant",
    href: "/contact", // 👈 direct redirect (no popup)
    icon: <Calendar className="mr-2 h-4 w-4" />,
  }}
  secondaryCta={{
    label: "Start Your Compliance Journey",
    href: "/demo", // 👈 direct redirect (no popup)
    icon: <Phone className="mr-2 h-4 w-4" />,
  }}
  image={{
    src: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Welford GRC Consultancy overview",
  }}
  imageBadgeText="30–45 min session"
  id="demo-hero"
/>
</section>



      {/* --- SECTION: The Governance Challenge (kept design, changed copy) --- */}
<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-16">
        {/* Badge */}
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
            The Governance Challenge
          </span>
        </div>

        {/* Title */}
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            The Governance Challenge
          </span>
        </h2>

        <div
          className="mx-auto mt-4 h-1 w-28 rounded-full"
          style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        />

        {/* Intro paragraph */}
        <div className="mx-auto w-[92vw] max-w-[92vw] sm:max-w-4xl">
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
            Regulatory expectations and cybersecurity risks are rising — but many enterprises still manage compliance
            through fragmented frameworks, manual spreadsheets, and disconnected tools. These outdated approaches slow
            certification readiness and increase operational risk.
          </p>
        </div>
      </div>

      {/* Pain Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
        {/* 1 */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(3,41,85,0.10)] focus-within:-translate-y-1"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,255,0.92) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
          tabIndex={0}
        >
          <div className="flex items-start gap-4">
            <div
              className="relative grid place-items-center h-14 w-14 shrink-0 rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <Workflow className="h-7 w-7" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Disjointed Risk & Control Frameworks
            </h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Slow ISO 27001 certification and create inconsistent accountability.
          </p>
        </article>

        {/* 2 */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(3,41,85,0.10)] focus-within:-translate-y-1"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,255,0.92) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
          tabIndex={0}
        >
          <div className="flex items-start gap-4">
            <div
              className="relative grid place-items-center h-14 w-14 shrink-0 rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <FileCheck className="h-7 w-7" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Manual Internal Audits</h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Increase error rates, audit fatigue, and operational overhead.
          </p>
        </article>

        {/* 3 */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(3,41,85,0.10)] focus-within:-translate-y-1"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,255,0.92) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
          tabIndex={0}
        >
          <div className="flex items-start gap-4">
            <div
              className="relative grid place-items-center h-14 w-14 shrink-0 rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <Eye className="h-7 w-7" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Limited Control Visibility
            </h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Reduces oversight of control performance and accountability.
          </p>
        </article>

        {/* 4 */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(3,41,85,0.10)] focus-within:-translate-y-1"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,255,0.92) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
          tabIndex={0}
        >
          <div className="flex items-start gap-4">
            <div
              className="relative grid place-items-center h-14 w-14 shrink-0 rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <Shield className="h-7 w-7" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Insufficient Evidence Management
            </h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Makes it difficult to prove compliance to auditors and regulators.
          </p>
        </article>

        {/* 5 */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 min-h-[240px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(3,41,85,0.10)] focus-within:-translate-y-1"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,255,0.92) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
          tabIndex={0}
        >
          <div className="flex items-start gap-4">
            <div
              className="relative grid place-items-center h-14 w-14 shrink-0 rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <RefreshCw className="h-7 w-7" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Evolving Standards & Guidance
            </h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            ISO/IEC 27001:2022 requires ongoing governance — not one-time compliance.
          </p>
        </article>

        <div className="hidden lg:block" />
      </div>
    </div>

    {/* Emphasis Block */}
    <p
      className="mt-12 text-base sm:text-lg leading-relaxed text-center font-medium max-w-3xl mx-auto px-5"
      style={{
        color: "#032955",
        background:
          "linear-gradient(90deg, rgba(11,74,168,0.08) 0%, rgba(3,41,85,0.08) 100%)",
        borderRadius: "1rem",
        padding: "1.25rem",
        boxShadow: "0 6px 28px rgba(3,41,85,0.08)",
      }}
    >
      Governance is no longer a static activity — it’s a living, measurable discipline that underpins trust,
      compliance, and operational resilience.
    </p>
  </div>
</section>

{/* --- SECTION: Welford’s GRC Approach (light theme, content-only) --- */}
{/* --- SECTION: Welford’s GRC Approach (light blue background, 70% opacity) --- */}
<section
  className="relative overflow-hidden py-20 sm:py-24 w-[90%] mx-auto rounded-3xl"
  style={{
    background: "rgba(240, 248, 255, 0.7)", // very light blue with 70% opacity
  }}
>
  {/* Soft brand glows (light theme) */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-16">
        {/* Badge */}
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
            Welford’s GRC Approach
          </span>
        </div>

        {/* Title */}
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Welford’s GRC Approach
          </span>
        </h2>

        {/* Divider */}
        <div
          className="mx-auto mt-4 h-1 w-28 rounded-full"
          style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        />

        {/* Content */}
        <div className="mx-auto w-[92vw] max-w-[92vw] sm:max-w-4xl">
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
            At Welford Systems, governance is culture — not paperwork.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
            Our GRC Consultancy helps enterprises design and operationalize information security
            governance that scales, enabling faster certification and stronger compliance assurance.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
            Our approach aligns with ISO/IEC 27001:2022 and our own ISMS framework, ensuring
            every control and process supports measurable outcomes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* --- SECTION: The Solution (kept design, changed copy) --- */}
{/* --- SECTION: Our Four-Phase Governance Model --- */}
<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[160px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* TOP badge */}
    <div className="mb-6 flex justify-center">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
        style={{
          borderColor: "rgba(3,41,85,0.15)",
          color: "#032955",
          background: "rgba(255,255,255,0.65)",
        }}
        aria-label="Welford’s GRC Approach"
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
        Welford’s GRC Approach
      </span>
    </div>

    {/* Heading */}
    <div className="text-center mb-10">
      <div className="mx-auto w-[90%] sm:w:[85%] lg:w-[80%]">
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Our Four-Phase Governance Model
          </span>
        </h2>

        <div
          className="mx-auto mt-4 h-1 w-28 rounded-full"
          style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        />
      </div>
    </div>

    {/* BODY: Left content + Right image (equal height columns) */}
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      {/* LEFT copy */}
      <div className="text-left flex flex-col h-full">
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
          A structured roadmap to move from baseline compliance to continuous assurance. Each phase builds on the last to establish measurable governance, operational resilience, and audit readiness.
        </p>

        {/* Four-phase model */}
        <ul className="mt-8 space-y-6">
          <li className="flex items-start gap-4">
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 shadow-sm"
              style={{
                color: "#032955",
                background: "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
                borderColor: "rgba(3,41,85,0.18)",
              }}
              aria-hidden="true"
            >
              <Eye className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Assessment &amp; Gap Analysis</span> — assess your current ISMS maturity against ISO&nbsp;27001 and GDPR; identify control gaps, evidence weaknesses, and opportunities for process improvement.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 shadow-sm"
              style={{
                color: "#032955",
                background: "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
                borderColor: "rgba(3,41,85,0.18)",
              }}
              aria-hidden="true"
            >
              <Settings className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Design &amp; Implementation</span> — define a governance model tailored to your organization; map business processes, policies, and controls to ISO&nbsp;27001 Annex&nbsp;A, establishing ownership and automated workflows.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 shadow-sm"
              style={{
                color: "#032955",
                background: "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
                borderColor: "rgba(3,41,85,0.18)",
              }}
              aria-hidden="true"
            >
              <Users2 className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Operationalization &amp; Training</span> — embed governance into daily operations; build awareness programs, assign risk owners, and establish a culture of shared accountability.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 shadow-sm"
              style={{
                color: "#032955",
                background: "linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%)",
                borderColor: "rgba(3,41,85,0.18)",
              }}
              aria-hidden="true"
            >
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Continuous Improvement &amp; Audit Readiness</span> — establish internal audit programs, CAPA (Corrective &amp; Preventive Actions), and supplier governance cycles; maintain continuous audit readiness while improving resilience and accountability.
            </p>
          </li>
        </ul>

        {/* Spacer to help balance min-heights if needed */}
        <div className="flex-1" />
      </div>

      {/* RIGHT mockup (stretched to match left height) */}
      <div className="h-full">
        <div className="relative h-full flex flex-col">
          <div className="absolute -top-4 -left-2 z-10">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-md backdrop-blur"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "rgba(255,255,255,0.7)", color: "#032955" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "#0b4aa8" }} />
              Governance Control Center
            </span>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col"
            style={{
              background: "linear-gradient(180deg, rgba(3,41,85,0.08) 0%, rgba(11,74,168,0.08) 100%)",
            }}
          >
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "rgba(3,41,85,0.12)", background: "rgba(255,255,255,0.8)" }}
            >
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <span className="text-xs font-medium tracking-wide" style={{ color: "#032955" }}>
                Welford GRC • Assurance
              </span>
              <div className="w-10" />
            </div>

            {/* Make image area flex-1 to fill remaining height; image absolutely covers it */}
            <div className="relative flex-1 min-h-[420px]">
              <img
                src="https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/pexels-hillaryfox-1595385.jpg"
                alt="Welford GRC — collaboration and assurance"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,41,85,0.45) 100%)" }}
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-sm/6 opacity-90">Evidence &amp; SoA Alignment</p>
                  <p className="text-base font-semibold">Real-time readiness for audits and regulators</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/90 rounded-full px-3 py-1.5 shadow">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
                  <span className="text-xs font-medium" style={{ color: "#032955" }}>Ready</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span
              className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: "#032955" }}
            >
              ISO 27001 aligned
            </span>
            <span
              className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: "#032955" }}
            >
              Evidence-driven
            </span>
            <span
              className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: "#032955" }}
            >
              Continuous assurance
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



     {/* --- SECTION: Core GRC Capabilities (updated content for Welford Systems site) --- */}
<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[80%] mx-auto">
  {/* subtle background glows */}
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-140px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-6xl">
      {/* header */}
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
            Core GRC Capabilities
          </span>
        </div>

        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Integrated Governance. Measurable Assurance.
          </span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed">
          Welford’s consultants work alongside your security, compliance, and risk teams to build
          integrated governance systems — aligning control, visibility, and assurance across the
          enterprise.
        </p>
        <div
          className="mx-auto mt-6 h-1 w-24 rounded-full"
          style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        />
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ISO 27001 Readiness */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
            >
              <FileCheck2 className="h-6 w-6" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              ISO 27001 Readiness &amp; Certification Support
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            End-to-end implementation support — from scoping and risk assessment to Statement of Applicability
            (SoA) design and pre-audit review.
          </p>
        </article>

        {/* Risk Register */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
            >
              <Workflow className="h-6 w-6" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Risk Register &amp; Treatment Planning
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Build a structured, repeatable approach to identify, assess, and treat risks — aligned with ISO 27005
            and your organization’s business context.
          </p>
        </article>

        {/* SoA & Control Design */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
            >
              <Settings className="h-6 w-6" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              SoA &amp; Control Design
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Design, document, and implement Annex A controls tailored to your operations — supported by traceable
            evidence and accountability frameworks.
          </p>
        </article>

        {/* Internal Audits & CAPA */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
            >
              <ShieldCheck className="h-6 w-6" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Internal Audits, CAPA &amp; Supplier Governance
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Conduct internal audits, manage nonconformities, and govern supplier performance through measurable
            CAPA and continual improvement cycles.
          </p>
        </article>

        {/* Policy & Awareness */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
            >
              <Users2 className="h-6 w-6" style={{ color: "#032955" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Policy, Procedure &amp; Awareness Development
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Develop practical policies, SOPs, and awareness initiatives that foster a culture where compliance
            is a shared responsibility — not a checklist.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>


     {/* --- SECTION: Outcomes & Benefits (updated for new content) --- */}
<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[80%] mx-auto">
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 h-[460px] w-[460px] rounded-full blur-[140px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[140px] opacity-15"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-10 sm:mb-14">
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
            Outcomes &amp; Measurable Benefits
          </span>
        </div>

        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Turn Compliance into a Measurable Advantage
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
          Partnering with Welford Systems transforms compliance from a reactive obligation into a proactive driver of trust and efficiency.
        </p>
      </div>

      {/* Table header (2-column layout) */}
      <div
        className="rounded-3xl border shadow-sm overflow-hidden backdrop-blur"
        style={{ borderColor: "rgba(3,41,85,0.12)", background: "rgba(255,255,255,0.7)" }}
      >
        <div
          className="hidden md:grid grid-cols-12 items-center px-6 py-4"
          style={{
            background: "linear-gradient(90deg, rgba(3,41,85,0.08) 0%, rgba(11,74,168,0.08) 100%)",
          }}
        >
          <div className="col-span-5 text-sm font-semibold tracking-wide" style={{ color: "#032955" }}>
            Benefit
          </div>
          <div className="col-span-7 text-sm font-semibold tracking-wide" style={{ color: "#032955" }}>
            Description
          </div>
        </div>

        {/* Rows */}
        <div className="hidden md:block divide-y" style={{ borderColor: "rgba(3,41,85,0.08)" }}>
          {/* Faster Certification */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(3,41,85,0.15)" }}
                >
                  <FileCheck2 className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div className="text-base font-semibold text-slate-900">Faster Certification</div>
              </div>
            </div>
            <div className="col-span-7 flex items-center">
              <div className="text-sm text-slate-700">
                Reduce audit preparation time with structured, automated governance.
              </div>
            </div>
          </div>

          {/* Higher Audit Success Rates */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(3,41,85,0.15)" }}
                >
                  <ShieldCheck className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div className="text-base font-semibold text-slate-900">Higher Audit Success Rates</div>
              </div>
            </div>
            <div className="col-span-7 flex items-center">
              <div className="text-sm text-slate-700">
                Embed evidence and SoA alignment into daily operations.
              </div>
            </div>
          </div>

          {/* Enterprise-Wide Accountability */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(3,41,85,0.15)" }}
                >
                  <Users2 className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div className="text-base font-semibold text-slate-900">Enterprise-Wide Accountability</div>
              </div>
            </div>
            <div className="col-span-7 flex items-center">
              <div className="text-sm text-slate-700">
                Make risk ownership part of business operations.
              </div>
            </div>
          </div>

          {/* Accelerated ISO 27001 Readiness */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(3,41,85,0.15)" }}
                >
                  <RefreshCw className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div className="text-base font-semibold text-slate-900">Accelerated ISO&nbsp;27001 Readiness</div>
              </div>
            </div>
            <div className="col-span-7 flex items-center">
              <div className="text-sm text-slate-700">
                Proven methodology for continuous improvement.
              </div>
            </div>
          </div>

          {/* Reduced Operational Overhead */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(3,41,85,0.15)" }}
                >
                  <Zap className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div className="text-base font-semibold text-slate-900">Reduced Operational Overhead</div>
              </div>
            </div>
            <div className="col-span-7 flex items-center">
              <div className="text-sm text-slate-700">
                Centralized visibility and automated tracking reduce manual effort.
              </div>
            </div>
          </div>

          {/* Governance as a Business Enabler */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(3,41,85,0.15)" }}
                >
                  <Settings className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div className="text-base font-semibold text-slate-900">Governance as a Business Enabler</div>
              </div>
            </div>
            <div className="col-span-7 flex items-center">
              <div className="text-sm text-slate-700">
                Transform compliance into a measurable value driver.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden divide-y" style={{ borderColor: "rgba(3,41,85,0.08)" }}>
          {[
            {
              icon: "FileCheck2",
              benefit: "Faster Certification",
              desc: "Reduce audit preparation time with structured, automated governance.",
            },
            {
              icon: "ShieldCheck",
              benefit: "Higher Audit Success Rates",
              desc: "Embed evidence and SoA alignment into daily operations.",
            },
            {
              icon: "Users2",
              benefit: "Enterprise-Wide Accountability",
              desc: "Make risk ownership part of business operations.",
            },
            {
              icon: "RefreshCw",
              benefit: "Accelerated ISO 27001 Readiness",
              desc: "Proven methodology for continuous improvement.",
            },
            {
              icon: "Zap",
              benefit: "Reduced Operational Overhead",
              desc: "Centralized visibility and automated tracking reduce manual effort.",
            },
            {
              icon: "Settings",
              benefit: "Governance as a Business Enabler",
              desc: "Transform compliance into a measurable value driver.",
            },
          ].map((r, i) => (
            <div key={i} className="p-5">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(3,41,85,0.15)",
                  }}
                >
                  {r.icon === "FileCheck2" && <FileCheck2 className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "ShieldCheck" && <ShieldCheck className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "Users2" && <Users2 className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "RefreshCw" && <RefreshCw className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "Zap" && <Zap className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "Settings" && <Settings className="h-5 w-5" style={{ color: "#032955" }} />}
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">{r.benefit}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-700">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote */}
      <p
        className="mt-12 text-base sm:text-lg leading-relaxed text-center font-medium max-w-3xl mx-auto px-4"
        style={{
          color: "#032955",
          background: "linear-gradient(90deg, rgba(11,74,168,0.08) 0%, rgba(3,41,85,0.08) 100%)",
          borderRadius: "1rem",
          padding: "1.25rem",
          boxShadow: "0 4px 20px rgba(3,41,85,0.08)",
        }}
      >
        Build governance that scales. Transform compliance into continuous assurance and measurable value.
      </p>
    </div>
  </div>
</section>


      {/* --- SECTION: Proof & Expertise (kept visuals, redesigned content) --- */}
{/* --- SECTION: Proof & Expertise (wider, refined layout, UX-focused) --- */}
<section className="relative overflow-hidden py-16 sm:py-20 bg-transparent w-[92%] mx-auto">
  {/* soft brand glows */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-[160px] opacity-25"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-140px] right-[-120px] h-[380px] w-[380px] rounded-full blur-[150px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10 max-w-7xl">
    {/* Kicker */}
    <div className="mb-6 flex justify-center">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
        style={{ borderColor: "rgba(3,41,85,0.18)", color: "#032955", background: "rgba(255,255,255,0.65)" }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full"
            style={{ background: "#0b4aa8", opacity: 0.75 }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#032955" }} />
        </span>
        Proof &amp; Expertise
      </span>
    </div>

    {/* Headline */}
    <header className="text-center">
      <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
        <span
          className="relative inline-block bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
        >
          Proof &amp; Expertise
        </span>
      </h2>
      <div
        className="mx-auto mt-4 h-1 w-28 rounded-full"
        style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
      />
    </header>

    {/* Content block */}
    <article
      className="mt-10 mx-auto rounded-3xl p-6 sm:p-8 lg:max-w-5xl"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(246,249,255,0.95) 100%)",
        border: "1px solid rgba(3,41,85,0.12)",
        boxShadow: "0 16px 50px rgba(3,41,85,0.10)",
      }}
    >
      <div className="space-y-5 text-center">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Welford Systems operates under its own{" "}
          <span className="font-semibold" style={{ color: "#032955" }}>
            ISO 27001-aligned ISMS
          </span>
          , integrating governance into every facet of operations — from engineering and supplier management to product lifecycle control.
        </p>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Our consultants combine expertise in cybersecurity, identity governance, and compliance automation,
          ensuring every governance framework is{" "}
          <span className="font-semibold" style={{ color: "#032955" }}>
            practical, scalable, and risk-driven.
          </span>
        </p>

        <blockquote className="relative mt-6">
          <p
            className="text-[1.25rem] sm:text-[1.4rem] leading-relaxed font-semibold italic"
            style={{ color: "#0f172a" }}
          >
            “We don’t just advise on governance — we live it.”
          </p>
        </blockquote>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-6">
          Our organizational model, as outlined in our{" "}
          <a
            href="/about/organisation"
            className="font-semibold underline"
            style={{ color: "#0b4aa8" }}
          >
            Welford Systems Organisation Overview
          </a>
          , reflects our commitment to trust, innovation, and accountability in every engagement.
        </p>
      </div>
    </article>

    {/* Footer tagline */}
    <p
      className="mt-10 text-base sm:text-lg leading-relaxed text-center font-medium max-w-4xl mx-auto px-4"
      style={{
        color: "#032955",
        background: "linear-gradient(90deg, rgba(11,74,168,0.08) 0%, rgba(3,41,85,0.08) 100%)",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 4px 20px rgba(3,41,85,0.08)",
      }}
    >
      Trust, innovation, and accountability — embedded in how we operate and how we deliver.
    </p>
  </div>
</section>



      {/* CTA (component kept as-is) */}
      <CtaSection />
    </Layout>
  );
};

export default GRCConsultancy;
