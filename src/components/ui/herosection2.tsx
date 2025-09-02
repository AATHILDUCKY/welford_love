// herosection2.tsx
import * as React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";

type CTA = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export interface HeroSection2Props {
  /** Small badge text above the headline */
  badge?: string;
  /** Main headline (required) */
  title: string;
  /** Subtitle copy */
  subtitle?: string;
  /** Bullet points under the copy */
  bullets?: string[];
  /** Primary CTA (solid white button) */
  primaryCta?: CTA;
  /** Optional secondary CTA (also solid white to keep theme consistent) */
  secondaryCta?: CTA;
  /** Right-side image (required) */
  image: {
    src: string;
    alt: string;
  };
  /** Small floating badge on the image corner */
  imageBadgeText?: string; // e.g., "Available 24/7"
  /** Optional id for in-page anchors */
  id?: string;
  /** Additional className for the outer section (layout only; colors are locked) */
  className?: string;
}

/**
 * THEME IS LOCKED:
 * - Background: #032955 (dark)
 * - Text inside hero: white / white variants
 * - CTAs: solid white with dark text (#032955) + hover bg white/90
 * You can change ONLY content via props.
 */
const HeroSection2: React.FC<HeroSection2Props> = ({
  badge = "We're here to help",
  title,
  subtitle = "Have questions? Need help? Our team is here to assist you.",
  bullets = [
    "Get answers from our experts",
    "Discuss your unique requirements",
    "Receive quick and personalized support",
  ],
  primaryCta,
  secondaryCta,
  image,
  imageBadgeText = "Available 24/7",
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: "#032955" }}
      aria-label="Hero"
    >
      {/* subtle decorative shapes (locked) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="max-w-2xl">
            {badge ? (
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                {badge}
              </span>
            ) : null}

            <h1 className="mt-4 text-balance text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white/80">{subtitle}</p>
            ) : null}

            {bullets?.length ? (
              <ul className="mt-6 space-y-3">
                {bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {/* CTAs — both are SAME solid style; optional secondary */}
            {(primaryCta || secondaryCta) ? (
              <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                {primaryCta ? (
                  <Button
                    className="h-11 rounded-xl px-5 font-medium transition-colors bg-white text-[#032955] hover:bg-white/90 shadow-md"
                    asChild
                  >
                    <a href={primaryCta.href} aria-label={primaryCta.label}>
                      {primaryCta.icon}
                      {primaryCta.label}
                    </a>
                  </Button>
                ) : null}

                {secondaryCta ? (
                  <Button
                    className="h-11 rounded-xl px-5 font-medium transition-colors bg-white text-[#032955] hover:bg-white/90 shadow-md"
                    asChild
                  >
                    <a href={secondaryCta.href} aria-label={secondaryCta.label}>
                      {secondaryCta.icon}
                      {secondaryCta.label}
                    </a>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-3 rounded-[2rem] border border-white/15" />
              <img
                src={image.src}
                alt={image.alt}
                className="relative z-10 w-full rounded-[2rem] border border-white/20 bg-white/20 shadow-xl shadow-black/20 object-cover"
                loading="eager"
              />
              {/* small floating badge */}
              {imageBadgeText ? (
                <div className="absolute -bottom-5 -left-5 z-20 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-[color:#032955]">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{imageBadgeText}</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
