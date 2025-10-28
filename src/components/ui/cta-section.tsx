import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-[#021024] text-white overflow-hidden">
      {/* Soft glow accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full blur-[100px] opacity-20 bg-[#0a2a52]" />
        <div className="absolute bottom-[-100px] right-[-60px] w-[360px] h-[360px] rounded-full blur-[90px] opacity-15 bg-[#0a2a52]" />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

      <div className="container mx-auto px-4">
        {/* Compact badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            Enterprise-grade Identity Security
          </span>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Ready to Govern with Confidence?
          </h2>

          <p className="mt-3 text-base md:text-lg lg:text-xl text-white/80">
            Secure every identity. Simplify access. Automate compliance.
            <br className="hidden sm:block" />
            Discover how Welford IAG helps your enterprise achieve Zero Trust with speed and assurance.
          </p>

          {/* Mini value points (kept for attractiveness) */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-white/50" />
              Zero-Trust by design
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-white/50" />
              Full audit trails
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-white/50" />
              Rapid integration
            </span>
          </div>

          {/* CTA card */}
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-[#0b1d38]/40 p-5 sm:p-7 shadow-[0_10px_30px_rgba(2,16,36,0.35)]">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                {/* Request Demo (primary) */}
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#00B4D8] hover:bg-[#0096C7] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
                  asChild
                >
                  <Link to="/demo">Request a Demo</Link>
                </Button>

                {/* Talk to Sales */}
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative w-full sm:w-auto border border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#021024] font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  asChild
                >
                  <Link to="/contact" aria-label="Talk to Sales">
                    <Mail className="h-5 w-5" />
                    <span className="transition-opacity duration-200">Talk to Sales</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </Button>

                {/* Explore Welford IAG */}
                <Button
                  size="lg"
                  variant="outline"
                  className="group w-full sm:w-auto border border-white/25 bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  asChild
                >
                  <Link to="/resources/videos-demos" aria-label="Explore Welford IAG">
                    <span>Explore Welford IAG</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Small reassurance */}
              <p className="mt-4 text-xs sm:text-sm text-white/60">
                No commitment required. Our team replies within 1 business day.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 h-px w-full bg-white/10" />
      </div>
    </section>
  );
};

export default CtaSection;
