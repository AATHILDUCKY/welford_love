// /components/blogs/RevolutionzingLinuxAccess.tsx
// Centered blog layout + right-rail Table of Contents (outside article)
// npm i react-scrollspy clsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/layout";
import TableOfContent from "@/components/tableofcontent";
import postImage from "@/assets/linux111.png"; // replace with your asset
import "@/styles/post.css";

const RevolutionzingLinuxAccess = () => {
  const brand = "#032955";

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

  const tocItems = useMemo(
    () => [
      { id: "intro", label: "Introduction", level: 1 as const },
      { id: "how-it-works", label: "How It Works", level: 1 as const },
      { id: "why-this-matters", label: "Why This Matters", level: 1 as const },
      { id: "conclusion", label: "Conclusion", level: 1 as const },
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

      <div className="relative flex justify-center w-full">
        {/* Article */}
        <article
          className="py-16 md:py-24 bg-white post w-[85%] 2xl:w-[88%] max-w-[1300px]"
          itemScope
          itemType="https://schema.org/BlogPosting"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="post-container max-w-[1150px] mx-auto">
            {/* Header */}
            <header className="mb-12 text-center">
              <p className="post-category" itemProp="articleSection">
                Welford IAG
              </p>

              <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-slate-900 mt-2 leading-snug" itemProp="headline">
                Revolutionzing Linux Access with Welford IAG
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
                  <time dateTime="2025-10-09" itemProp="datePublished">
                    October 2025
                  </time>
                </div>
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
                  alt="Welford IAG Linux access"
                  loading="lazy"
                  itemProp="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>

            {/* Body */}
            <div
              id="post-body"
              itemProp="articleBody"
              className="text-[18.5px] md:text-[19.5px] 2xl:text-[21px] leading-8 md:leading-9 text-slate-800 space-y-10"
            >
              <section id="intro" className="scroll-mt-28">
                <p>
                  Traditional Linux server access relies on static credentials, usernames, passwords, and predefined access rights, creating security risks and administrative overhead. Welford IAG eliminates standing access by enforcing a Zero Trust, just-in-time access model.
                </p>
                <p>
                  With Welford IAG, there's no need to manually create usernames, passwords, or access rights on Linux servers. Instead, access is requested, approved, and dynamically managed within Welford IAG.
                </p>
              </section>

              <section id="how-it-works" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How It Works</h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>A user requests access to a Linux server through Welford IAG.</li>
                  <li>Once approved, the authorized server appears in the Linux Access Page, but only for the duration of the approval.</li>
                  <li>The user simply presses ‘Connect’, and Welford IAG seamlessly establishes a secure session—no stored credentials, no lingering access.</li>
                </ul>
              </section>

              <section id="why-this-matters" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why This Matters?</h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 marker:text-slate-600">
                  <li>Eliminates standing access and clear text password, reducing security risks.</li>
                  <li>Enforces just-in-time access aligned with Zero Trust principles.</li>
                  <li>Minimizes administrative effort. No need to manage Linux credentials and individual access rights manually.</li>
                  <li>Provides real-time visibility into who has access and when.</li>
                </ul>
              </section>

              <section id="conclusion" className="scroll-mt-28">
                <p>
                  By removing standing access and providing on-demand, temporary access, Welford IAG transforms Linux server security, enforcing compliance while improving operational efficiency.
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

        {/* Right rail ToC (outside article) */}
        <aside className="hidden xl:block fixed right-6 2xl:right-12 top-28 w-[340px] 2xl:w-[380px] z-30">
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-slate-200/80" />
          <TableOfContent
            title="On this page"
            items={tocItems}
            offset={-120}
          />
        </aside>
      </div>
    </Layout>
  );
};

export default RevolutionzingLinuxAccess;
