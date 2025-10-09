import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

// Types
type Category = { name: string; slug: string };
type Post = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: Category;
  readTime: string;
  slug: string;
  image: string;
};

const Blog = () => {
  const brand = "#032955";

  // Categories
  const categories: Category[] = [
    { name: "Identity & Access Management", slug: "identity-access-management" },
    { name: "Cloud Security", slug: "cloud-security" },
    { name: "Compliance & Governance", slug: "compliance-governance" },
    { name: "Product Updates", slug: "product-updates" },
    { name: "Case Studies", slug: "case-studies" },
  ];

  // Featured Post (you can swap this anytime)
  const featuredPost: Post = {
    title: "From Perimeter to Identity: Why Cyber Security’s Centre of Gravity is Shifting to IAG",
    excerpt:
      "Perimeter-first security is fading. Here’s how identity governance reduces blast radius and proves the right access—for the right reason.",
    author: "Welford Systems Editorial Team",
    date: "October 2025",
    category: { name: "Identity & Access Management", slug: "identity-access-management" },
    readTime: "7 min read",
    slug: "from-perimeter-to-identity", // ✅ route slug
    image:
      "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/peri.png",
  };

  // Latest posts
  // "https://images.pexels.com/photos/5717418/pexels-photo-5717418.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
  const posts: Post[] = [
    {
  title: "Ransomware Readiness Begins with Access Control",
  excerpt:
    "Ransomware attacks rarely start with malware—they start with access. Learn how Welford IAG applies Zero Trust and Just-in-Time provisioning to reduce the attack surface and stop access-based threats.",
  author: "Welford Systems Editorial Team",
  date: "October 09, 2025",
  category: { name: "Identity & Access Governance", slug: "identity-access-governance" },
  readTime: "7 min read",
  slug: "ransomware-readiness-begins-with-access-control",
  image: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/ransome1.png",
}
,
    {
      title: "Autonomous Access Fulfilment: A Critical Defence Against Misuse & Misconfigurations",
      excerpt: "Learn how Welford IAG delivers 100% Just-in-Time access with autonomous fulfilment—removing tickets, scripts, and manual provisioning.",
      author: "Welford Systems Editorial Team",
      date: "October 2025",
      category: { name: "Identity & Access Governance", slug: "identity-access-governance" },
      readTime: "6 min read",
      slug: "autonomous-access-fulfilment",
      image: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/auto3.png",
    },

    {
      title: "Welford Systems Joins Microsoft for Startups",
      excerpt: "We’re thrilled to announce that Welford Systems has been accepted into the Microsoft for Startups program — accelerating our identity-first security innovation and Azure integration roadmap.",
      author: "Welford Systems Editorial Team",
      date: "October 9, 2025",
      category: { name: "Company News", slug: "company-news" },
      readTime: "6 min read",
      slug: "welford-joins-microsoft-for-startups",
      image: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/msf1.png",
    },

    {
      title: "Ending Over-Privilege: Autonomous Identity Governance that Shrinks Ransomware Risk",
      excerpt: "Hidden entitlements and standing privileges fuel ransomware. See how Welford IAG applies JIT access, Zero Trust, and autonomous fulfilment to shut them down.",
      author: "Welford Systems Editorial Team",
      date: "October 09, 2025",
      category: { name: "Identity & Access Governance", slug: "identity-access-governance" },
      readTime: "7 min read",
      slug: "ending-over-privilege-autonomous-identity-governance",
      image:  "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/privi.png",
    },

    {
      title: "Closing the Entitlement Provisioning Gap with Autonomous Governance",
      excerpt: "Automate policy-driven provisioning and deterministic de-provisioning across legacy, cloud, directories, Linux, and databases—without manual bottlenecks.",
      author: "Welford Systems Editorial Team",
      date: "October 09, 2025",
      category: { name: "Identity & Access Governance", slug: "identity-access-governance" },
      readTime: "6–7 min read",
      slug: "closing-the-entitlement-provisioning-gap",
      image: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/cls.png",
    },

    {
      title: "Revolutionizing Linux Access with Welford IAG",
      excerpt: "Welford IAG eliminates static Linux credentials by enabling Zero Trust, just-in-time access — no usernames, passwords, or lingering privileges.",
      author: "Welford Systems Editorial Team",
      date: "October 09, 2025",
      category: { name: "Identity & Access Governance", slug: "identity-access-governance" },
      readTime: "6 min read",
      slug: "revolutionizing-linux-access-with-welford-iag",
      image: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/linux111.png",
    },
    
  ];

  return (
    <Layout>
      {/* Hero */}
      <HeroSection2
        badge="Welford Blog"
        title="Insights on Identity Security & Governance"
        subtitle="Expert updates and thought leadership from the Welford Systems team."
        bullets={["Identity Security", "Access Governance", "Cloud Protection"]}
        image={{
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
          alt: "Welford Blog overview",
        }}
        imageBadgeText="Latest insights & updates"
        id="blog-hero"
      />

      {/* ✨ Removed the Categories section per request */}

      {/* Featured Post */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: brand }}>
              Featured Post
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Spotlight insights from our editorial team—identity-first security without the fluff.
            </p>
          </div>
          <Card
            className="mx-auto max-w-6xl transition-all hover:-translate-y-0.5 hover:shadow-lg rounded-2xl"
            style={{ borderColor: "rgba(3,41,85,0.18)" }}
          >
            <CardContent className="p-6 lg:p-10">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-10 items-start">
                <div className="md:col-span-2">
                  <Link to={`/resources/blog/category/${featuredPost.category.slug}`}>
                    <Badge
                      variant="secondary"
                      className="mb-4"
                      style={{
                        color: brand,
                        borderColor: "rgba(3,41,85,0.25)",
                        backgroundColor: "rgba(3,41,85,0.10)",
                      }}
                    >
                      {featuredPost.category.name}
                    </Badge>
                  </Link>
                  <Link to={`/resources/blog/${featuredPost.slug}`} className="group">
                    <h3
                      className="text-2xl md:text-3xl font-extrabold leading-tight mb-3 group-hover:underline"
                      style={{ color: brand }}
                    >
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button asChild className="h-11 rounded-xl shadow-md hover:shadow-lg">
                    <Link to={`/resources/blog/${featuredPost.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <Link to={`/resources/blog/${featuredPost.slug}`} className="md:col-span-1">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="rounded-xl w-full aspect-[16/9] object-cover shadow-sm"
                    loading="lazy"
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Posts */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(180deg, rgba(3,41,85,0.06) 0%, rgba(3,41,85,0.03) 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: brand }}>
              Latest Posts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Fresh research, product updates, and identity security patterns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="transition-all hover:-translate-y-1 hover:shadow-lg rounded-2xl"
                style={{ borderColor: "rgba(3,41,85,0.14)" }}
              >
                <CardContent className="p-5">
                  <Link to={`/resources/blog/${post.slug}`} className="block mb-4 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </Link>
                  <Link to={`/resources/blog/category/${post.category.slug}`}>
                    <Badge
                      variant="secondary"
                      className="mb-3 text-xs"
                      style={{
                        color: brand,
                        borderColor: "rgba(3,41,85,0.25)",
                        backgroundColor: "rgba(3,41,85,0.10)",
                      }}
                    >
                      {post.category.name}
                    </Badge>
                  </Link>
                  <Link to={`/resources/blog/${post.slug}`} className="group">
                    <h3
                      className="font-semibold text-xl leading-snug mb-2 line-clamp-2 group-hover:underline"
                      style={{ color: brand }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="rounded-lg">
                      <Link to={`/resources/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 text-white relative overflow-hidden" style={{ backgroundColor: brand }}>
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(600px 200px at 50% -50px, white, transparent)" }} />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Stay Updated</h2>
            <p className="mt-3 text-base lg:text-lg text-white/85 leading-relaxed">
              Subscribe for concise insights on identity security, access governance, and cloud protection—straight to your inbox.
            </p>

            <form
              className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const status = document.getElementById("newsletter-status");
                if (status) status.textContent = "Thanks! Please check your inbox to confirm.";
              }}
            >
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
                aria-label="Email address"
                className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder-white/60 shadow-sm outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
              />
              <Button type="submit" size="lg" className="h-12 rounded-xl bg-white text-[#032955] hover:bg-white/90 transition shadow-lg shadow-black/10">
                Subscribe
              </Button>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            </form>

            <p id="newsletter-status" className="mt-3 text-sm text-white/80" aria-live="polite" />

            {/* ✨ Removed the three extra links per request:
                - All Articles
                - Categories
                - RSS Feed
            */}

            <p className="mt-6 text-xs text-white/75">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
