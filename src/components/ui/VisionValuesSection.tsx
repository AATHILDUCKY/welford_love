// src/components/sections/VisionValuesSection.tsx
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Lock, Sparkles, Scale, Globe2 } from "lucide-react";

type IconType = React.ComponentType<{ className?: string }>;

export interface ValueItem {
  icon: IconType;
  title: string;
  description: string;
}

interface VisionValuesSectionProps {
  id?: string;
  className?: string;
  brandColor?: string; // default #032955
  kicker?: string;     // “Our Vision & Values”
  title?: string;      // “At Welford Systems, we believe trust is earned…”
  intro?: string;      // “We build technology that transforms governance…”
  values?: ValueItem[]; // default 4 values
  globalNoteTitle?: string;
  globalNoteText?: string;
  imageSrc?: string;   // optional override image
  imageAlt?: string;   // alt for accessibility
}

const DEFAULT_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
  <defs>
    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#032955"/>
      <stop offset="100%" stop-color="#1f6feb"/>
    </linearGradient>
    <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="640" height="480" rx="24" fill="url(#g1)"/>
  <g opacity="0.18">
    <circle cx="520" cy="100" r="80" fill="#ffffff"/>
    <circle cx="120" cy="360" r="100" fill="#ffffff"/>
  </g>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.75" stroke-width="2">
    <rect x="120" y="110" width="220" height="150" rx="14"/>
    <path d="M180 110v-16c0-22 18-40 40-40h0c22 0 40 18 40 40v16"/>
    <path d="M210 170v52m-26-26h52" stroke-linecap="round"/>
  </g>
  <g transform="translate(360,220)">
    <circle r="80" fill="url(#g2)"/>
    <circle r="62" fill="none" stroke="#fff" stroke-opacity="0.7" stroke-width="2"/>
    <path d="M-6 -6 L0 -30 L6 -6 L30 0 L6 6 L0 30 L-6 6 L-30 0 Z" fill="#fff" opacity="0.9"/>
  </g>
</svg>
`);

const VisionValuesSection: React.FC<VisionValuesSectionProps> = ({
  id,
  className = "",
  brandColor = "#032955",
  kicker = "Our Vision & Values",
  title = "At Welford Systems, we believe trust is earned through transparency and accountability.",
  intro = "We build technology that transforms governance into growth.",
  values = [
    { icon: ShieldCheck, title: "Trust", description: "Security by design, integrity by default." },
    { icon: Lock,        title: "Security", description: "ISO 27001-aligned architecture across every layer." },
    { icon: Sparkles,    title: "Innovation", description: "Intelligent automation for identity-first enterprises." },
    { icon: Scale,       title: "Governance", description: "Compliance that accelerates business — not burdens it." },
  ],
  globalNoteTitle = "Remote by design. Global in mindset.",
  globalNoteText = "We connect cybersecurity expertise from London to every region we serve.",
  imageSrc,
  imageAlt = "Identity & access governance illustration",
}) => {
  // Derived styles from brand color
  const ringColor = "rgba(3,41,85,0.12)";
  const dotColor = "rgba(3,41,85,0.07)";
  const softShadow = "0 18px 40px rgba(3,41,85,0.10)";
  const hairline = "rgba(3,41,85,0.10)";
  const brandAsRgb = React.useMemo(() => {
    // naive hex -> rgb
    const hex = brandColor.replace("#", "");
    const bigint = parseInt(hex.length === 3 ? hex.split("").map(x=>x+x).join("") : hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }, [brandColor]);

  const resolvedImage = imageSrc ?? `https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg`;

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 sm:py-20 ${className}`}
      aria-labelledby="vision-values-heading"
    >
      {/* Ambient gradient fogs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-[110px] opacity-20"
             style={{ background: `radial-gradient(40% 40% at 50% 50%, rgba(${brandAsRgb},0.28), transparent)` }} />
        <div className="absolute bottom-[-140px] right-[-120px] w-[520px] h-[520px] rounded-full blur-[120px] opacity-25"
             style={{ background: `radial-gradient(40% 40% at 50% 50%, rgba(${brandAsRgb},0.22), transparent)` }} />

        {/* Subtle dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          role="img"
        >
          <defs>
            <pattern id="vv-dot-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill={dotColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vv-dot-grid)" />
        </svg>

        {/* Top & bottom veils */}
        <div className="absolute inset-x-0 top-0 h-14 sm:h-16 bg-white/70 backdrop-blur-[2px]" />
        <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-white/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header (centered) */}
        <div className="text-center max-w-4xl mx-auto">
          <span
            className="inline-flex items-center justify-center rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide bg-white/80 shadow-sm"
            style={{ border: `1px solid ${hairline}`, color: brandColor }}
          >
            {kicker}
          </span>

          <h2
            id="vision-values-heading"
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug"
            style={{ color: brandColor }}
          >
            {title}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {intro}
          </p>

          <div
            className="mx-auto mt-5 rounded-full"
            style={{ width: 90, height: 3.5, background: `linear-gradient(90deg, ${brandColor}, rgba(${brandAsRgb},0.4))` }}
            aria-hidden="true"
          />
        </div>

        {/* Image + Values */}
        <div className="mt-10 sm:mt-12 grid gap-8 lg:gap-12 lg:grid-cols-2 items-stretch">
          {/* Illustration / Image */}
          <figure className="order-2 lg:order-2 relative">
            <div
              className="relative w-full overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md"
              style={{ border: `1px solid ${hairline}`, boxShadow: softShadow }}
            >
              <img
                src={resolvedImage}
                alt={imageAlt}
                className="block w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* soft overlays */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/50 to-transparent" />
            </div>

            <figcaption className="mt-3 text-center text-xs text-slate-500 hidden sm:block">
              Securing every identity. Governing every access.
            </figcaption>
          </figure>

          {/* Values Grid */}
          <div className="order-1 lg:order-1">
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <Card
                    key={`${v.title}-${idx}`}
                    className="group relative bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(3,41,85,0.18)] focus-within:shadow-[0_20px_60px_rgba(3,41,85,0.18)]"
                    style={{ border: `1px solid ${hairline}` }}
                    aria-label={`${v.title} value`}
                  >
                    {/* halo ring on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: `0 0 0 8px rgba(${brandAsRgb},0.06) inset`,
                      }}
                    />
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex items-start gap-4">
                        <div
                          className="relative flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                          style={{
                            background: `linear-gradient(180deg, rgba(${brandAsRgb},0.08), rgba(${brandAsRgb},0.02))`,
                            border: `1px solid ${hairline}`,
                          }}
                          aria-hidden="true"
                        >
                          {/* subtle radial glow behind icon */}
                          <span
                            className="absolute inset-0 rounded-2xl"
                            style={{
                              background: `radial-gradient(60% 60% at 50% 40%, rgba(${brandAsRgb},0.18), transparent)`,
                              opacity: 0.8,
                            }}
                          />
                          <Icon className="h-6 w-6 relative" style={{ color: brandColor }} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold" style={{ color: brandColor }}>
                            {v.title}
                          </h3>
                          <p className="mt-1.5 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                            {v.description}
                          </p>
                        </div>
                      </div>

                      {/* subtle divider (kept for rhythm, lighter tone) */}
                      <div
                        className="mt-5 h-px w-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${hairline}, transparent)` }}
                        aria-hidden="true"
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Global note callout */}
            <div className="mt-6 sm:mt-8">
              <Card
                className="bg-white/75 dark:bg-white/10 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(3,41,85,0.18)]"
                style={{ border: `1px solid ${hairline}` }}
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="relative flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                      style={{
                        background: `linear-gradient(180deg, rgba(${brandAsRgb},0.08), rgba(${brandAsRgb},0.02))`,
                        border: `1px solid ${hairline}`,
                      }}
                      aria-hidden="true"
                    >
                      <span
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `radial-gradient(60% 60% at 50% 40%, rgba(${brandAsRgb},0.18), transparent)`,
                          opacity: 0.8,
                        }}
                      />
                      <Globe2 className="h-6 w-6 relative" style={{ color: brandColor }} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold" style={{ color: brandColor }}>
                        {globalNoteTitle}
                      </h3>
                      <p className="mt-1.5 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                        {globalNoteText}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionValuesSection;
