// src/components/ui/companyoverview.tsx
import React from "react";
import { Shield, Cloud, UserCheck, Server } from "lucide-react";

/**
 * Brand palette tokens (kept from your original)
 */
const BRAND = {
  primary: "#032955",
  accent: "#1f6feb",
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privilege Exposure",
    text: "Standing access & privilege creep increase breach risks.",
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Manual Bottlenecks",
    text: "Manual provisioning creates delays & human error.",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Compliance Gaps",
    text: "Limited visibility complicates ISO 27001, SOC 2, GDPR readiness.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Scalability Limits",
    text: "Legacy tools can’t scale for multi-cloud, API-driven ecosystems.",
  },
];

const CompanyOverviewCentered: React.FC = () => {
  return (
    <section
      aria-labelledby="company-overview-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-transparent"
    >
      {/* Soft, subtle accent glows (kept very light for contrast & performance) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full blur-[100px] bg-[#1f6feb]/10 dark:bg-[#1f6feb]/15" />
        <div className="absolute -bottom-16 -right-10 h-[340px] w-[340px] rounded-full blur-[100px] bg-[#032955]/10 dark:bg-[#032955]/20" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="company-overview-heading"
            className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND.primary }}
          >
            Identity is the New Perimeter
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Modern enterprises operate across a maze of cloud, hybrid, and on-premises systems — yet
            identity governance has struggled to keep pace.
          </p>
        </header>

        {/* Feature Grid */}
        <ul
          role="list"
          className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
        >
          {FEATURES.map((f, i) => (
            <li key={i}>
              <FeatureCard icon={f.icon} title={f.title} text={f.text} />
            </li>
          ))}
        </ul>

        {/* Supporting statement */}
        <p className="mt-10 sm:mt-12 max-w-2xl mx-auto text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed text-center">
          In today’s threat landscape, access decisions aren’t just technical — they define trust,
          compliance, and resilience.
        </p>

        {/* Callout */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="inline-flex max-w-[44rem] rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur-md px-5 sm:px-6 py-4 shadow-sm">
            <p className="text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-relaxed">
              <strong style={{ color: BRAND.primary }}>Welford Systems</strong> reimagines Identity
              Governance as a{" "}
              <span className="font-semibold" style={{ color: BRAND.accent }}>
                strategic enabler
              </span>{" "}
              — not just a control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article
      className={[
        "group relative h-full rounded-2xl p-5 sm:p-6 text-center",
        "border border-slate-200/70 dark:border-white/10",
        "bg-gradient-to-br from-white/70 to-slate-50/50 dark:from-slate-900/40 dark:to-slate-800/40",
        "backdrop-blur-sm shadow-sm",
        "transition-transform duration-200 will-change-transform",
        "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1f6feb]/10",
        "focus-within:-translate-y-0.5",
      ].join(" ")}
      tabIndex={-1}
    >
      {/* Icon */}
      <div
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-inset"
        style={{
          backgroundColor: "rgba(230, 238, 249, 0.65)",
          borderColor: "rgba(31, 111, 235, 0.25)",
          color: "#00bfff",
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold"
        style={{ color: BRAND.primary }}
      >
        <span className="relative inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1f6feb] focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 rounded-md px-1">
          {title}
        </span>
      </h3>

      {/* Text */}
      <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
        {text}
      </p>

      {/* Focus ring target (improves keyboard nav) */}
      <span className="absolute inset-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900" />
    </article>
  );
}

export default CompanyOverviewCentered;
