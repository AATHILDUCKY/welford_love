// /components/blogs/EntitlementProvisioning.tsx
// Centered blog layout + right-rail Table of Contents (separate column, 10px gap)
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/cls.png"; // update to your actual asset name/path
import "@/styles/post.css";

const EntitlementProvisioning = () => {
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

  // Table of contents items
  const tocItems = useMemo(
    () => [
      { id: "intro", label: "Why entitlement provisioning matters", level: 1 as const },
      { id: "host-native", label: "Autonomous, host-native provisioning", level: 1 as const },
      { id: "jit-zero-trust", label: "JIT + Zero Trust by design", level: 1 as const },
      { id: "closing", label: "Closing thoughts", level: 2 as const },
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
                  Closing the Entitlement Provisioning Gap with Autonomous Governance
                </h1>

                <p className="post-subtitle text-lg md:text-xl 2xl:text-[22px] text-slate-700 mt-[10px] max-w-3xl mx-auto">
                  Least privilege at scale requires automation across legacy, cloud, directories,
                  Linux, and databases—without manual bottlenecks.
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

              {/* Hero Image */}
              <figure className="mb-[10px] w-full">
                <div
                  className="w-full rounded-xl overflow-hidden bg-gray-100 shadow"
                  style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}
                >
                  <img
                    src={postImage}
                    alt="Autonomous entitlement provisioning across hybrid estates"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-sm md:text-[15px] text-gray-500 mt-[10px] text-center">
                  Image: Welford IAG — Policy-driven provisioning and deterministic de-provisioning
                </figcaption>
              </figure>

              {/* Body */}
              <div
                id="post-body"
                itemProp="articleBody"
                className="text-[18.5px] md:text-[19.5px] 2xl:text-[21px] leading-8 md:leading-9 text-slate-800 space-y-[10px]"
              >
                {/* Intro */}
                <section id="intro" className="scroll-mt-28">
                  <p>
                    Entitlement provisioning remains a critical gap in Identity and Access Governance (IAG),
                    even as the ecosystem matures. Ensuring users have the right access to the right resources
                    at the right time continues to challenge many organizations. Manual processes and limited
                    integration with legacy systems often result in over-privileged accounts, compliance risks,
                    and security vulnerabilities.
                  </p>
                </section>

                {/* What Welford IAG does */}
                <section id="host-native" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Autonomous, Host-Native Provisioning
                  </h2>
                  <p>
                    Welford IAG addresses this challenge by fully abstracting manual access provisioning across
                    all host systems — including legacy applications, cloud platforms, directory services, Linux
                    operating systems, and databases. Access rights are automatically provisioned and
                    de-provisioned through policy-driven workflows, removing the need for system administrator
                    involvement between approval and entitlement enforcement.
                  </p>

                  <div className="mt-5 rounded-xl bg-sky-50/70 border border-sky-100 p-4 md:p-5 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 shrink-0 text-sky-700 mt-1" />
                    <div className="text-[17.5px] md:text-[18.5px] leading-8">
                      <strong>Deterministic fulfilment:</strong> Each approval maps to precise host changes,
                      then expires on schedule or signal—eliminating standing privileges and missed revokes.
                    </div>
                  </div>
                </section>

                {/* Principles */}
                <section id="jit-zero-trust" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    JIT + Zero Trust by Design
                  </h2>
                  <p>
                    Built on the principles of Just-In-Time Access and Zero Trust, Welford IAG ensures access is
                    granted only when required, for the shortest necessary duration, and with continuous
                    verification. With role-based access control (RBAC), automated de-provisioning, and streamlined
                    access reviews, it helps organizations stay secure, compliant, and operationally efficient.
                  </p>
                  <ul className="list-disc pl-6 mt-[10px] space-y-[10px] marker:text-slate-600">
                    <li><strong>No standing privilege:</strong> short-lived, purpose-bound grants.</li>
                    <li><strong>Policy-driven workflows:</strong> risk-aware approvals with full audit trail.</li>
                    <li><strong>Automatic revoke:</strong> entitlement removal at source, on time.</li>
                  </ul>
                </section>

                {/* Close */}
                <section id="closing" className="scroll-mt-28">
                  <p className="italic text-gray-600">
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
            <TableOfContent title="On this page" items={tocItems} offset={-112} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default EntitlementProvisioning;
