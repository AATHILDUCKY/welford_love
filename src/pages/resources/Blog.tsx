import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen, Phone } from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const Blog = () => {
  const brand = "#032955";

  // Category filters with slugs for linking
  const categories = [
    { name: "Identity & Access Management", slug: "identity-access-management" },
    { name: "Cloud Security", slug: "cloud-security" },
    { name: "Compliance & Governance", slug: "compliance-governance" },
    { name: "Product Updates", slug: "product-updates" },
    { name: "Case Studies", slug: "case-studies" },
  ];

  // Featured post (prominent card)
  const featuredPost = {
    title: "The Future of Identity Governance in a Zero Trust World",
    excerpt:
      "How enterprises can eliminate standing access and adopt a passwordless future.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: { name: "Identity & Access Management", slug: "identity-access-management" },
    readTime: "8 min read",
    slug: "future-of-identity-governance-zero-trust",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
  };

  // Latest posts (grid)
  const posts = [
    {
      title: "5 Must-Have Features in an Enterprise IAG Solution",
      excerpt:
        "What to look for when evaluating modern identity and access platforms.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: { name: "Identity & Access Management", slug: "identity-access-management" },
      readTime: "6 min read",
      slug: "must-have-features-enterprise-iag",
      image:
        "https://images.pexels.com/photos/5717418/pexels-photo-5717418.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    },
    {
      title: "Cloud Access Risks: Are You Fully Covered?",
      excerpt:
        "Understanding and addressing access vulnerabilities in cloud environments.",
      author: "Emma Rodriguez",
      date: "March 8, 2024",
      category: { name: "Cloud Security", slug: "cloud-security" },
      readTime: "7 min read",
      slug: "cloud-access-risks-fully-covered",
      image:
        "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    },
    {
      title: "Implementing Zero Trust: A Step-by-Step Guide",
      excerpt:
        "Practical steps to implement Zero Trust architecture in your organization.",
      author: "David Park",
      date: "March 5, 2024",
      category: { name: "Compliance & Governance", slug: "compliance-governance" },
      readTime: "10 min read",
      slug: "implementing-zero-trust-guide",
      image:
        "https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    },
    {
      title: "New Release: Enhanced RBAC Controls",
      excerpt:
        "Introducing advanced role-based access controls in Welford IAG v2.4.",
      author: "Product Team",
      date: "March 1, 2024",
      category: { name: "Product Updates", slug: "product-updates" },
      readTime: "4 min read",
      slug: "enhanced-rbac-controls-v24",
      image:
        "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    },
    {
      title: "Case Study: Fortune 500 Security Transformation",
      excerpt:
        "How a global enterprise achieved 99.9% compliance with automated governance.",
      author: "Jennifer Lee",
      date: "February 28, 2024",
      category: { name: "Case Studies", slug: "case-studies" },
      readTime: "12 min read",
      slug: "fortune-500-security-transformation",
      image:
        "https://images.pexels.com/photos/3184637/pexels-photo-3184637.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    },
    {
      title: "The ROI of Identity Governance Automation",
      excerpt:
        "Quantifying the business value of automated access management.",
      author: "Alex Thompson",
      date: "February 25, 2024",
      category: { name: "Identity & Access Management", slug: "identity-access-management" },
      readTime: "9 min read",
      slug: "roi-of-identity-governance-automation",
      image:
        "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    },
  ];

  return (
    <Layout>
      {/* Hero — simple, on-brand, no gradient buttons */}
      <HeroSection2
  badge="Welford Blog"
  title="Insights on Identity Security & Governance"
  subtitle="Expert updates and thought leadership from the Welford Systems team."
  bullets={[
    "Identity Security",
    "Access Governance",
    "Cloud Protection",
  ]}
  image={{
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    alt: "Welford Blog overview",
  }}
  imageBadgeText="Latest insights & updates"
  id="blog-hero"
/>


      {/* Categories */}
      <section className="py-12" style={{ backgroundColor: "rgba(3,41,85,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: brand }}>
              Categories
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Link key={index} to={`/blog/category/${category.slug}`}>
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-2 cursor-pointer transition-colors"
                  style={{
                    color: brand,
                    borderColor: "rgba(3,41,85,0.25)",
                    backgroundColor: "rgba(3,41,85,0.10)",
                  }}
                >
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brand }}>
              Featured Post
            </h2>
          </div>
          <Card
            className="max-w-5xl mx-auto transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: "rgba(3,41,85,0.18)" }}
          >
            <CardContent className="p-6 lg:p-8">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
                {/* Copy */}
                <div className="md:col-span-2">
                  <Link to={`/blog/category/${featuredPost.category.slug}`}>
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
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <h3
                      className="text-2xl font-bold mb-3 hover:underline"
                      style={{ color: brand }}
                    >
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-5">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
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
                  <Button asChild>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <Link to={`/blog/${featuredPost.slug}`} className="md:col-span-1">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="rounded-lg w-full h-48 object-cover shadow-sm"
                    loading="lazy"
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "rgba(3,41,85,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brand }}>
              Latest Posts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-6">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg w-full h-36 object-cover mb-4"
                      loading="lazy"
                    />
                  </Link>
                  <Link to={`/blog/category/${post.category.slug}`}>
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
                  <Link to={`/blog/${post.slug}`}>
                    <h3
                      className="font-semibold text-lg mb-2 line-clamp-2 hover:underline"
                      style={{ color: brand }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
{/* Newsletter Signup */}
<section className="py-16 lg:py-24 text-white" style={{ backgroundColor: brand }}>
  <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
        Stay Updated
      </h2>
      <p className="mt-3 text-base lg:text-lg text-white/80">
        Subscribe for concise insights on identity security, access governance, and cloud protection—straight to your inbox.
      </p>

      {/* Signup form */}
      <form
        className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: connect to your newsletter API
          // Optionally set aria-live text below for success/error
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
          className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder-white/60 shadow-sm outline-none transition
                     focus:border-white/40 focus:ring-2 focus:ring-white/30"
        />
        <Button
          type="submit"
          size="lg"
          className="h-12 rounded-xl bg-white text-[#032955] hover:bg-white/90 transition shadow-lg shadow-black/10"
        >
          Subscribe
        </Button>

        {/* Honeypot for basic spam protection (kept visually hidden) */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
      </form>

      {/* Status (for screen readers & inline feedback) */}
      <p
        id="newsletter-status"
        className="mt-3 text-sm text-white/80"
        aria-live="polite"
      />

      {/* Quick links */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <Link
          to="/blog"
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:border-white/30 transition"
        >
          All Articles
        </Link>
        <Link
          to="/blog/categories"
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:border-white/30 transition"
        >
          Categories
        </Link>
        <Link
          to="/rss.xml"
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:border-white/30 transition"
        >
          RSS Feed
        </Link>
      </div>

      {/* Privacy note */}
      <p className="mt-4 text-xs text-white/70">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Blog;
