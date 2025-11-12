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
  CloudCog,
  Server,
  Lock
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const CloudSecurity = () => {
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
      {/* Hero Section */}
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
          badge="Cloud Security Governance Platform"
          title="Secure Every Cloud. Govern Every Identity."
          subtitle="Cloud Security Reinvented Through Zero Trust Identity Governance."
          bullets={[
            "Zero Trust Enforcement",
            "Just-in-Time Cloud Access",
            "Continuous Compliance",
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
            src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/cta.webp",
            alt: "Cloud Security Governance Platform overview",
          }}
          imageBadgeText="30–45 min session"
          id="demo-hero"
        />
      </section>

      {/* The Cloud Security Challenge Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
        {/* Ambient brand glows */}
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
                  The Cloud Security Challenge
                </span>
              </div>

              {/* Title */}
              <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span
                  className="relative inline-block bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
                >
                  Cloud Transformation Demands New Security
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
                  Cloud transformation has redefined enterprise agility — but it has also blurred boundaries. 
                  Misconfigurations, overprivileged accounts, and unmanaged identities create silent 
                  vulnerabilities across multi-cloud environments. In today's cloud, security is identity-driven — 
                  and true control begins with governance at the access layer.
                </p>
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 auto-rows-fr">
              {/* 1. Standing Access */}
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
                    <Lock className="h-7 w-7" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Standing Access</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Persistent entitlements increase breach exposure across cloud environments.
                </p>
                <span
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
                />
              </article>

              {/* 2. Identity Sprawl */}
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
                  <h3 className="text-xl font-semibold text-slate-900">Identity Sprawl</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Untracked human and non-human accounts across multiple cloud platforms.
                </p>
                <span
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
                />
              </article>

              {/* 3. Manual Provisioning */}
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
                  Delayed and inconsistent access fulfillment across cloud environments.
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
                  Difficulty producing auditable access evidence for ISO 27001 or GDPR.
                </p>
                <span
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.16)" }}
                />
              </article>
            </div>
          </div>

          {/* Footnote */}
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
            In the cloud era, security begins with{" "}
            <span
              className="font-semibold text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
            >
              identity governance
            </span>
            . Welford IAG transforms cloud security from{" "}
            <span
              className="font-semibold text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
            >
              reactive monitoring
            </span>
            {" "}to{" "}
            <span
              className="font-semibold text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
            >
              proactive control
            </span>
            , ensuring every access request is validated, every entitlement is justified, and every session is auditable.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
{/* Our Approach Section */}
<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[90%] mx-auto">
  {/* Brand glows */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
      style={{
        background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[160px] opacity-20"
      style={{
        background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
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
        aria-label="Our Approach"
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
        Our Approach
      </span>
    </div>

    {/* Heading */}
    <div className="text-center mb-10">
      <div className="mx-auto w-[90%] sm:w-[85%] lg:w-[80%]">
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #001b44 0%, #0053ba 45%, #0b74ff 100%)",
            }}
          >
            Cloud Security Through Identity Governance
          </span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-28 rounded-full"
          style={{
            background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)",
          }}
        />
      </div>
    </div>

    {/* BODY: Left content + Right image */}
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* LEFT CONTENT (shifted slightly downward) */}
      <div className="flex flex-col justify-center self-start lg:mt-[40px] space-y-6 text-left px-4 lg:px-0">
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl">
          Welford Systems’ cloud security solution isn’t an add-on — it’s built directly into{" "}
          <span className="font-semibold text-slate-900">Welford IAG</span>, ensuring workloads are protected by design.
        </p>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl">
          Through <b className="text-slate-900">Zero Trust enforcement</b>,{" "}
          <b className="text-slate-900">Just-in-Time (JIT) access</b>, and{" "}
          <b className="text-slate-900">automated entitlement management</b>, we secure every
          interaction from the inside out.
        </p>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl">
          <span className="font-semibold text-slate-900">Welford IAG</span> integrates seamlessly
          with <span className="text-blue-600 font-medium">Azure AD / Entra ID</span>,{" "}
          <span className="text-blue-600 font-medium">AWS IAM</span>, and{" "}
          <span className="text-blue-600 font-medium">GCP IAM</span> — delivering{" "}
          <b className="text-slate-900">real-time governance</b> over who can access what, when, and
          why, with continuous verifiable audit trails.
        </p>
      </div>

      {/* RIGHT IMAGE MOCKUP */}
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
              Cloud Governance Dashboard
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
                Welford IAG • Cloud Security
              </span>
              <div className="w-10" />
            </div>

            {/* image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
                alt="Welford IAG Cloud Security Dashboard"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />

              {/* gradient overlay bottom */}
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
                  <p className="text-sm/6 opacity-90">Multi-Cloud Access Posture</p>
                  <p className="text-base font-semibold">
                    Real-time governance across Azure, AWS & GCP
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
                    Protected
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* info chips */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {["Zero Trust aligned", "JIT Access", "Multi-cloud"].map((chip) => (
              <span
                key={chip}
                className="text-xs sm:text-sm rounded-full px-3 py-1.5 border shadow-sm"
                style={{
                  borderColor: "rgba(3,41,85,0.15)",
                  background: "white",
                  color: "#032955",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Core Cloud Security Capabilities Section */}
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
                  Core Cloud Security Capabilities
                </span>
              </div>

              {/* Title */}
              <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span
                  className="relative inline-block bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)" }}
                >
                  Delivered via Welford IAG Platform
                </span>
              </h2>
              <div
                className="mx-auto mt-4 h-1 w-24 rounded-full"
                style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
              />
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. JIT Cloud Access */}
              <article
                className="group relative rounded-3xl p-7 sm:p-8 flex flex-col isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(3,41,85,0.10)]"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,250,255,0.94) 100%)",
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
                    <Clock className="h-6 w-6" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.22)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Just-in-Time Cloud Access
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Grant privileged access to cloud consoles, workloads, and resources only when required — 
                  and revoke automatically once complete. Eliminate standing credentials across Azure, AWS, and GCP.
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
                    <Workflow className="h-6 w-6" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.22)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Autonomous Entitlement Management
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Automate provisioning and deprovisioning of cloud entitlements, roles, and service 
                  principals without manual admin or tickets. Accelerate access fulfilment and reduce human error.
                </p>
              </article>

              {/* 3. NPTA Governance */}
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
                    <KeyRound className="h-6 w-6" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    NPTA Governance
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Control service accounts, application principals, and API keys with policy-based automation. 
                  Enable credential rotation, key vault integration, and usage monitoring to prevent drift.
                </p>
              </article>

              {/* 4. Multi-Cloud Visibility */}
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
                    <CloudCog className="h-6 w-6" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Multi-Cloud Visibility
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Unify governance across Azure, AWS, and GCP with centralized policy enforcement. 
                  Detect misconfigurations, excessive permissions, and privilege anomalies in real time.
                </p>
              </article>

              {/* 5. Continuous Compliance */}
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
                    <FileCheck2 className="h-6 w-6" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Continuous Compliance
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Generate audit-ready evidence for ISO/IEC 27017, ISO/IEC 27018. Dashboards and reports 
                  map directly to compliance frameworks, proving control effectiveness.
                </p>
              </article>

              {/* 6. Cloud Access Forensics */}
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
                    <Eye className="h-6 w-6" style={{ color: "#032955" }} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(11,74,168,0.18)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Cloud Access Forensics
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Every access request, approval, and expiry is logged in immutable audit trails — offering 
                  full forensic accountability across all cloud environments.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Security Outcomes Section */}
<section className="relative overflow-hidden py-20 sm:py-24 bg-transparent w-[80%] mx-auto">
  {/* Ambient brand glows */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 h-[460px] w-[460px] rounded-full blur-[140px] opacity-20"
      style={{
        background: "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[140px] opacity-15"
      style={{
        background: "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
      }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
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
            Business & Security Outcomes
          </span>
        </div>

        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span
            className="relative inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
            }}
          >
            Measurable Impact Through Governance-Driven Cloud Security
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
          Welford IAG transforms cloud security outcomes by embedding Zero Trust and automation
          into every layer of access governance.
        </p>
      </div>

      {/* Outcome Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div
          className="rounded-3xl border shadow-sm p-6 backdrop-blur-xl transition hover:shadow-md hover:scale-[1.02]"
          style={{
            borderColor: "rgba(3,41,85,0.12)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
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
              <div className="text-lg font-semibold text-slate-900">
                Reduce Cloud Risk
              </div>
              <div className="text-sm text-slate-600">
                Eliminate standing privileges and misconfigurations
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Shrink your breach surface by up to{" "}
            <span className="font-semibold" style={{ color: "#032955" }}>
              90%
            </span>{" "}
            through policy-driven least privilege enforcement and automated remediation.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-3xl border shadow-sm p-6 backdrop-blur-xl transition hover:shadow-md hover:scale-[1.02]"
          style={{
            borderColor: "rgba(3,41,85,0.12)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
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
              <div className="text-lg font-semibold text-slate-900">
                Accelerate Compliance
              </div>
              <div className="text-sm text-slate-600">
                Automate evidence generation for ISO 27001
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Reduce audit preparation time by up to{" "}
            <span className="font-semibold" style={{ color: "#032955" }}>
              40%
            </span>{" "}
            with continuous monitoring and built-in control mapping.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-3xl border shadow-sm p-6 backdrop-blur-xl transition hover:shadow-md hover:scale-[1.02]"
          style={{
            borderColor: "rgba(3,41,85,0.12)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
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
              <div className="text-lg font-semibold text-slate-900">
                Enhance Visibility
              </div>
              <div className="text-sm text-slate-600">
                Unify access intelligence across Azure, AWS, and GCP
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Gain real-time insight into who has access to what — enabling faster,
            data-driven governance decisions.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="rounded-3xl border shadow-sm p-6 backdrop-blur-xl transition hover:shadow-md hover:scale-[1.02]"
          style={{
            borderColor: "rgba(3,41,85,0.12)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
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
              <div className="text-lg font-semibold text-slate-900">
                Enforce Zero Trust
              </div>
              <div className="text-sm text-slate-600">
                Continuous verification for every identity and workload
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Ensure every cloud session is time-bound, policy-validated, and auditable — strengthening
            cyber resilience across multi-cloud environments.
          </p>
        </div>

        {/* Card 5 */}
        <div
          className="rounded-3xl border shadow-sm p-6 backdrop-blur-xl transition hover:shadow-md hover:scale-[1.02]"
          style={{
            borderColor: "rgba(3,41,85,0.12)",
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
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
              <div className="text-lg font-semibold text-slate-900">
                Increase Operational Efficiency
              </div>
              <div className="text-sm text-slate-600">
                Automate the manual and focus on the strategic
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            Replace ticket-driven provisioning with intelligent workflows that free your IT and
            security teams to focus on what matters most.
          </p>
        </div>
      </div>

      {/* Result Summary */}
      <p
        className="mt-16 text-base sm:text-lg leading-relaxed text-center font-medium max-w-3xl mx-auto px-4"
        style={{
          color: "#032955",
          background:
            "linear-gradient(90deg, rgba(11,74,168,0.08) 0%, rgba(3,41,85,0.08) 100%)",
          borderRadius: "1rem",
          padding: "1.25rem",
          boxShadow: "0 4px 20px rgba(3,41,85,0.08)",
        }}
      >
        Cloud security becomes{" "}
        <span
          className="font-semibold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
          }}
        >
          continuous
        </span>
        ,{" "}
        <span
          className="font-semibold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)",
          }}
        >
          measurable
        </span>
        , and{" "}
        <span
          className="font-semibold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
          }}
        >
          auditable
        </span>{" "}
        — delivering the visibility and control needed to govern with confidence.
      </p>
    </div>
  </div>
</section>


{/* Why Welford Is Different Section — Brand-Themed, No Outside Gradients */}
<section className="relative py-16 sm:py-20 bg-transparent w-full">
  <div className="container mx-auto px-4 max-w-4xl relative z-10">
    {/* Section Header */}
    <div className="text-center mb-12">
      {/* badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border"
        style={{
          background: "rgba(255,255,255,0.75)",
          borderColor: "rgba(3,41,85,0.18)",
          boxShadow: "0 8px 24px rgba(3,41,85,0.10)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#0b4aa8" }}
          />
          <span className="text-sm font-medium" style={{ color: "#032955" }}>
            Why Welford Cloud Security Is Different
          </span>
        </div>
      </div>

      {/* Title — gradient text like your style snippet */}
      <h2 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl tracking-tight">
        <span
          className="relative inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #032955 0%, #0b4aa8 100%)",
          }}
        >
          Beyond Traditional CSPM
        </span>
      </h2>

      {/* Divider — gradient like your style snippet */}
      <div
        className="w-20 h-1 rounded-full mx-auto mt-4"
        style={{ background: "linear-gradient(90deg, #0b4aa8 0%, #032955 100%)" }}
      />
    </div>

    {/* Main Content Card */}
    <div
      className="rounded-2xl border p-8 sm:p-10 backdrop-blur-sm"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(246,249,255,0.95) 100%)",
        borderColor: "rgba(3,41,85,0.14)",
        boxShadow: "0 18px 60px rgba(3,41,85,0.08)",
      }}
    >
      {/* Quote Section */}
      <div className="text-center mb-8">
        <p className="text-xl sm:text-2xl font-semibold leading-relaxed mb-6" style={{ color: "#0f172a" }}>
          "Unlike traditional CSPM tools, Welford's model secures identity before configuration."
        </p>

        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
          style={{
            background: "rgba(11,74,168,0.10)",
            borderColor: "rgba(11,74,168,0.25)",
          }}
        >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#0b4aa8" }}
            />
            <span className="text-sm font-medium" style={{ color: "#032955" }}>
              Core Differentiator
            </span>
        </div>
      </div>

      {/* Description */}
      <div className="text-center mb-10">
        <p className="text-lg leading-relaxed mb-8" style={{ color: "#334155" }}>
          Our cloud protection is governance-first, Zero Trust-aligned, and autonomously enforced through the Welford IAG platform.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div
            className="text-center p-6 rounded-xl border transition-colors"
            style={{
              background: "rgba(3,41,85,0.035)",
              borderColor: "rgba(3,41,85,0.14)",
            }}
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(11,74,168,0.12)" }}
            >
              {/* shield-check icon */}
              <svg className="w-6 h-6" style={{ color: "#0b4aa8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
              Built on ISO/IEC 27001:2022 principles
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="text-center p-6 rounded-xl border transition-colors"
            style={{
              background: "rgba(3,41,85,0.035)",
              borderColor: "rgba(3,41,85,0.14)",
            }}
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(3,41,85,0.10)" }}
            >
              {/* refresh/loop icon */}
              <svg className="w-6 h-6" style={{ color: "#032955" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
              Designed for continuous compliance
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="text-center p-6 rounded-xl border transition-colors"
            style={{
              background: "rgba(3,41,85,0.035)",
              borderColor: "rgba(3,41,85,0.14)",
            }}
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(11,74,168,0.12)" }}
            >
              {/* cloud icon */}
              <svg className="w-6 h-6" style={{ color: "#0b4aa8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
              Autonomous multi-cloud control
            </p>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="text-center pt-8" style={{ borderTop: "1px solid rgba(3,41,85,0.14)" }}>
        <p className="text-lg font-semibold italic" style={{ color: "#0f172a" }}>
          "Zero Trust isn't a product — it's a discipline. Welford IAG makes it operational."
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default CloudSecurity;