import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

type IconType = React.ComponentType<{ className?: string }>;

export interface BenefitItem {
  icon: IconType;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  title?: string;               // Heading text
  subtitle?: string;            // Optional muted subtitle
  benefits: BenefitItem[];      // Your array from index.tsx
  className?: string;           // Extra classes for the section
  brandColor?: string;          // Brand hex (defaults to #032955)
  id?: string;                  // Optional anchor
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({
  title = "Why Choose Welford IAG?",
  subtitle = "A concise set of outcomes that make the value obvious at a glance.",
  benefits,
  className = "",
  brandColor = "#032955",
  id,
}) => {
  const dotColor = "rgba(3,41,85,0.08)"; // subtle brand‑tinted dot grid
  const ringColor = "rgba(3,41,85,0.12)";
  const shadowSoft = "0 10px 30px rgba(3,41,85,0.07)";

  return (
    <section id={id} className={`relative py-16 sm:py-20 overflow-hidden ${className}`}>
      {/* Background: clean dotted grid (non-gradient), subtle brand tint */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          role="img"
        >
          <defs>
            <pattern id="benefits-dot-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill={dotColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#benefits-dot-grid)" />
        </svg>
        {/* top/bottom soft mask bars for tidier edges */}
        <div className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-white/70 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-white/70 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Heading block */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm"
            style={{ border: `1px solid ${ringColor}` }}
          >
            <span
              className="text-xs sm:text-sm font-medium tracking-wide"
              style={{ color: brandColor }}
            >
              Key Benefits
            </span>
          </div>

          <h2
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
            style={{ color: brandColor }}
          >
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}

          {/* Accent underline */}
          <div
            className="mx-auto mt-5 rounded-full"
            style={{ width: 76, height: 3, backgroundColor: brandColor }}
            aria-hidden="true"
          />
        </div>

        {/* Responsive, readable grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={`${benefit.title}-${index}`}
                aria-label={`${benefit.title} benefit`}
                className="
                  group relative bg-white overflow-hidden
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-xl focus-within:shadow-xl
                  rounded-2xl
                "
                style={{ boxShadow: shadowSoft, borderColor: ringColor, borderWidth: 1 }}
              >
                {/* Decorative top bar (brand) */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: brandColor }}
                />

                <CardContent className="p-6 sm:p-7">
                  {/* Icon + index pill row for quick scanning */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon bubble */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        color: brandColor,
                        border: `1px solid ${ringColor}`,
                        background: "rgba(3,41,85,0.05)",
                      }}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    {/* Index chip (helps orientation on mobile) */}
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{
                        color: brandColor,
                        background: "rgba(3,41,85,0.06)",
                        border: `1px solid ${ringColor}`,
                      }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {benefit.title}
                  </h3>

                  {/* Description (kept readable, not too long on small screens) */}
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>

                  {/* Actionless footer row with subtle brand accent for visual closure */}
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className="inline-block h-1 rounded-full"
                      style={{ width: 44, backgroundColor: brandColor }}
                      aria-hidden="true"
                    />
                    {/* hover hint caret */}
                    <span
                      className="text-xs text-slate-500 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      aria-hidden="true"
                    >
                      Learn more
                      <span className="ml-1">→</span>
                    </span>
                  </div>
                </CardContent>

                {/* Focus/hover outline glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] ring-0 transition-all duration-300 group-hover:ring-2"
                  style={{ boxShadow: `inset 0 0 0 0 ${brandColor}` }}
                />
              </Card>
            );
          })}
        </div>

        {/* Small helper tip for UX (optional, can remove) */}
        <p className="sr-only">
          Hover or focus each card to highlight and quickly scan the benefit.
        </p>
      </div>
    </section>
  );
};

export default BenefitsGrid;
