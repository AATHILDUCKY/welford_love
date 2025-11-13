// components/key-capabilities.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Settings, CheckCircle, Key, Clock, Database, Eye, Brain, Users, Shield } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  image: string;
}

import aap from "/src/assets/aap.webp";
import ila from "/src/assets/ila.webp";
import ir from "/src/assets/ir.webp";
import jit from "/src/assets/jit.webp";
import pmkv from "/src/assets/pmkv.webp";
import npta from "/src/assets/npta.webp";
import rtv from "/src/assets/rtv.webp";
import gem from "/src/assets/gem.webp";
import ss0 from "/src/assets/sso.webp";

const CAPTION_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

const KeyCapabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const DURATION = 4500;

  const features: Feature[] = [
    { icon: Clock, title: "100% Just-in-Time (JIT) Access", description: "grant and revoke entitlements dynamically, only when required", image: jit },
    { icon: Settings, title: "Autonomous Provisioning", description: "— replace manual tickets and scripts with policy-driven automation", image: aap },
    { icon: Key, title: "Password-Free Linux Access", description: "Ephemeral, credential-less sessions for complete least-privilege control.", image: pmkv },
    { icon: Users, title: "Multi-Cloud Governance", description: "Unified oversight for Azure, AWS, GCP, ADDS, and Entra ID", image: npta },
    { icon: Brain, title: "Audit-Ready Compliance Evidence", description: "real-time dashboards and forensic logs aligned with ISO 27001 & SOC 2", image: ir },
    { icon: Key, title: "Identity Lifecycle Automation", description: "Automate onboarding, offboarding, and role changes for joiners, movers, and leavers using policy-based workflows.", image: ila },
  ];

  const total = features.length;

  // ---- helpers
  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goTo = (i: number) => {
    setActiveIndex(i);
    if (isAutoPlaying) {
      stopAutoPlay();
      startAutoPlay(true);
    }
  };

  // ---- autoplay & progress
  const startAutoPlay = (resume = false) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    const stepMs = 30;
    const startAt = resume ? 0 : 0;
    let t = startAt;

    setProgress(0);

    intervalRef.current = setInterval(() => {
      next();
      t = 0;
    }, DURATION);

    progressRef.current = setInterval(() => {
      t += stepMs;
      const pct = Math.min(100, (t / DURATION) * 100);
      setProgress(pct);
    }, stepMs);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    intervalRef.current = null;
    progressRef.current = null;
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => {
      const nextState = !prev;
      if (nextState) startAutoPlay();
      else stopAutoPlay();
      return nextState;
    });
  };

  // init / cleanup
  useEffect(() => {
    if (isAutoPlaying && !prefersReducedMotion) startAutoPlay();
    return () => {
      stopAutoPlay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, prefersReducedMotion]);

  // pause when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isAutoPlaying) {
          if (!intervalRef.current) startAutoPlay();
        } else {
          stopAutoPlay();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goTo((activeIndex + 1) % total);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo((activeIndex - 1 + total) % total);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, total]);

  const itemsAbove = features.slice(0, activeIndex);
  const activeItem = features[activeIndex];
  const itemsBelow = features.slice(activeIndex + 1);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 bg-[#f8fafc] overflow-hidden"
      aria-labelledby="key-capabilities-heading"
    >
      {/* --- Background: clean, non-gradient, responsive SVG dot grid --- */}
      <div aria-hidden className="absolute inset-0">
        <svg
          className="w-full h-full opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          role="img"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#e5e7eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* top & bottom solid overlays for depth (no gradients) */}
        <div className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-[#f8fafc]" />
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-[#f8fafc]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sm:mb-14">
          {/* TOP: Center badge */}
          <div className="mb-4 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-xl shadow-sm"
              style={{
                borderColor: "rgba(3,41,85,0.15)",
                color: "#032955",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "#0b4aa8", opacity: 0.75 }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#032955" }}
                />
              </span>
              
              <span>Security + Access</span>
            </span>
          </div>
          <h2
            id="key-capabilities-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#032955]"
          >
            Our Solution: Welford Identity & Access Governance (Welford IAG)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3 text-sm sm:text-base">
            A Zero Trust, autonomous access governance platform that centralizes, automates, and secures access across your entire digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left: hero image + details */}
          <div className="lg:order-1">
            <div className="lg:sticky lg:top-24">
              <motion.div
                key={activeIndex}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, rotate: -0.5 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-slate-200/60 bg-white"
              >
                {/* subtle sheen */}
                <div className="absolute inset-0 pointer-events-none bg-white/5" />
                <motion.img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-52 sm:h-64 lg:h-80 object-cover"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
                {/* progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100/90">
                  <div
                    className={`h-1 ${isAutoPlaying ? "bg-[#032955]" : "bg-slate-300"}`}
                    style={{ width: `${progress}%`, transition: "width 80ms linear" }}
                  />
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${activeIndex}`}
                  variants={CAPTION_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mt-4 sm:mt-6 p-4 sm:p-6 bg-white/90 backdrop-blur rounded-xl sm:rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <div className="flex items-start sm:items-center mb-2 sm:mb-3">
                    <activeItem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#032955] mr-2.5 sm:mr-3 mt-0.5 sm:mt-0" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#032955]">{activeItem.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{activeItem.description}</p>

                  {/* controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => goTo((activeIndex - 1 + total) % total)}
                        className="px-3 py-2 text-sm rounded-lg ring-1 ring-slate-200 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#032955]"
                        aria-label="Previous capability"
                      >
                        ← Prev
                      </button>
                      <button
                        onClick={() => goTo((activeIndex + 1) % total)}
                        className="px-3 py-2 text-sm rounded-lg ring-1 ring-slate-200 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#032955]"
                        aria-label="Next capability"
                      >
                        Next →
                      </button>
                    </div>

                    <button
                      onClick={toggleAutoPlay}
                      className="inline-flex items-center justify-center text-sm text-gray-700 hover:text-[#032955] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#032955] rounded-lg px-2 py-1 bg-white"
                      aria-pressed={isAutoPlaying}
                      aria-label="Toggle auto rotation"
                      title="Toggle auto rotation"
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full mr-2 ${isAutoPlaying ? "bg-[#032955]" : "bg-gray-400"}`}
                      />
                      {isAutoPlaying ? "Pause" : "Play"} auto
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: nav list (HIDDEN on mobile) */}
          <div className="hidden lg:block lg:order-2">
            <div className="relative">
              {/* Items above */}
              <div className="space-y-2.5 sm:space-y-3 mb-3 sm:mb-4">
                {itemsAbove.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 0.9, y: 0, scale: 1 }}
                    whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card
                      className="cursor-pointer border border-gray-200/80 shadow-sm bg-white/90 hover:bg-white transition-all rounded-lg sm:rounded-xl focus-within:ring-2 focus-within:ring-[#032955]"
                      onClick={() => goTo(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(index)}
                      aria-label={`Go to ${feature.title}`}
                    >
                      <CardContent className="p-3 sm:p-3.5">
                        <div className="flex items-start sm:items-center space-x-3">
                          <feature.icon className="w-4 h-4 sm:w-4 sm:h-4 text-gray-700 mt-0.5 sm:mt-0" />
                          <span className="text-sm sm:text-[15px] text-gray-800 font-medium">{feature.title}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Active */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-3 sm:mb-4"
              >
                <Card className="border-[#032955]/30 shadow-lg bg-white">
                  <CardContent className="p-3.5 sm:p-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#032955]" />
                      <span className="font-semibold text-[#032955] text-sm sm:text-base">{activeItem.title}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Items below */}
              <div className="space-y-2.5 sm:space-y-3">
                {itemsBelow.map((feature, index) => {
                  const idx = activeIndex + index + 1;
                  return (
                    <motion.div
                      key={idx}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 0.9, y: 0, scale: 1 }}
                      whileHover={prefersReducedMotion ? {} : { opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Card
                        className="cursor-pointer border border-gray-200/80 shadow-sm bg-white/90 hover:bg-white transition-all rounded-lg sm:rounded-xl focus-within:ring-2 focus-within:ring-[#032955]"
                        onClick={() => goTo(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(idx)}
                        aria-label={`Go to ${feature.title}`}
                      >
                        <CardContent className="p-3 sm:p-3.5">
                          <div className="flex items-start sm:items-center space-x-3">
                            <feature.icon className="w-4 h-4 sm:w-4 sm:h-4 text-gray-700 mt-0.5 sm:mt-0" />
                            <span className="text-sm sm:text-[15px] text-gray-800 font-medium">{feature.title}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress dots */}
              <div className="flex justify-center mt-6 sm:mt-8 flex-wrap gap-1.5">
                {features.map((_, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => goTo(index)}
                      className={`group relative h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#032955] ${
                        isActive ? "w-7 bg-[#032955]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to feature ${index + 1}`}
                      aria-current={isActive ? "true" : "false"}
                    >
                      {isActive && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#032955] text-white text-[10px] px-2 py-1 shadow">
                          {activeIndex + 1}/{total}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: quick access list BELOW image — now hidden as well */}
        <div className="hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => goTo(i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-slate-200 bg-white text-left ${
                  i === activeIndex ? "shadow-md" : "hover:bg-slate-50"
                }`}
                aria-label={`Open ${f.title}`}
              >
                <f.icon className="w-4 h-4 text-[#032955]" />
                <span className="text-xs font-medium text-slate-800 line-clamp-1">{f.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
