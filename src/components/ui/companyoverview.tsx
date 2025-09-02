import * as React from "react";
import welfordw from "/src/assets/welfordw33.webp";

export interface CompanyOverviewCenteredProps {
  title?: string;
  highlight?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  id?: string;
  brandColor?: string;
  accent?: "gradient" | "solid" | "subtle";
  className?: string;
}

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

const CompanyOverviewCentered: React.FC<CompanyOverviewCenteredProps> = ({
  title = "All identities. One converged,",
  highlight = "AI-powered platform",
  description = "A clear view of access governance—at a glance.",
  imageSrc = welfordw,
  imageAlt = "Welford IAG platform overview",
  id,
  brandColor = "#032955",
  accent = "gradient",
  className = "",
}) => {
  type CSSVars = React.CSSProperties & { ["--brand"]?: string };
  const vars: CSSVars = { "--brand": brandColor };

  return (
    <section
      id={id}
      className={cn("relative isolate py-10 sm:py-12", className)}
      style={vars}
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {accent !== "subtle" && (
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-40 blur-2xl opacity-90",
              accent === "gradient"
                ? "bg-gradient-to-b from-[var(--brand)]/20 via-[var(--brand)]/10 to-transparent"
                : "bg-[var(--brand)]/8"
            )}
          />
        )}
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
          {title}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${brandColor}, ${brandColor}cc)`,
            }}
          >
            {highlight}
          </span>
          .
        </h2>

        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}

        {/* Image centered — width 80%, height auto, no card */}
        <div className="mt-6 flex justify-center">
          <figure className="relative w-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="block w-[80%] h-auto object-contain select-none mx-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewCentered;