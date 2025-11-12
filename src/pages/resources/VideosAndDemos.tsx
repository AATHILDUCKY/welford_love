import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Eye, ExternalLink, Link2, X, Calendar} from "lucide-react";
import HeroSection2 from "@/components/ui/herosection2";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";


/* ------------------------------------------
   Utils: YouTube parsing + assets
-------------------------------------------*/

// Extract a YouTube ID from most common URL patterns
function getYouTubeId(input: string): string | null {
  try {
    // If only ID provided
    if (/^[\w-]{11}$/.test(input)) return input;

    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");

    // youtu.be/<id>
    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return /^[\w-]{11}$/.test(id) ? id : null;
    }

    // youtube.com/watch?v=<id>
    if (host.endsWith("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;

      // youtube.com/embed/<id>
      const parts = url.pathname.split("/").filter(Boolean);
      const embedIdx = parts.findIndex((p) => p === "embed");
      if (embedIdx !== -1 && parts[embedIdx + 1] && /^[\w-]{11}$/.test(parts[embedIdx + 1])) {
        return parts[embedIdx + 1];
      }
    }
    return null;
  } catch {
    return null;
  }
}

const ytThumb = (id: string, quality: "max" | "hq" = "hq") =>
  quality === "max"
    ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    : `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const ytWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const ytEmbedUrl = (id: string, autoplay = true) =>
  `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${autoplay ? "&autoplay=1" : ""}`;

/* ------------------------------------------
   Types
-------------------------------------------*/

type VideoItem = {
  title: string;
  duration: string; // just a label shown on the card
  views: string; // just a label shown on the card
  url: string; // can be full YouTube URL or the 11-char ID
  description?: string;
};

/* ------------------------------------------
   YouTube Inline Player Card
-------------------------------------------*/

function YouTubeInlineCard({ item }: { item: VideoItem }) {
  const id = useMemo(() => getYouTubeId(item.url), [item.url]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState<string | null>(null);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Prepare thumbnail with maxres fallback → hqdefault
  useEffect(() => {
    if (!id) return;
    const max = new Image();
    max.src = ytThumb(id, "max");
    max.onload = () => setThumbSrc(max.src);
    max.onerror = () => setThumbSrc(ytThumb(id, "hq"));
  }, [id]);
  

  // Esc to close player (return to thumbnail)
  useEffect(() => {
    if (!isPlaying) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlaying(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPlaying]);

  if (!id) {
    // Fallback: show a simple card without media if URL is invalid
    return (
      <Card className="card-hover transition hover:shadow-xl hover:shadow-foreground/5">
        <CardContent className="p-6">
          <h3 className="font-semibold text-base leading-snug">{item.title}</h3>
          {item.description ? (
            <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
          ) : null}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {item.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              {item.views}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-hover transition hover:shadow-xl hover:shadow-foreground/5 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
      <CardContent className="p-0">
        <div className="relative rounded-t-lg overflow-hidden">
          {/* Thumbnail → Inline Player */}
          {!isPlaying ? (
            <button
              type="button"
              className="group relative w-full text-left"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play video: ${item.title}`}
            >
              {/* Shimmer background while thumb loads */}
              <div className="aspect-video w-full bg-gradient-to-br from-muted/40 to-muted/10 animate-pulse" />
              {thumbSrc && (
                <img
                  src={thumbSrc}
                  alt={`${item.title} thumbnail`}
                  className={`aspect-video w-full object-cover absolute inset-0 transition-opacity duration-300 ${
                    thumbLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setThumbLoaded(true)}
                  loading="lazy"
                />
              )}

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-background shadow-lg shadow-black/20 ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105">
                  <Play className="w-7 h-7 ml-0.5" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.duration}</span>
              </div>
            </button>
          ) : (
            <div className="relative aspect-video w-full bg-black">
              <iframe
                ref={iframeRef}
                className="absolute inset-0 h-full w-full"
                src={ytEmbedUrl(id, true)}
                title={item.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              {/* Close (escape) */}
              <button
                type="button"
                aria-label="Close video"
                className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => setIsPlaying(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="p-5 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-base leading-snug">{item.title}</h3>

            {/* Tiny toolbar (optional) */}
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={ytWatchUrl(id)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open on YouTube"
                className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
                title="Open on YouTube"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                aria-label="Copy video link"
                title="Copy video link"
                className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(ytWatchUrl(id));
                  } catch {
                    // no-op
                  }
                }}
              >
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {item.description ? (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          ) : null}

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {item.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              {item.views}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------
   Page
-------------------------------------------*/

const VideosAndDemos = () => {
  // Replace these URLs with your real YouTube links (any common format accepted)
  const featuredDemo: VideoItem = {
    title: "Welford IAG – Product Overview",
    description: "Quick walkthrough of access management, automation, and compliance.",
    duration: "1:50",
    views: "2.5K views",
    url: "https://youtu.be/Ge-d085a6HI?si=xRHEsL8WABqerGNI",
  };

  const productDemos: VideoItem[] = [
    {
      title: "Managing Azure Cloud Access in Welford IAG",
      duration: "1:38",
      views: "1.8K views",
      url: "https://www.youtube.com/watch?v=nRvgMJ6oHfg", // example
    },
    {
      title: "Managing Windows 365 & Microsoft 365 in Welford IAG",
      duration: "3:18",
      views: "1.2K views",
      url: "https://www.youtube.com/watch?v=Ai3E8eac53A", // example
    },
    {
      title: "Managing Linux Server Access in Welford IAG ",
      duration: "2:14",
      views: "2.1K views",
      url: "https://www.youtube.com/watch?v=RCWWZyeOGpE", // example
    },
  ];

  const useCaseVideos: VideoItem[] = [
    {
      title: "Employee Onboarding",
      duration: "6:30",
      views: "890 views",
      url: "https://www.youtube.com/embed/nRvgMJ6oHfg?si=S1EKub23gTkpVFv8", // example
    },
    {
      title: "Contractor Access Management",
      duration: "7:45",
      views: "750 views",
      url: "https://www.youtube.com/embed/nRvgMJ6oHfg?si=S1EKub23gTkpVFv8", // example
    },
    {
      title: "Leaver Automation",
      duration: "5:20",
      views: "630 views",
      url: "https://www.youtube.com/embed/nRvgMJ6oHfg?si=S1EKub23gTkpVFv8", // example
    },
  ];

  return (
    <Layout>
      {/* Hero Section (replaced with HeroSection2, no buttons) */}
      <section className="relative">
        <HeroSection2
          badge="Videos & Demos"
          title="Explore Welford in Action"
          subtitle="Watch product demos and use‑case videos to see how Welford IAG simplifies identity governance."
          bullets={["Product overviews", "Real‑world use cases", "Quick how‑tos"]}
          image={{
            src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/13.webp",
            alt: "Welford IAG demos overview",
          }}
          imageBadgeText="New videos added regularly"
          id="videos-hero"
        />
      </section>

      {/* Featured Demo */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Demo</h2>
            <p className="mt-2 text-muted-foreground">
              Start here for a concise overview of the Welford IAG platform.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <YouTubeInlineCard item={featuredDemo} />
          </div>
        </div>
      </section>

      {/* Product Demos */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Product Demos</h2>
            <p className="mt-2 text-muted-foreground">Deep dives into core capabilities and integrations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {productDemos.map((item, idx) => (
              <YouTubeInlineCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Videos */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Use Case Videos</h2>
            <p className="mt-2 text-muted-foreground">See how teams apply Welford IAG to real‑world scenarios.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {useCaseVideos.map((item, idx) => (
              <YouTubeInlineCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (kept minimal, no buttons) */}
      {/* Footer CTA */}
       {/* CTA Section — Videos & Demos */}
<section className="py-16 text-white bg-[#032955]">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Ready to See Welford in Your Environment?
      </h2>
      <p className="text-lg text-white/85">
        Get a tailored walkthrough—or keep exploring our library of product demos and real‑world use cases.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {/* Primary: white filled */}
        <Button
          size="lg"
          className="bg-white text-[#032955] hover:bg-white/90"
          asChild
        >
          <Link to="/demo" aria-label="Request a Live Demo">
            Request Live Demo
          </Link>
        </Button>

        {/* Secondary: white outline on brand background */}
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-[#032955] hover:bg-white/90"
          asChild
        >
          <Link to="/videos" aria-label="Explore All Videos & Demos">
            Explore All Videos
          </Link>
        </Button>
      </div>

      {/* Optional mini note for credibility (remove if not needed) */}
      <p className="text-sm text-white/70">
        No obligation. 30–45 min session with a product specialist.
      </p>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default VideosAndDemos;
