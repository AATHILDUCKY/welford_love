// /components/blogs/WelfordJoinsMicrosoftForStartups.tsx
// Centered blog layout + right-rail Table of Contents (outside the article)
// Uses your reusable <TableOfContent /> component
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Rocket } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/msf1.png"; // <-- place the provided image here
import "@/styles/post.css";

const WelfordJoinsMicrosoftForStartups = () => {
  const brand = "#032955";

  // Reading progress bar (clamped)
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("post-body");
      if (!el) return;
      const total = Math.max(1, el.scrollHeight - window.innerHeight);
      const current = Math.max(0, window.scrollY - (el.offsetTop - 80));
      const pct = Math.min(100, (current / total) * 100);
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Table of Contents items (IDs must match sections)
  const tocItems = useMemo(
    () => [
      { id: "intro", label: "Announcement & why it matters", level: 1 as const },
      { id: "about-program", label: "About Microsoft for Startups", level: 1 as const },
      { id: "what-we-gain", label: "What we’ll leverage", level: 1 as const },
      { id: "step-plan", label: "Step-by-step plan (12 weeks)", level: 1 as const },
      { id: "tech-roadmap", label: "Technical roadmap on Azure", level: 1 as const },
      { id: "marketplace-gtm", label: "Marketplace & go-to-market", level: 1 as const },
      { id: "for-customers", label: "What this means for customers", level: 1 as const },
      { id: "stay-updated", label: "How to follow along", level: 2 as const },
    ],
    []
  );

  return (
    <Layout>
      {/* Reading progress bar */}
      <div
        className="fixed left-0 right-0 top-0 z-40 h-1"
        style={{
          background: `linear-gradient(90deg, ${brand} ${progress}%, rgba(0,0,0,0.06) ${progress}%)`,
        }}
      />

      {/* Centered wrapper */}
      <div className="relative flex justify-center w-full">
        {/* Article — ~85% width */}
        <article
          className="py-16 md:py-24 bg-white post w-[85%] 2xl:w-[88%] max-w-[1300px]"
          itemScope
          itemType="https://schema.org/BlogPosting"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="post-container max-w-[1150px] mx-auto">
            {/* Header */}
            <header className="mb-12 text-center">
              <p
                className="post-category text-sky-900/80 font-medium tracking-wide"
                itemProp="articleSection"
              >
                Company News
              </p>

              <h1
                className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-slate-900 mt-2 leading-snug"
                itemProp="headline"
              >
                Welford Systems Joins Microsoft for Startups
              </h1>

              <p className="post-subtitle text-lg md:text-xl 2xl:text-[22px] text-slate-700 mt-4 max-w-3xl mx-auto">
                We’re thrilled to share that Welford Systems has been accepted into the Microsoft for
                Startups program—accelerating our identity-first security roadmap and go-to-market.
              </p>

              <div
                className="post-meta mt-6 text-sm md:text-base text-slate-600 flex items-center justify-center gap-4"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span itemProp="name">Welford Systems Editorial Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2025-10-09" itemProp="datePublished">
                    October 2025
                  </time>
                </div>
                <span>~6 min read</span>
              </div>
            </header>

            {/* Hero image */}
            <figure className="mb-12 w-full">
              <div
                className="w-full rounded-xl overflow-hidden bg-gray-100"
                style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}
              >
                <img
                  src={postImage}
                  alt="Welford Systems joins Microsoft for Startups"
                  loading="lazy"
                  itemProp="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm md:text-[15px] text-gray-500 mt-3 text-center">
                Image: Welford Systems — Now part of Microsoft for Startups.
              </figcaption>
            </figure>

            {/* Body */}
            <div
              id="post-body"
              itemProp="articleBody"
              className="text-[18.5px] md:text-[19.5px] 2xl:text-[21px] leading-8 md:leading-9 text-slate-800 space-y-10"
            >
              <section id="intro" className="scroll-mt-28">
                <p>
                  Today, we’re excited to announce that <strong>Welford Systems</strong> has been
                  accepted into the <strong>Microsoft for Startups</strong> program. This milestone
                  gives our team direct access to Microsoft’s cloud ecosystem, engineering guidance,
                  and marketplace routes—helping us scale <em>Welford IAG</em> faster and deliver more
                  value to our customers.
                </p>
              </section>

              <section id="about-program" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  About Microsoft for Startups
                </h2>
                <p>
                  Microsoft for Startups is a growth program designed to help early and scaling
                  companies build, ship, and sell on Azure. Startups get access to cloud credits,
                  developer tools, mentorship, and go-to-market pathways—so teams can focus on
                  product differentiation rather than undifferentiated heavy lifting.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>Azure infrastructure credits and technical enablement.</li>
                  <li>Developer tooling and productivity offers.</li>
                  <li>Architecture reviews and expert guidance.</li>
                  <li>Marketplace publishing and sales motion support.</li>
                </ul>
              </section>

              <section id="what-we-gain" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  What Welford Will Leverage
                </h2>
                <p>
                  As an identity-first security company, we’ll focus our benefits on strengthening
                  Welford IAG’s architecture, speed to market, and customer trust:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>Secure, scalable Azure landing zones for dev/test/prod.</li>
                  <li>Deep integration with Microsoft Entra ID (formerly Azure AD).</li>
                  <li>Automation via GitHub Actions, Bicep/Terraform, and Defender for Cloud guardrails.</li>
                  <li>Marketplace listing to streamline procurement and billing.</li>
                  <li>Co-marketing and technical validation with Microsoft experts.</li>
                </ul>
              </section>

              <section id="step-plan" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Step-by-Step Plan (First 12 Weeks)
                </h2>
                <ol className="list-decimal pl-6 mt-3 space-y-3 marker:text-slate-600">
                  <li>
                    <strong>Program Onboarding:</strong> Complete environment setup, tenant alignment,
                    and security baselines (CIS, Defender for Cloud).
                  </li>
                  <li>
                    <strong>Landing Zone & Networking:</strong> Deploy reference landing zones with
                    hub/spoke, Private Link, Key Vault, managed identities, and cost guardrails.
                  </li>
                  <li>
                    <strong>Identity & Access:</strong> Integrate Entra ID for SSO, SCIM, and MFA;
                    align with Welford IAG’s JIT access principles.
                  </li>
                  <li>
                    <strong>Data & Secrets:</strong> Centralize secrets in Key Vault; enable encryption
                    at rest/in transit; audit via logs/metrics.
                  </li>
                  <li>
                    <strong>CI/CD:</strong> GitHub Actions pipelines with IaC (Bicep/Terraform) and
                    environment approvals; containerized builds.
                  </li>
                  <li>
                    <strong>Observability:</strong> Azure Monitor, Log Analytics, and alerts for
                    SLIs/SLOs; cost monitors and budget alerts.
                  </li>
                  <li>
                    <strong>Security Validation:</strong> Threat modeling, Defender for Cloud posture
                    checks, vulnerability scans for images and dependencies.
                  </li>
                  <li>
                    <strong>Compliance Enablement:</strong> Map controls to ISO 27001/27017/27018;
                    document evidence for audits and customer reviews.
                  </li>
                  <li>
                    <strong>Marketplace Readiness:</strong> Prepare offer, pricing, and private
                    plans; validate transactable path.
                  </li>
                  <li>
                    <strong>Co-Sell Enablement:</strong> Create solution briefs and references;
                    align with partner team for opportunity sharing.
                  </li>
                  <li>
                    <strong>Pilot Customers:</strong> Run controlled onboarding with early adopters;
                    capture feedback and iterate.
                  </li>
                  <li>
                    <strong>Public Launch Prep:</strong> Finalize marketing assets, documentation,
                    and SLAs for general availability.
                  </li>
                </ol>
              </section>

              <section id="tech-roadmap" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Technical Roadmap on Azure (High Level)
                </h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>
                    <strong>Identity:</strong> Entra ID for org SSO, role-based access, Conditional
                    Access; JIT elevation aligned with Welford IAG.
                  </li>
                  <li>
                    <strong>Security:</strong> Defender for Cloud, Microsoft Sentinel (optional) for
                    detections; centralized logging and alerting.
                  </li>
                  <li>
                    <strong>Data:</strong> Managed services with encryption, private endpoints, and
                    backup policies; secrets in Key Vault.
                  </li>
                  <li>
                    <strong>Automation:</strong> GitHub Actions + IaC for repeatable deployments;
                    environment promotion gates.
                  </li>
                </ul>
              </section>

              <section id="marketplace-gtm" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Marketplace & Go-to-Market
                </h2>
                <p>
                  Listing on the Microsoft commercial marketplace reduces procurement friction and
                  enables flexible pricing and private offers. We’ll align our offer to match common
                  buying patterns and collaborate with Microsoft partner teams on co-sell motions.
                </p>
              </section>

              <section id="for-customers" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  What This Means for Our Customers
                </h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>
                    Faster roadmap execution and higher reliability through proven Azure patterns.
                  </li>
                  <li>
                    Stronger security posture, continuous verification, and audit-ready evidence.
                  </li>
                  <li>
                    Simpler procurement via marketplace and enterprise agreements.
                  </li>
                </ul>
              </section>

              <section id="stay-updated" className="scroll-mt-28">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                  Follow Our Journey
                </h3>
                <p>
                  We’ll share progress updates as we complete each step—technical milestones, customer
                  stories, and marketplace updates. If you’d like early access or a private demo of
                  Welford IAG on Azure, we’d love to talk.
                </p>

                <p className="italic text-gray-600 mt-6">
                  — Welford Systems, advancing Identity Governance for a Zero Trust world.
                </p>
              </section>

              {/* Footer navigation */}
              <footer className="mt-20 text-center">
                <Link
                  to="/resources/blog"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold"
                  style={{ color: brand }}
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </footer>
            </div>
          </div>
        </article>

        {/* Right rail ToC (outside article, fixed) */}
        <aside className="hidden xl:block fixed right-6 2xl:right-12 top-28 w-[340px] 2xl:w-[380px] z-30 max-h-[78vh] overflow-auto">
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-slate-200/80" />
          <TableOfContent title="On this page" items={tocItems} offset={-112} />
        </aside>
      </div>
    </Layout>
  );
};

export default WelfordJoinsMicrosoftForStartups;
