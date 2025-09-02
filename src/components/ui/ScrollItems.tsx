import { useEffect, useRef, useState } from "react";

// Import images from the /src/assets folder
import azure from "/src/assets/azure.png";
import aws from "/src/assets/aws.png";
import gcp from "/src/assets/gcp.png";
import azureEntraId from "/src/assets/azure-entra-id.png";
import ldap from "/src/assets/ldap.webp";
import activeDirectory from "/src/assets/active-directory.png";
import oracle from "/src/assets/oracle.png";
import sqlServer from "/src/assets/sql-server.png";
import postgresql from "/src/assets/postgres.png";
import mysql from "/src/assets/mysql.png";
import oracleErp from "/src/assets/oracle-erp.png";
import salesforce from "/src/assets/salesforce.png";

const PRIMARY = "#032955";          // brand color
const BG_SOFT = "#f8fafc";          // same soft background used previously
const DOT = "#e6eef7";              // subtle PRIMARY-tinted dots for the grid
const RING = "rgba(3,41,85,0.12)";  // PRIMARY at low alpha for rings/shadows

const integrations = [
  { name: "Azure", category: "Cloud Platform", image: azure },
  { name: "AWS", category: "Cloud Platform", image: aws },
  { name: "GCP", category: "Cloud Platform", image: gcp },
  { name: "Azure Entra ID", category: "Identity Provider", image: azureEntraId },
  { name: "LDAP", category: "Identity Provider", image: ldap },
  { name: "Active Directory", category: "Identity Provider", image: activeDirectory },
  { name: "Oracle", category: "Database", image: oracle },
  { name: "SQL Server", category: "Database", image: sqlServer },
  { name: "PostgreSQL", category: "Database", image: postgresql },
  { name: "MySQL", category: "Database", image: mysql },
  { name: "Oracle ERP", category: "Enterprise App", image: oracleErp },
  { name: "Salesforce", category: "Enterprise App", image: salesforce },
];

const ScrollItems = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Respect prefers-reduced-motion (falls back to static grid)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Continuous marquee loop — does NOT pause on hover
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || reducedMotion || !isPlaying) return;

    let last = 0;
    const pxPerFrame = 0.72; // tuned: smooth & readable
    const tick = (ts: number) => {
      if (!el) return;
      const dt = last ? ts - last : 16;
      last = ts;

      const half = el.scrollWidth / 2;
      el.scrollLeft += (pxPerFrame * dt) / 16;
      if (el.scrollLeft >= half) el.scrollLeft -= half; // seamless reset

      rafRef.current = requestAnimationFrame(tick);
    };

    // Drive animation only when visible
    ioRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isPlaying && !reducedMotion) {
          if (!rafRef.current) {
            last = 0;
            rafRef.current = requestAnimationFrame(tick);
          }
        } else if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      },
      { threshold: 0.15 }
    );

    ioRef.current.observe(el);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      ioRef.current?.disconnect();
    };
  }, [reducedMotion, isPlaying]);

  // Manual scroll controls
  const scrollByAmount = (amount: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <section
      className="relative py-16 sm:py-20 overflow-hidden"
      aria-labelledby="integrations-heading"
      style={{ backgroundColor: BG_SOFT }}
    >
      {/* Background: SAME STYLE as previous section (no gradients), with PRIMARY‑tinted dot grid */}
      <div aria-hidden className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          role="img"
          style={{ opacity: 0.6 }}
        >
          <defs>
            <pattern id="dots-integration" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill={DOT} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-integration)" />
        </svg>
        {/* Solid bars to frame edges (no gradient) */}
        <div className="absolute inset-x-0 top-0 h-12 sm:h-16" style={{ backgroundColor: BG_SOFT }} />
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16" style={{ backgroundColor: BG_SOFT }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white shadow-sm mb-3 sm:mb-4"
            style={{ border: `1px solid ${RING}` }}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide" style={{ color: PRIMARY }}>
              Integrations
            </span>
          </div>
          <h2
            id="integrations-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
            style={{ color: PRIMARY }}
          >
            Integration Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 text-sm sm:text-base">
            Seamlessly integrate with your existing technology stack
          </p>

          {/* Underline accent */}
          <div className="mt-4 mx-auto" style={{ width: 72, height: 3, backgroundColor: PRIMARY, borderRadius: 9999 }} />
        </div>

        <div className="relative">
          {/* Left & Right blur + fade-forward masks in brand theme */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: "68px",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              backgroundColor: "rgba(248,250,252,0.9)", // matches BG_SOFT
              WebkitMaskImage: "linear-gradient(to right, black, transparent)",
              maskImage: "linear-gradient(to right, black, transparent)",
              borderRight: `1px solid ${RING}`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{
              width: "68px",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              backgroundColor: "rgba(248,250,252,0.9)",
              WebkitMaskImage: "linear-gradient(to left, black, transparent)",
              maskImage: "linear-gradient(to left, black, transparent)",
              borderLeft: `1px solid ${RING}`,
            }}
          />

          {/* Marquee container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden no-scrollbar outline-none"
            role="region"
            aria-label="Partner and platform logos scrolling list"
            tabIndex={0}
            style={{
              scrollBehavior: reducedMotion ? "smooth" : "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Duplicate list for seamless loop */}
            <div className="flex gap-3 sm:gap-4 px-1 sm:px-2" style={{ minWidth: "max-content" }}>
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="min-w-[150px] sm:min-w-[180px] lg:min-w-[210px] flex flex-col items-center"
                >
                  <div
                    className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-transform hover:scale-[1.03] active:scale-[0.99]"
                    style={{
                      border: `1px solid ${RING}`,
                      boxShadow: "0 6px 18px rgba(3,41,85,0.08)",
                    }}
                    title={integration.name}
                  >
                    <img
                      src={integration.image}
                      alt={`${integration.name} logo`}
                      className="mx-auto w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-900 line-clamp-1">{integration.name}</p>
                      <p className="text-xs" style={{ color: "rgba(3,41,85,0.7)" }}>
                        {integration.category}
                      </p>
                    </div>

                    {/* Brand accent bar inside card */}
                    <div className="mt-3 h-[2px] w-10 mx-auto rounded-full" style={{ backgroundColor: PRIMARY }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls — consistent with brand color; autoplay never stops on hover */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => scrollByAmount(-320)}
              className="px-3 py-2 text-sm rounded-lg bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2"
              style={{
                color: PRIMARY,
                border: `1px solid ${RING}`,
                boxShadow: "0 3px 10px rgba(3,41,85,0.06)",
              }}
              aria-label="Scroll logos left"
            >
              ←
            </button>

            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="px-3 py-2 text-sm rounded-lg bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2"
              style={{
                color: PRIMARY,
                border: `1px solid ${RING}`,
                boxShadow: "0 3px 10px rgba(3,41,85,0.06)",
              }}
              aria-pressed={!isPlaying ? true : false}
              aria-label="Toggle auto scroll"
              title="Toggle auto scroll"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            <button
              onClick={() => scrollByAmount(320)}
              className="px-3 py-2 text-sm rounded-lg bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2"
              style={{
                color: PRIMARY,
                border: `1px solid ${RING}`,
                boxShadow: "0 3px 10px rgba(3,41,85,0.06)",
              }}
              aria-label="Scroll logos right"
            >
              →
            </button>
          </div>
        </div>

        {/* Static responsive grid when prefers-reduced-motion is enabled */}
        {reducedMotion && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {integrations.map((integration) => (
              <div
                key={`static-${integration.name}`}
                className="bg-white rounded-xl p-4 sm:p-5"
                style={{
                  border: `1px solid ${RING}`,
                  boxShadow: "0 6px 18px rgba(3,41,85,0.08)",
                }}
                title={integration.name}
              >
                <img
                  src={integration.image}
                  alt={`${integration.name} logo`}
                  className="mx-auto w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-center text-sm font-semibold text-slate-900">{integration.name}</p>
                <p className="text-center text-xs" style={{ color: "rgba(3,41,85,0.7)" }}>
                  {integration.category}
                </p>
                <div className="mt-3 h-[2px] w-10 mx-auto rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollItems;
