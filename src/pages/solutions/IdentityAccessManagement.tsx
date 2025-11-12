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
  Users2
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const IdentityAccessManagement = () => {
  const solutions = [
    {
      icon: Users,
      title: "Identity Lifecycle Management",
      description:
        "Automate user provisioning, deprovisioning, and role changes throughout the employee lifecycle.",
    },
    {
      icon: Shield,
      title: "Access Governance",
      description:
        "Implement comprehensive access controls and governance policies across all systems and applications.",
    },
    {
      icon: Key,
      title: "Privileged Access Management (PAM)",
      description:
        "Secure and monitor privileged accounts with just-in-time access and session recording.",
    },
    {
      icon: Eye,
      title: "Passwordless & Context-Aware Authentication",
      description:
        "Enable secure, frictionless authentication based on user context and risk assessment.",
    },
    {
      icon: FileCheck,
      title: "Access Request & Approval Workflows",
      description:
        "Streamline access requests with automated approval workflows and policy enforcement.",
    },
    {
      icon: Settings,
      title: "Compliance & Audit Readiness",
      description:
        "Maintain continuous compliance with automated reporting and comprehensive audit trails.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section (replaced with HeroSection2; brand accents use #032955) */}
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
  badge="Welford Systems — IAG"
  title="Identity & Access Governance — Unify, Automate, and Secure Every Identity"
  subtitle="Empower your enterprise to enforce Zero Trust, eliminate standing access, and automate compliance across hybrid and multi-cloud environments."
  bullets={[
    "Unified Identity Governance",
    "Zero Trust enforcement",
    "Automated compliance workflows",
  ]}
  primaryCta={{
    label: "Request a Demo",
    href: "/demo",
    icon: <Calendar className="mr-2 h-4 w-4" />,
  }}
  secondaryCta={{
    label: "Explore Welford IAG",
    href: "/resources/videos-demos",
    icon: <Phone className="mr-2 h-4 w-4" />,
  }}
  image={{
    src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/212121.webp",
    alt: "Identity & Access Governance product overview",
  }}
  imageBadgeText="30–45 min session"
  id="demo-hero"
/>
      </section>

<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
  {/* Ambient brand glows (non-blocking) */}
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
      {/* Header */}
      <div className="text-center mb-16">
        {/* Kicker */}
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
            The Challenge
          </span>
        </div>

        {/* Title */}
        
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Identity Risk Is Business Risk
          </span>
        </h2>

        {/* Accent underline */}
        <div
          className="mx-auto mt-4 h-1 w-28 rounded-full"
          style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        />

        {/* Intro */}
        <div className="mx-auto w-[92vw] max-w-[92vw] sm:max-w-4xl">
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
            In the modern enterprise, identity is the new perimeter — and unmanaged access is the weakest link.
            Organizations face escalating complexity as they manage thousands of human and machine identities
            across on-premises, SaaS, and multi-cloud environments. Traditional IAM models, built on standing
            privileges and manual provisioning, can no longer keep pace.
          </p>
        </div>
      </div>

      {/* Challenges Grid (modern tiles) */}
      {/* Requires: import { Shield, Settings, Eye, FileCheck, Users } from "lucide-react"; */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
        {/* Tile helper styles */}
        {/* Each tile: larger icon ring, subtle hover lift, internal focus ring, balanced paddings */}
        {/* 1. Privilege Sprawl */}
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
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Privilege Sprawl</h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Excessive permissions expand the attack surface across all environments and platforms.
          </p>
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
          />
        </article>

        {/* 2. Manual Provisioning */}
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
              <Settings className="h-7 w-7" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Manual Provisioning</h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Human workflows add delay and inconsistency to access management processes.
          </p>
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
          />
        </article>

        {/* 3. Limited Visibility */}
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
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Limited Visibility</h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            No real-time insight into entitlements and access patterns across systems.
          </p>
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
          />
        </article>

        {/* 4. Compliance Pressure */}
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
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Compliance Pressure</h3>
          </div>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
            Proving ISO 27001, GDPR controls is costly and time-consuming.
          </p>
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
          />
        </article>

        {/* 5. Hybrid Complexity */}
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
              <Users className="h-7 w-7" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Hybrid Complexity</h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Azure, AWS, Entra ID, ADDS, and SaaS sprawl create governance blind spots and security gaps.
          </p>
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }} />
        </article>

        {/* Grid balance spacer (keeps rhythm on some viewports) */}
        <div className="hidden lg:block" />
      </div>
    </div>

    {/* Footnote / Emphasis block */}
    <p
      className="mt-12 text-base sm:text-lg leading-relaxed text-center font-medium max-w-3xl mx-auto px-5"
      style={{
        color: "#032955",
        background: "linear-gradient(90deg, rgba(11,74,168,0.08) 0%, rgba(3,41,85,0.08) 100%)",
        borderRadius: "1rem",
        padding: "1.25rem",
        boxShadow: "0 6px 28px rgba(3,41,85,0.08)",
      }}
    >
      Identity governance is no longer just about{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
      >
        access
      </span>
      — it’s about{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
      >
        governing risk
      </span>
      ,{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
      >
        proving control
      </span>
      , and{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
      >
        enforcing trust
      </span>
      . By replacing{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
      >
        manual control
      </span>{" "}
      with{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
      >
        continuous governance
      </span>
      , Welford IAG converts compliance from a reactive burden into a{" "}
      <span
        className="font-semibold text-transparent bg-clip-text"
        style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
      >
        strategic differentiator
      </span>
      .
    </p>
  </div>
</section>



<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
  {/* Brand glows */}
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
    {/* TOP: Center badge */}
    <div className="mb-6 flex justify-center">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
        style={{
          borderColor: "rgba(3,41,85,0.15)",
          color: "#032955",
          background: "rgba(255,255,255,0.65)",
        }}
        aria-label="With Welford IAG, You Can"
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
        With Welford IAG, You Can
      </span>
    </div>

    {/* Heading (80% width) */}
    <div className="text-center mb-10">
      <div className="mx-auto w-[90%] sm:w:[85%] lg:w-[80%]">
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            The Solution: Welford Identity & Access Governance (Welford IAG)
          </span>
        </h2>

        {/* Accent underline */}
        <div className="mx-auto mt-4 h-1 w-28 rounded-full"
             style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }} />
      </div>
    </div>

    {/* BODY: Left content + Right image */}
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* LEFT: Content */}
      <div className="text-left">
        <p className="text-base sm:text-lg text-slate-700">
          Unified, Autonomous Governance for the Modern Enterprise
        </p>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-700 font-light">
          Welford IAG delivers a Zero Trust–aligned, policy-driven access governance framework
          that transforms how organizations manage, monitor, and secure digital identities.
          It eliminates standing privileges, automates lifecycle management, and provides
          continuous verification — all within a single unified platform.
        </p>

        {/* Bulleted list with icons (modern, accessible) */}
        {/* Requires: import { Users2, KeyRound, FileCheck2, ShieldCheck } from "lucide-react"; */}
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
              <Users2 className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Govern every identity</span> — human and non-human
              (service accounts, bots, workloads).
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
              <KeyRound className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Automate entitlement provisioning &amp; revocation</span> across
              cloud, on-prem, and SaaS.
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
              <FileCheck2 className="h-5 w-5" />
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-slate-800">
              <span className="font-semibold text-[#032955]">Prove compliance instantly</span> with auditable, end-to-end access trails.
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
              <span className="font-semibold text-[#032955]">Reach Zero Trust maturity</span> with continuous verification and no extra ops burden.
            </p>
          </li>
        </ul>
      </div>

      {/* RIGHT: Modern Image Mockup */}
      <div className="lg:sticky lg:top-24">
        <div className="relative">
          {/* floating badge */}
          <div className="absolute -top-4 -left-2 z-10">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-md backdrop-blur"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "rgba(255,255,255,0.7)", color: "#032955" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "#0b4aa8" }} />
              Live Governance Dashboard
            </span>
          </div>

          {/* device frame */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(180deg, rgba(3,41,85,0.08) 0%, rgba(11,74,168,0.08) 100%)",
            }}
          >
            {/* top bar */}
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
                Welford IAG • Governance
              </span>
              <div className="w-10" />
            </div>

            {/* image area */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
                alt="Welford IAG Governance — teamwork and control"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />

              {/* gradient overlay bottom for caption */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,41,85,0.45) 100%)" }}
              />

              {/* caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-sm/6 opacity-90">Risk &amp; Access Posture</p>
                  <p className="text-base font-semibold">Real-time visibility across identities &amp; entitlements</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/90 rounded-full px-3 py-1.5 shadow">
                  <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
                  <span className="text-xs font-medium" style={{ color: "#032955" }}>Healthy</span>
                </div>
              </div>
            </div>
          </div>

          {/* info chips */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span
              className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: "#032955" }}
            >
              Zero Trust aligned
            </span>
            <span
              className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: "#032955" }}
            >
              Continuous verification
            </span>
            <span
              className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
              style={{ borderColor: "rgba(3,41,85,0.15)", background: "white", color: "#032955" }}
            >
              Auditable trails
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[80%] mx-auto">
  {/* Ambient brand glows */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
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
      {/* Header */}
      <div className="text-center mb-14">
        {/* Kicker */}
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
            Core Capabilities
          </span>
        </div>

        {/* Title with subtle underline accent */}
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Identity-First Automation for Modern Enterprises
          </span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-24 rounded-full"
          style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        />
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. JIT Access Provisioning */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          {/* Gradient edge accent */}
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
              {/* import { Clock } from "lucide-react" */}
              <Clock className="h-6 w-6" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.22)" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Just-in-Time (JIT) Access Provisioning
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Grant access only when required — automatically revoked upon task completion.
            Implements the Zero Trust principle of “never trust, always verify.”
          </p>
        </article>

        {/* 2. Autonomous Entitlement Management */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }}
          />
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              {/* import { Workflow } from "lucide-react" */}
              <Workflow className="h-6 w-6" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.22)" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Autonomous Entitlement Management
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Fully automate access provisioning and deprovisioning across all systems, eliminating
            tickets and manual admin. Reduce fulfillment time from days to seconds.
          </p>
        </article>

        {/* 3. Lifecycle Automation (JML) */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }}
          />
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              {/* import { RefreshCw } from "lucide-react" */}
              <RefreshCw className="h-6 w-6" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.22)" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Lifecycle Automation (Joiner–Mover–Leaver)
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Ensure users have the right access throughout their employment.
            Automatically update or revoke entitlements as roles or statuses change.
          </p>
        </article>

        {/* 4. NPTA Governance */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }}
          />
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              {/* import { KeyRound } from "lucide-react" */}
              <KeyRound className="h-6 w-6" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Non-Personal Technical Account (NPTA) Governance
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Securely manage service accounts, application principals, and database schemas.
            Enable credential rotation, policy enforcement, and secure API key management.
          </p>
        </article>

        {/* 5. Multi-Cloud & Directory Integration */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }}
          />
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              {/* import { Cloud } from "lucide-react" */}
              <Cloud className="h-6 w-6" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Multi-Cloud & Directory Integration
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Unified control for Azure, AWS, Entra ID, Active Directory, and Microsoft 365 — plus flexible APIs
            for integration with legacy systems.
          </p>
        </article>

        {/* 6. Full Audit & Compliance Reporting */}
        <article
          className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
            border: "1px solid rgba(3,41,85,0.12)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }}
          />
          <div className="flex items-start gap-4 mb-3">
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-[rgba(3,41,85,0.18)] bg-white transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              {/* import { FileCheck2 } from "lucide-react" */}
              <FileCheck2 className="h-6 w-6" style={{ color: "#032955" }} />
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Full Audit & Compliance Reporting
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Comprehensive audit trails, real-time dashboards, and forensic reporting provide irrefutable proof
            for frameworks like ISO 27001, SOC 2, and GDPR.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>


<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[80%] mx-auto">
  {/* Ambient brand glows */}
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
      {/* Header */}
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
            Business &amp; Security Outcomes
          </span>
        </div>

        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Turn Governance into Measurable Advantage
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
          Welford IAG transforms access governance into a measurable business advantage.
        </p>
      </div>

      {/* NOTE: import these icons where you use this section:
          import { ShieldCheck, FileCheck2, Zap, Eye, Shield } from "lucide-react";
      */}

      {/* Responsive Table (table on md+, cards on xs) */}
      <div
        className="rounded-3xl border shadow-sm overflow-hidden backdrop-blur"
        style={{ borderColor: "rgba(3,41,85,0.12)", background: "rgba(255,255,255,0.7)" }}
      >
        {/* Table header stripe */}
        <div
          className="hidden md:grid grid-cols-12 items-center px-6 py-4"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,41,85,0.08) 0%, rgba(11,74,168,0.08) 100%)",
          }}
        >
          <div className="col-span-4 text-sm font-semibold tracking-wide" style={{ color: "#032955" }}>
            Goal
          </div>
          <div className="col-span-4 text-sm font-semibold tracking-wide" style={{ color: "#032955" }}>
            Result
          </div>
          <div className="col-span-4 text-sm font-semibold tracking-wide" style={{ color: "#032955" }}>
            Business Impact
          </div>
        </div>

        {/* Rows (md+ as grid rows) */}
        <div className="hidden md:block divide-y" style={{ borderColor: "rgba(3,41,85,0.08)" }}>
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-4">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(3,41,85,0.15)",
                  }}
                >
                  <ShieldCheck className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">Reduce Attack Surface</div>
                  <div className="text-sm text-slate-600">Eliminates standing access</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">
                Up to <span className="font-semibold" style={{ color: "#032955" }}>90% reduction</span> in privilege exposure
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Smaller blast radius, fewer lateral-movement paths</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-4">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(3,41,85,0.15)",
                  }}
                >
                  <FileCheck2 className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">Accelerate Audits</div>
                  <div className="text-sm text-slate-600">Generates real-time evidence</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Faster ISO 27001 &amp; SOC 2 readiness</div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Shorter audit cycles, lower compliance cost</div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-4">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(3,41,85,0.15)",
                  }}
                >
                  <Zap className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">Increase Efficiency</div>
                  <div className="text-sm text-slate-600">Automates provisioning</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Cuts admin workload and manual errors</div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Frees staff for higher-value work</div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-4">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(3,41,85,0.15)",
                  }}
                >
                  <Eye className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">Enhance Accountability</div>
                  <div className="text-sm text-slate-600">End-to-end visibility</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Strengthens compliance and trust</div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Clear ownership, faster investigations</div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-12 gap-6 px-6 py-6">
            <div className="col-span-4">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(3,41,85,0.15)",
                  }}
                >
                  <Shield className="h-5 w-5" style={{ color: "#032955" }} />
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">Enable Zero Trust</div>
                  <div className="text-sm text-slate-600">Continuous verification</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Improves cyber resilience</div>
            </div>
            <div className="col-span-4 flex items-center">
              <div className="text-sm text-slate-700">Risk-adaptive access, tighter controls</div>
            </div>
          </div>
        </div>

        {/* Mobile Cards (xs–sm) */}
        <div className="md:hidden divide-y" style={{ borderColor: "rgba(3,41,85,0.08)" }}>
          {[
            {
              icon: "ShieldCheck",
              goal: "Reduce Attack Surface",
              result: "Eliminates standing access",
              impact: "Up to 90% reduction in privilege exposure",
              desc: "Smaller blast radius, fewer lateral-movement paths",
            },
            {
              icon: "FileCheck2",
              goal: "Accelerate Audits",
              result: "Generates real-time evidence",
              impact: "Faster ISO 27001 & SOC 2 readiness",
              desc: "Shorter audit cycles, lower compliance cost",
            },
            {
              icon: "Zap",
              goal: "Increase Efficiency",
              result: "Automates provisioning",
              impact: "Cuts admin workload and manual errors",
              desc: "Frees staff for higher-value work",
            },
            {
              icon: "Eye",
              goal: "Enhance Accountability",
              result: "End-to-end visibility",
              impact: "Strengthens compliance and trust",
              desc: "Clear ownership, faster investigations",
            },
            {
              icon: "Shield",
              goal: "Enable Zero Trust",
              result: "Continuous verification",
              impact: "Improves cyber resilience",
              desc: "Risk-adaptive access, tighter controls",
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
                  {/* swap icon by name at integration site */}
                  {r.icon === "ShieldCheck" && <ShieldCheck className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "FileCheck2" && <FileCheck2 className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "Zap" && <Zap className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "Eye" && <Eye className="h-5 w-5" style={{ color: "#032955" }} />}
                  {r.icon === "Shield" && <Shield className="h-5 w-5" style={{ color: "#032955" }} />}
                </span>
                <div>
                  <div className="text-base font-semibold text-slate-900">{r.goal}</div>
                  <div className="mt-1 text-sm text-slate-600">{r.result}</div>
                </div>
              </div>
              <div className="mt-3 text-sm">
                <div className="text-slate-700">
                  <span className="font-medium" style={{ color: "#032955" }}>
                    Impact:&nbsp;
                  </span>
                  {r.impact}
                </div>
                <div className="text-slate-600">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote */}
<p
  className="mt-12 text-base sm:text-lg leading-relaxed text-center font-medium max-w-3xl mx-auto px-4"
  style={{
    color: "#032955",
    background:
      "linear-gradient(90deg, rgba(11,74,168,0.08) 0%, rgba(3,41,85,0.08) 100%)",
    borderRadius: "1rem",
    padding: "1.25rem",
    boxShadow: "0 4px 20px rgba(3,41,85,0.08)",
  }}
>
  By replacing{" "}
  <span className="font-semibold text-transparent bg-clip-text"
    style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}>
    manual control
  </span>{" "}
  with{" "}
  <span className="font-semibold text-transparent bg-clip-text"
    style={{ backgroundImage: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}>
    continuous governance
  </span>
  , Welford IAG converts compliance from a reactive burden into a{" "}
  <span className="font-semibold text-transparent bg-clip-text"
    style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}>
    strategic differentiator.
  </span>
</p>

    </div>
  </div>
</section>



<section className="relative overflow-hidden py-16 sm:py-20 bg-transparent w-[80%] mx-auto">
  {/* soft brand glows */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 h-[380px] w-[380px] rounded-full blur-[140px] opacity-25"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-[-140px] right-[-80px] h-[340px] w-[340px] rounded-full blur-[140px] opacity-20"
      style={{ background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10 max-w-5xl">
    {/* kicker badge */}
    <div className="mb-6 flex justify-center">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
        style={{ borderColor: "rgba(3,41,85,0.18)", color: "#032955", background: "rgba(255,255,255,0.65)" }}
        aria-label="Why It Matters"
      >
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full"
            style={{ background: "#0b4aa8", opacity: 0.75 }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#032955" }} />
        </span>
        Built on Trust
      </span>
    </div>

    {/* title + underline */}
    <div className="text-center">

      <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
          >
            Why It Matters
          </span>
        </h2>
      <div
        className="mx-auto mt-3 h-1 w-28 rounded-full"
        style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        aria-hidden
      />
    </div>

    {/* highlighted quote (differentiated) */}
    <figure
      className="relative mx-auto mt-8 max-w-4xl rounded-3xl p-6 sm:p-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(246,249,255,0.9) 100%)",
        border: "1px solid rgba(3,41,85,0.12)",
        boxShadow: "0 16px 50px rgba(3,41,85,0.10)",
      }}
    >
      {/* subtle radial sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #0b4aa8 0%, transparent 70%)" }}
      />

      {/* quote header row (text only, icon removed) */}
      <div className="mb-4 flex items-center justify-center gap-2 text-[#032955]">
        <span className="text-xs sm:text-sm font-medium tracking-wide">Principle</span>
      </div>

      <blockquote className="relative">
        <p className="text-center text-[1.25rem] sm:text-[1.5rem] leading-relaxed font-semibold"
           style={{ color: "#0f172a" }}>
          “Perimeter security keeps threats out. Governance keeps your organization accountable.”
        </p>
      </blockquote>

      {/* decorative divider */}
      <div
        className="mx-auto mt-6 h-[2px] w-16 rounded-full"
        style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
        aria-hidden
      />
    </figure>

    {/* copy */}
    <div className="mx-auto max-w-3xl text-center space-y-5 mt-8">
      <p className="text-base sm:text-lg text-slate-700">
        Identity governance defines the foundation of digital trust.
      </p>
      <p className="text-base sm:text-lg text-slate-700">
        With Welford IAG, organizations move beyond visibility — to actionable, auditable control
        over every identity and privilege.
      </p>
    </div>
  </div>
</section>


      {/* CTA Section (no gradient buttons; brand accents via #032955) */}
      <CtaSection />



    </Layout>
  );
};

export default IdentityAccessManagement;
