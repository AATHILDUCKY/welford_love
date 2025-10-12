// /components/blogs/OverPrivilegedAccounts.tsx
// Centered blog layout + right-rail Table of Contents (separate column, 10px gap)
// Matches the same pattern used in your other posts
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/privi.png"; // replace with your asset path/name
import "@/styles/post.css";

const OverPrivilegedAccounts = () => {
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
      { id: "intro", label: "Why over-privilege fuels breaches", level: 1 as const },
      { id: "manual-gaps", label: "The limits of manual IAG", level: 1 as const },
      { id: "welford-iag", label: "How Welford IAG closes the gap", level: 1 as const },
      { id: "jit-zero-trust", label: "JIT + Zero Trust by default", level: 1 as const },
      { id: "rbac-reviews", label: "RBAC, reviews & real-time revoke", level: 1 as const },
      { id: "outcomes", label: "Outcomes you can expect", level: 2 as const },
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
                <p
                  className="post-category text-sky-900/80 font-medium tracking-wide"
                  itemProp="articleSection"
                >
                  Identity &amp; Access Governance
                </p>

                <h1
                  className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-slate-900 mt-[10px] leading-snug"
                  itemProp="headline"
                >
                  Ending Over-Privilege: Autonomous Identity Governance that Shrinks Ransomware Risk
                </h1>

                <p className="post-subtitle text-lg md:text-xl 2xl:text-[22px] text-slate-700 mt-[10px] max-w-3xl mx-auto">
                  Over-privileged accounts and hidden entitlements enable lateral movement, privilege escalation,
                  and long-term persistence. Here’s how Welford IAG shuts those doors—automatically.
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

              {/* Hero Image (fixed aspect) */}
              <figure className="mb-[10px] w-full">
                <div
                  className="w-full rounded-xl overflow-hidden bg-gray-100 shadow"
                  style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}
                >
                  <img
                    src={postImage}
                    alt="Least privilege and identity governance reduce ransomware risk"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm md:text-[15px] text-gray-500 mt-[10px] text-center">
                  Image: Welford IAG — Identity-first automation to minimize blast radius
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
                    Over-privileged accounts are one of the most commonly exploited weaknesses in ransomware and
                    other cyberattacks. Hidden or unmanaged entitlements provide attackers with opportunities for
                    lateral movement, privilege escalation, and long-term persistence—often going undetected until
                    it’s too late.
                  </p>
                  <p>
                    Despite progress in Identity and Access Governance (IAG), many organizations still rely on manual
                    processes and disconnected tools, making it difficult to enforce least privilege and maintain
                    visibility across complex IT environments.
                  </p>
                </section>

                <section id="manual-gaps" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">The Limits of Manual IAG</h2>
                  <p>
                    Spreadsheets, tickets, and ad-hoc scripts don’t scale. Manual access reviews drift from policy,
                    orphaned entitlements accrete, and privilege changes are missed during joiner-mover-leaver events.
                    The result is standing privileges that quietly expand the blast radius available to an attacker.
                  </p>
                </section>

                <section id="welford-iag" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How Welford IAG Closes the Gap</h2>
                  <p>
                    Welford IAG fully abstracts manual access provisioning across the estate—from legacy applications
                    and cloud platforms to directory services, Linux environments, and databases. Access is{" "}
                    <strong>autonomously provisioned and de-provisioned</strong> through approval-driven workflows,
                    removing human bottlenecks and reducing the risk of misconfigurations.
                  </p>

                  <div className="mt-5 rounded-xl bg-sky-50/70 border border-sky-100 p-4 md:p-5 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 shrink-0 text-sky-700 mt-1" />
                    <div className="text-[17.5px] md:text-[18.5px] leading-8">
                      <strong>Autonomous fulfilment:</strong> Integrates with hosts to grant the right access at the
                      right time—and revoke it everywhere it was granted, on schedule or on signal.
                    </div>
                  </div>
                </section>

                <section id="jit-zero-trust" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">JIT + Zero Trust by Default</h2>
                  <p>
                    By enforcing <strong>Just-In-Time (JIT) Access</strong> across the board and applying{" "}
                    <strong>Zero Trust</strong> principles, Welford IAG ensures access is intentional, tightly
                    controlled, and time-bound. Each grant is continuously verified and mapped to a clear business
                    reason—then automatically expires.
                  </p>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li><strong>No standing privilege:</strong> grants have explicit start and end.</li>
                    <li><strong>Risk-aware approvals:</strong> policies and context drive who can approve what.</li>
                    <li><strong>End-to-end auditability:</strong> every decision and change is captured.</li>
                  </ul>
                </section>

                <section id="rbac-reviews" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">RBAC, Reviews & Real-Time Revoke</h2>
                  <p>
                    With <strong>role-based access control (RBAC)</strong>, automated entitlement reviews, and{" "}
                    <strong>real-time de-provisioning</strong>, teams maintain least privilege continuously—not just
                    during quarterly audits. Drift is detected early and remediated automatically.
                  </p>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li>Role catalogs align access with job functions and duties segregation.</li>
                    <li>Scheduled certifications surface exceptions and certify what should remain.</li>
                    <li>Immediate revoke across systems compresses incident response time.</li>
                  </ul>
                </section>

                <section id="outcomes" className="scroll-mt-28">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Outcomes You Can Expect</h3>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li>Reduced attack surface and minimized lateral movement.</li>
                    <li>Smaller blast radius via short-lived, purpose-bound privileges.</li>
                    <li>Confidence against ransomware through deterministic de-provisioning.</li>
                    <li>Lower operational load—no ticket chasing, fewer manual errors.</li>
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

export default OverPrivilegedAccounts;
