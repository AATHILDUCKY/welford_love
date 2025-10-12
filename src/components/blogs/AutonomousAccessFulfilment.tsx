// /components/blogs/AutonomousAccessFulfilment.tsx
// Centered blog layout + right-rail Table of Contents (separate column, 10px gap)
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/auto3.png";
import "@/styles/post.css";

const AutonomousAccessFulfilment = () => {
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

  // Table of contents
  const tocItems = useMemo(
    () => [
      { id: "intro", label: "Why fulfilment must be autonomous", level: 1 as const },
      { id: "manual-gap", label: "The manual/semi-automated gap", level: 1 as const },
      { id: "welford-different", label: "How Welford IAG is different", level: 1 as const },
      { id: "jit-enforcement", label: "End-to-end JIT enforcement", level: 1 as const },
      { id: "benefits", label: "What this delivers", level: 1 as const },
      { id: "critical-defence", label: "Why it’s a critical defence", level: 1 as const },
      { id: "closing", label: "Precision that sets IAG apart", level: 2 as const },
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
            <div className="post-container mx-auto max-w-[1100px]">
              {/* Header */}
              <header className="mb-[10px] text-center">
                <p
                  className="post-category text-sky-900/80 font-medium tracking-wide"
                  itemProp="articleSection"
                >
                  Welford IAG
                </p>

                <h1
                  className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-slate-900 mt-[10px] leading-snug"
                  itemProp="headline"
                >
                  Autonomous Access Fulfilment: A Critical Defence Against Misuse & Misconfigurations
                </h1>

                <p className="post-subtitle text-lg md:text-xl 2xl:text-[22px] text-slate-700 mt-[10px] max-w-3xl mx-auto">
                  Cut tickets, scripts, and manual handoffs. Provision and deprovision directly and
                  securely—every time—with 100% JIT access.
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
                  <span>~6–7 min read</span>
                </div>
              </header>

              {/* Hero Image (locked aspect ratio so thumbnails never jump) */}
              <figure className="mb-[10px] w-full">
                <div
                  className="w-full rounded-xl overflow-hidden bg-gray-100"
                  style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}
                >
                  <img
                    src={postImage}
                    alt="Autonomous access fulfilment by Welford IAG"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm md:text-[15px] text-gray-500 mt-[10px] text-center">
                  Image: Welford IAG — Autonomous access orchestration across cloud, legacy, and OS.
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
                    In many Identity and Access Governance (IAG) solutions, access fulfilment remains a
                    manual or semi-automated process—dependent on tickets, scripts, or human intervention
                    to bridge the gap between approval and actual provisioning. That gap is where delays,
                    errors, and risk creep in.
                  </p>
                </section>

                <section id="manual-gap" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    The Manual/Semi-Automated Gap
                  </h2>
                  <p>
                    Every additional handoff introduces friction. Tickets pile up, scripts drift from
                    state, and privileged changes may be applied inconsistently. The result: slower
                    fulfilment, increased misconfigurations, and access that outlives its purpose.
                  </p>
                </section>

                <section id="welford-different" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    How Welford IAG Is Different
                  </h2>
                  <p>
                    Welford IAG delivers <strong>autonomous access fulfilment</strong>, removing the need
                    for manual workflows or sysadmin involvement. Whether it’s a legacy application, cloud
                    platform, database, Linux server, or directory service, access is provisioned and
                    deprovisioned <em>directly and securely</em> by the platform.
                  </p>

                  <div className="rounded-xl bg-sky-50/70 border border-sky-100 p-4 md:p-5 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 shrink-0 text-sky-700 mt-1" />
                    <div className="text-[17.5px] md:text-[18.5px] leading-8">
                      <strong>No tickets. No manual intervention. No missed deprovisioning.</strong>
                    </div>
                  </div>
                </section>

                <section id="jit-enforcement" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    End-to-End Just-in-Time (JIT) Enforcement
                  </h2>
                  <p>
                    This goes beyond basic automation—Welford IAG orchestrates access end-to-end to
                    enable <strong>100% JIT access</strong>. Entitlements are granted only for the
                    approved duration and are automatically revoked on expiry, role change, or exit.
                  </p>
                </section>

                <section id="benefits" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What This Delivers</h2>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li>Cuts fulfilment time from hours or days to seconds.</li>
                    <li>Minimises the risk of misconfigurations and access drift.</li>
                    <li>Ensures 100% JIT access with continuous verification.</li>
                    <li>Enhances security posture and audit readiness.</li>
                    <li>Frees IT/security teams to focus on strategic priorities.</li>
                  </ul>
                </section>

                <section id="critical-defence" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    A Critical Defence Against Misuse & Modern Threats
                  </h2>
                  <p>
                    Autonomous access fulfilment isn’t just convenient—it’s a control that prevents
                    misuse and misconfiguration. By automatically revoking access when a user changes
                    roles, leaves the organisation, or when an approval period expires, Welford IAG
                    closes one of the most common gaps in traditional access management.
                  </p>
                </section>

                <section id="closing" className="scroll-mt-28">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                    Precision That Sets IAG Apart
                  </h3>
                  <p>
                    The level of precision and control delivered by Welford IAG—direct orchestration,
                    time-bound access, and rigorous deprovisioning—defines the next generation of IAG.
                    It’s how organisations secure at scale without slowing down.
                  </p>

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

export default AutonomousAccessFulfilment;
