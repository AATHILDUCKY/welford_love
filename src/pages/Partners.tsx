import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  BarChart3, 
  Gift, 
  ArrowRight,
  Handshake,
  Globe,
  Award,
  Phone
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const BRAND = "#032955";

const Partners = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Unlock Growth with Welford Systems",
      description:
        "A unified partnership model that supports you across various business channels and industries.",
    },
    {
      icon: Users,
      title: "Empowering Your Success",
      description:
        "Comprehensive enablement, sales, technical, and marketing support to help you thrive at every step.",
    },
    {
      icon: Gift,
      title: "Grow with Exclusive Benefits",
      description:
        "Enjoy incentives and rewards that increase as your partnership with Welford Systems deepens.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section (HeroSection2 for partners) */}
      <HeroSection2
        badge="Partner with Welford Systems"
        title="Let's Grow Together"
        subtitle="Join a trusted network of forward-thinking partners and unlock new opportunities for shared success."
        bullets={[
          "Comprehensive sales & technical enablement",
          "Incentives and rewards as you grow",
          "Collaborative go-to-market strategies",
        ]}
        primaryCta={{
          label: "Become a Partner",
          href: "/contact",
          icon: <ArrowRight className="mr-2 h-4 w-4" />,
        }}
        secondaryCta={{
          label: "Talk to Our Team",
          href: "tel:+18001234567",
          icon: <Phone className="mr-2 h-4 w-4" />,
        }}
        image={{
          src: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=1170&auto=format&fit=crop",
          alt: "Welford partnership collaboration",
        }}
        imageBadgeText="Trusted by global partners"
        id="partners-hero"
      />

      {/* Partner Benefits (more compact) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span
              className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide"
              style={{
                backgroundColor: `${BRAND}0D`,
                color: BRAND,
                border: `1px solid ${BRAND}26`,
              }}
            >
              Why partner with us
            </span>
            <h2 className="mt-3 text-2xl lg:text-3xl font-bold tracking-tight">
              Benefits that help you scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: `${BRAND}26` }}
              >
                <CardContent className="p-6 md:p-6">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${BRAND}0D`,
                        border: `1px solid ${BRAND}26`,
                      }}
                    >
                      <benefit.icon className="h-6 w-6" style={{ color: BRAND }} />
                    </div>
                    <h3 className="text-lg font-semibold leading-snug">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types (tighter, balanced spacing) */}
      <section className="py-16" style={{ backgroundColor: `${BRAND}08` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Partnership Opportunities</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to partner with Welford Systems and grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                Icon: Handshake,
                title: "Reseller Partners",
                desc: "Expand your portfolio with our leading-edge identity governance solutions and earn competitive margins.",
              },
              {
                Icon: Globe,
                title: "System Integrators",
                desc: "Enhance your cybersecurity practice with our comprehensive IAG platform and expert support.",
              },
              {
                Icon: Award,
                title: "Technology Partners",
                desc: "Integrate your solutions with our platform to deliver comprehensive security solutions to joint customers.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <Card
                key={i}
                className="border bg-white shadow-sm transition-all hover:shadow-md"
                style={{ borderColor: `${BRAND}26` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${BRAND}0D`,
                        border: `1px solid ${BRAND}26`,
                      }}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" style={{ color: BRAND }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-snug">{title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: BRAND }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-white/85">
              Join our growing network of partners and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* Primary: white filled */}
              <Button
                size="lg"
                className="bg-white text-[#032955] hover:bg-white/90"
                asChild
              >
                <Link to="/contact" aria-label="Become a Partner">Become a Partner</Link>
              </Button>

              {/* Secondary: white outline */}
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#032955] hover:bg-white/90"
                asChild
              >
                <Link to="/demo" aria-label="Learn More About Partnership">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
