// /components/blogs/FromPerimeterToIdentity.tsx
// Centered layout + integrated right-rail ToC (same look/feel as your ransomware post)
// Depends on: /components/tableofcontent.tsx (react-scrollspy, clsx)
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/peri.png";
import "@/styles/post.css";

const FromPerimeterToIdentity = () => {
  const brand = "#032955";

  // Reading progress bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("post-body");
      if (!el) return;
      const total = el.scrollHeight - window.innerHeight;
      const current = window.scrollY - el.offsetTop + 80;
      const pct = Math.max(0, Math.min(100, (current / total) * 100));
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Table of Contents items
  const tocItems = useMemo(
    () => [
      { id: "intro", label: "From perimeter to identity", level: 1 as const },
      { id: "shift", label: "What changed in security", level: 1 as const },
      { id: "risk-governance", label: "Access as risk to govern", level: 1 as const },
      { id: "when-missing", label: "When governance is missing", level: 1 as const },
      { id: "least-privilege", label: "Making least privilege a habit", level: 1 as const },
      { id: "identity-first", label: "The identity-first future", level: 1 as const },
      { id: "key-benefits", label: "Key benefits of IAG", level: 2 as const },
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

      {/* Centered layout wrapper */}
      <div className="relative flex justify-center w-full">
        {/* Blog Article (centered) */}
        <article
          className="py-16 md:py-24 bg-white post w-[85%] 2xl:w-[88%] max-w-[1300px]"
          itemScope
          itemType="https://schema.org/BlogPosting"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="post-container max-w-[1150px] mx-auto">
            {/* Header */}
            <header className="mb-12 text-center">
              <p className="post-category text-sky-900/80 font-medium tracking-wide" itemProp="articleSection">
                Identity &amp; Access Governance
              </p>

              <h1
                className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-slate-900 mt-2 leading-snug"
                itemProp="headline"
              >
                From Perimeter to Identity: Why Cyber Security’s Centre of Gravity is Shifting to IAG
              </h1>

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
                  <time dateTime="2025-10-01" itemProp="datePublished">
                    October 2025
                  </time>
                </div>
                <span>~7 min read</span>
              </div>
            </header>

            {/* Hero */}
            <figure className="mb-12 w-full">
              <div
                className="w-full rounded-xl overflow-hidden bg-gray-100"
                style={{ aspectRatio: "16 / 9", maxHeight: "500px" }}
              >
                <img
                  src={postImage}
                  alt="From Perimeter to Identity"
                  loading="lazy"
                  itemProp="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm md:text-[15px] text-gray-500 mt-3 text-center">
                Image: Welford Systems — Identity Governance for a Zero Trust World
              </figcaption>
            </figure>

            {/* Article Body */}
            <div
              id="post-body"
              itemProp="articleBody"
              className="text-[18.5px] md:text-[19.5px] 2xl:text-[21px] leading-8 md:leading-9 text-slate-800 space-y-10"
            >
              <section id="intro" className="scroll-mt-28">
                <p>
                  For years, cyber security was a boundary problem — build a strong perimeter, harden the
                  walls, and keep attackers out. That worked when people, devices, and applications lived
                  inside the same corporate network. Today the landscape is distributed: users work from anywhere,
                  SaaS and APIs dominate, and workloads span multi-cloud.
                </p>
              </section>

              <section id="shift" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  The Shift in Cyber Security’s Centre of Gravity
                </h2>
                <p>Three powerful forces have reshaped the cyber security paradigm:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>
                    The <strong>perimeter has dissolved</strong> — cloud, SaaS, and partners extend far beyond firewalls.
                  </li>
                  <li>
                    Attackers now <strong>“log in”</strong> more often than they “break in.”
                  </li>
                  <li>
                    <strong>Permissions sprawl</strong> grows faster than manual controls can contain.
                  </li>
                </ul>
                <p className="mt-3">
                  As a result, security’s centre of gravity moved from defending the edge to governing{" "}
                  <em>who</em> has access and <em>what</em> they can do. That’s the essence of{" "}
                  <strong>Identity &amp; Access Governance (IAG)</strong>.
                </p>
                <blockquote className="border-l-4 border-sky-600/50 pl-4 italic text-sky-900 mt-5 font-medium">
                  “Identity is the new perimeter. Governance is the new defense.”
                </blockquote>
              </section>

              <section id="risk-governance" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  From Access Control to Risk Governance
                </h2>
                <p>
                  IAG treats access as a <em>risk to be governed</em>, not just a permission to be granted.
                  Beyond provisioning or authentication, governing identities effectively helps organisations:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>Reduce the blast radius of potential breaches.</li>
                  <li>Minimise dwell time and privilege misuse.</li>
                  <li>Generate continuous, audit-ready evidence.</li>
                </ul>
                <p className="mt-3">
                  Identity governance ensures the <strong>right people have the right access for the right reason</strong> — and that this
                  remains true over time.
                </p>
              </section>

              <section id="when-missing" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  When Governance Is Missing
                </h2>
                <p>Without structure, predictable gaps emerge:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li><strong>New starters</strong> wait too long for access, encouraging workarounds.</li>
                  <li><strong>Movers</strong> retain old permissions they no longer need.</li>
                  <li><strong>Leavers</strong> keep dormant accounts that should be revoked.</li>
                  <li><strong>Service accounts</strong> multiply without owners, tracking, or expiry.</li>
                </ul>
                <p className="mt-3">
                  These gaps increase risk. Over-privileged accounts enlarge the ransomware blast radius, and
                  orphaned credentials create stealthy entry points for exfiltration.
                </p>
              </section>

              <section id="least-privilege" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Making Least Privilege a Habit
                </h2>
                <p>The goal isn’t just access control — it’s sustainable <strong>risk reduction</strong>. To achieve that:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>Make <strong>least privilege</strong> the default access model.</li>
                  <li>Adopt <strong>just-in-time administration</strong> instead of standing privileges.</li>
                  <li>Continuously reconcile live access against policy to detect drift fast.</li>
                </ul>
                <p className="mt-3">These practices shrink your attack surface and contain damage when a breach occurs.</p>
              </section>

              <section id="identity-first" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  The Identity-First Future
                </h2>
                <p>
                  Perimeter firewalls still matter, but the greatest ROI comes from governing{" "}
                  <strong>who can do what</strong>. Welford IAG embodies this identity-first approach —
                  unifying access across hybrid ecosystems, automating lifecycle changes, and providing verifiable compliance on demand.
                </p>
              </section>

              <section id="key-benefits" className="scroll-mt-28">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Key Benefits of the IAG Model</h3>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>Unified identity visibility across cloud and on-premises environments.</li>
                  <li>Automated provisioning, certification, and de-provisioning.</li>
                  <li>Continuous evidence generation for compliance audits.</li>
                  <li>Improved accountability and reduced insider threats.</li>
                </ul>
                <p className="italic text-gray-600 mt-6">
                  — Welford Systems, advancing Identity Governance for a Zero Trust world.
                </p>
              </section>

              {/* Footer Navigation */}
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

        {/* Right rail ToC (OUTSIDE article, integrated with subtle separator) */}
        <aside className="hidden xl:block fixed right-6 2xl:right-12 top-28 w-[340px] 2xl:w-[380px] z-30">
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-slate-200/80" />
          <TableOfContent title="On this page" items={tocItems} offset={-120} />
        </aside>
      </div>
    </Layout>
  );
};

export default FromPerimeterToIdentity;
