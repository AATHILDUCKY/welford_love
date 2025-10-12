// /components/blogs/RansomwareStartsWithAccess.tsx
// Centered blog layout + right-rail Table of Contents (separate column, 10px gap)
// Matches the same pattern used in your other posts
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/ransome1.png";
import "@/styles/post.css";

const RansomwareStartsWithAccess = () => {
  const brand = "#032955";

  // Reading progress bar
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

  // Table of Contents items
  const tocItems = useMemo(
    () => [
      { id: "intro", label: "Why access is the entry point", level: 1 as const },
      { id: "root-cause", label: "Root cause: weak governance", level: 1 as const },
      { id: "iag-changes", label: "How Welford IAG helps", level: 1 as const },
      { id: "autonomous-fulfilment", label: "Autonomous fulfilment", level: 1 as const },
      { id: "stop-sprawl", label: "Stop access sprawl", level: 1 as const },
      { id: "starts-with-identity", label: "Identity-first protection", level: 1 as const },
      { id: "key-outcomes", label: "Key outcomes", level: 2 as const },
    ],
    []
  );

  return (
    <Layout>
      {/* Reading progress bar (top) */}
      <div
        className="fixed left-0 right-0 top-0 z-40 h-1"
        style={{
          background: `linear-gradient(90deg, ${brand} ${progress}%, rgba(0,0,0,0.06) ${progress}%)`,
        }}
      />

      {/* Page container with true 2-col grid and a 10px gap */}
      <div className="relative w-full">
        <div
          className="
            mx-auto
            grid
            grid-cols-1
            xl:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]
            gap-[10px]
            w-[92%]
            max-w-[1280px]
          "
        >
          {/* Blog Article (left) */}
          <article
            className="py-[10px] bg-white post relative z-10"
            itemScope
            itemType="https://schema.org/BlogPosting"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="post-container max-w-[1150px] mx-auto">
              {/* Header */}
              <header className="mb-[10px] text-center">
                <p className="post-category text-sky-900/80 font-medium tracking-wide" itemProp="articleSection">
                  Welford IAG
                </p>

                <h1
                  className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-slate-900 mt-[10px] leading-snug"
                  itemProp="headline"
                >
                  Ransomware Readiness Begins with Access Control
                </h1>

                <p className="post-subtitle text-lg md:text-xl 2xl:text-[22px] text-slate-700 mt-[10px] max-w-3xl mx-auto">
                  Attackers don’t always “break in.” Too often, they simply log in—with
                  over-privileged accounts, unused credentials, or misconfigured entitlements.
                </p>

                <div
                  className="post-meta mt-[10px] text-sm md:text-base text-slate-600 flex items-center justify-center gap-4"
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
                  <span>~7 min read</span>
                </div>
              </header>

              {/* Hero Image */}
              <figure className="mb-[10px] w-full">
                <div
                  className="w-full rounded-xl overflow-hidden bg-gray-100"
                  style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}
                >
                  <img
                    src={postImage}
                    alt="Ransomware readiness begins with access control"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm md:text-[15px] text-gray-500 mt-[10px] text-center">
                  Image: Welford IAG — Identity-first controls that reduce ransomware blast radius
                </figcaption>
              </figure>

              {/* Body */}
              <div
                id="post-body"
                itemProp="articleBody"
                className="text-[18.5px] md:text-[19.5px] 2xl:text-[21px] leading-8 md:leading-9 text-slate-800 space-y-[10px]"
              >
                <section id="intro" className="scroll-mt-28">
                  <p>
                    Ransomware attacks rarely start with malware; they start with access. In many
                    high-profile breaches, attackers exploited over-privileged accounts, unused
                    credentials, or misconfigured entitlements to move laterally, escalate privileges,
                    and deploy ransomware deep within the organisation.
                  </p>
                </section>

                <section id="root-cause" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    The Real Root Cause: Gaps in Identity Governance
                  </h2>
                  <p>
                    Firewalls and endpoint tools matter, but when identities hold standing privileges
                    and entitlements drift from policy, attackers don’t need to “break in”—they can{" "}
                    <em>sign in</em>. The root cause is weak governance over who can do what, where,
                    and for how long.
                  </p>
                  <blockquote className="border-l-4 border-indigo-600/40 pl-4 italic text-indigo-800 mt-5">
                    “Identity is the new perimeter. Governance is the control plane.”
                  </blockquote>
                </section>

                <section id="iag-changes" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    How Welford IAG Changes the Game
                  </h2>
                  <p>
                    Welford IAG applies a Zero Trust approach to access by enforcing{" "}
                    <strong>Just-in-Time (JIT) provisioning</strong>—access is granted only when needed,
                    for the minimum necessary duration, and automatically revoked when it’s no longer
                    required.
                  </p>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li>
                      <strong>Time-bound access by default:</strong> No standing privileges; every grant
                      has a start and an expiry.
                    </li>
                    <li>
                      <strong>Policy-driven approvals:</strong> Risk-aware workflows that align access
                      with business purpose.
                    </li>
                    <li>
                      <strong>Continuous evidence:</strong> Every decision, grant, and revoke is
                      auditable—ready for regulators and auditors.
                    </li>
                  </ul>
                </section>

                <section id="autonomous-fulfilment" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Autonomous Access Fulfilment—Across Your Full Estate
                  </h2>
                  <p>
                    What sets Welford IAG apart is its ability to deliver{" "}
                    <strong>autonomous access fulfilment</strong> across legacy systems, cloud platforms,
                    databases, and operating systems. No tickets, no manual intervention, no missed
                    deprovisioning.
                  </p>

                  <div className="mt-5 rounded-xl bg-sky-50/70 border border-sky-100 p-4 md:p-5 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 shrink-0 text-sky-700 mt-1" />
                    <div className="text-[17.5px] md:text-[18.5px] leading-8">
                      <strong>Outcome:</strong> By eliminating persistent entitlements and ensuring
                      access is intentional, time-bound, and auditable, Welford IAG significantly reduces
                      the attack surface available to ransomware operators.
                    </div>
                  </div>
                </section>

                <section id="stop-sprawl" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Stop Access Sprawl Before It Starts
                  </h2>
                  <p>
                    Access sprawl is inevitable without automation. Welford IAG prevents it by
                    continuously reconciling live permissions against policy and automating revocation
                    at source.
                  </p>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li>
                      <strong>Automatic deprovisioning:</strong> Access is removed immediately when a user
                      changes role or leaves.
                    </li>
                    <li>
                      <strong>Rapid containment:</strong> If compromise is suspected, high-risk access can
                      be paused or revoked across systems in moments.
                    </li>
                    <li>
                      <strong>Privileged visibility:</strong> Real-time insight into who has what, why,
                      and for how long.
                    </li>
                  </ul>
                </section>

                <section id="starts-with-identity" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Ransomware Protection Starts with Identity
                  </h2>
                  <p>
                    Malware is the payload, but identity is the pathway. By governing access with
                    precision and automation, organisations can shut down the routes attackers rely on to
                    stage ransomware. Welford IAG provides the control, precision, and automation required
                    to proactively defend against access-based threats before they become breaches.
                  </p>
                </section>

                <section id="key-outcomes" className="scroll-mt-28">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                    Key Outcomes You Can Expect
                  </h3>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li>Smaller blast radius and fewer escalation paths.</li>
                    <li>Faster incident response through one-click revoke.</li>
                    <li>Audit-ready evidence of least-privilege and JIT enforcement.</li>
                    <li>Lower operational load—no queues, no ticket chasing.</li>
                  </ul>

                  <p className="italic text-gray-600 mt-[10px]">
                    — Welford Systems, advancing Identity Governance for a Zero Trust world.
                  </p>
                </section>

                {/* Footer Navigation */}
                <footer className="mt-[10px] text-center">
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

          {/* Table of Contents (right) — sticky, 10px away, never overlays */}
          <aside
            className="
              hidden xl:block
              sticky top-[10px]
              self-start
              h-fit
              bg-transparent
              z-0
            "
          >
            {/* The nav itself owns the border-left; no absolute overlays */}
            <TableOfContent title="On this page" items={tocItems} offset={-112} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default RansomwareStartsWithAccess;
