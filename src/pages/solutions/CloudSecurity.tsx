import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge as UIBadge } from "@/components/ui/badge";
import {
  Cloud,
  Shield,
  Eye,
  FileCheck,
  AlertTriangle,
  Settings,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Lock,
  Globe,
  Calendar,
  Phone,
  BadgeCheck,
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const CloudSecurity = () => {
  const brand = "#032955";

  const challenges = [
    "Rapidly changing cloud environments with complex configurations",
    "Limited in-house expertise in cloud-native security",
    "Shadow IT and unmanaged access risks",
    "Compliance obligations under GDPR, ISO 27001, HIPAA, and more",
    "Lack of unified visibility across cloud platforms",
  ];

  const offerings = [
    {
      icon: Shield,
      title: "Cloud Security Posture Management (CSPM)",
      description:
        "Continuously monitor, assess, and remediate misconfigurations across cloud platforms—ensuring policy alignment and industry best practices.",
    },
    {
      icon: Users,
      title: "Identity & Access Governance",
      description:
        "Enable just-in-time access, eliminate standing privileges, and implement passwordless authentication—integrated with Welford IAG.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Regulatory Alignment",
      description:
        "Meet frameworks including NIST, CIS Benchmarks, GDPR, HIPAA, PCI DSS, and ISO/IEC 27001 with audit-ready evidence.",
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection & Incident Response",
      description:
        "Detect cloud-native threats in real time using behavioral analytics and execute rapid incident response.",
    },
    {
      icon: Settings,
      title: "Governance & Policy Enforcement",
      description:
        "Automate policy application across services, workloads, and users with centralized control and insights.",
    },
    {
      icon: Lock,
      title: "Workload & Data Protection",
      description:
        "Harden workloads, encrypt data at rest/in transit, and manage secrets centrally across environments.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Build Cyber Resilience",
      description:
        "Detect and respond to threats across cloud environments in real time—before damage is done.",
    },
    {
      icon: CheckCircle,
      title: "Earn Stakeholder Trust",
      description:
        "Demonstrate maturity to partners and customers through robust, auditable controls.",
    },
    {
      icon: BarChart3,
      title: "Enable Business Growth",
      description:
        "Accelerate innovation by securing cloud without adding operational friction.",
    },
    {
      icon: FileCheck,
      title: "Simplify Compliance",
      description:
        "Automate compliance tasks, reduce audit fatigue, and align with evolving global standards.",
    },
    {
      icon: Eye,
      title: "Gain Strategic Visibility",
      description:
        "Dashboards and reporting provide C‑level visibility across risk, compliance, and access.",
    },
  ];

  const phases = [
    {
      number: "1",
      title: "Discover",
      description:
        "Deep-dive assessment of cloud posture, misconfigurations, privilege sprawl, and policy gaps.",
    },
    {
      number: "2",
      title: "Secure",
      description:
        "Best-practice hardening, least‑privilege enforcement, and Welford IAG integration.",
    },
    {
      number: "3",
      title: "Monitor",
      description:
        "Continuous monitoring of workloads, identities, and access behaviors to prevent breaches.",
    },
    {
      number: "4",
      title: "Govern",
      description:
        "Scalable governance with policy automation, audit trails, and real-time compliance insights.",
    },
  ];

  const advantages = [
    {
      icon: Cloud,
      title: "Cloud‑Agnostic Expertise",
      description:
        "Security across AWS, Azure, GCP, and hybrid environments—tailored to your goals.",
    },
    {
      icon: Shield,
      title: "Zero Trust & Identity‑Centric",
      description:
        "Backed by Welford IAG, we embed Zero Trust principles into access workflows.",
    },
    {
      icon: BarChart3,
      title: "Growth & Strategy Focused",
      description:
        "Built not just to secure, but to support digital innovation and scale.",
    },
    {
      icon: CheckCircle,
      title: "Trusted by Regulated Industries",
      description:
        "Finance, healthcare, manufacturing, and critical infrastructure.",
    },
    {
      icon: BadgeCheck,
      title: "Certified Security Experts",
      description:
        "CISSP, CISM, AWS Security, and Azure Security Engineer certifications.",
    },
  ];

  return (
    <Layout>
      {/* Simple Hero — concise copy, default buttons, brand accents; matches GRC page pattern */}
      <section className="relative">
        {/* soft brand backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 60rem at 50% -10%, rgba(3,41,85,0.06) 0%, transparent 60%)",
          }}
        />
        
          <HeroSection2
            badge="Welford Systems — Cloud Security"
            title="Cloud Security Solutions"
            subtitle="Secure, govern, and scale confidently across AWS, Azure, and GCP—without slowing your teams down."
            bullets={[]}
            primaryCta={{
              label: "Get Started",
              href: "/demo",
              icon: <Calendar className="mr-2 h-4 w-4" />,
            }}
            secondaryCta={{
              label: "Speak to Our Experts",
              href: "/contact",
              icon: <Phone className="mr-2 h-4 w-4" />,
            }}
            image={{
              src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
              alt: "Cloud security advisory session",
            }}
            imageBadgeText="Expert-led guidance"
            id="cloud-hero"
          />
        
      </section>

      {/* Why Cloud Security Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2
              className="text-3xl lg:text-4xl font-bold text-center mb-8"
              style={{ color: brand }}
            >
              Why Cloud Security Matters More Than Ever
            </h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed mb-8">
              As enterprises accelerate digital adoption, cloud footprints expand rapidly. Without
              strong posture management and identity controls, exposure to misconfigurations,
              unauthorized access, and compliance violations grows fast.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: brand }} />
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20" style={{ backgroundColor: "rgba(3,41,85,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your cloud, simplify operations, and support strategic growth with our
              comprehensive services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <offering.icon className="w-12 h-12 mb-4" style={{ color: brand }} />
                  <h3 className="font-semibold text-xl mb-3" style={{ color: brand }}>
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              Key Benefits of Welford Cloud Security
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4" style={{ color: brand }} />
                  <h3 className="font-semibold text-xl mb-3" style={{ color: brand }}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Approach */}
      <section className="py-20" style={{ backgroundColor: "rgba(3,41,85,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              How It Works: Our 4‑Phase Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4"
                    style={{ backgroundColor: brand }}
                  >
                    {phase.number}
                  </div>
                  <h3 className="font-semibold text-xl mb-3" style={{ color: brand }}>
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Welford */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              Why Choose Welford Systems?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <advantage.icon className="w-12 h-12 mb-4" style={{ color: brand }} />
                  <h3 className="font-semibold text-xl mb-3" style={{ color: brand }}>
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — brand background (#032955), light text (matches GRC CTA) */}
      <section className="py-20" style={{ backgroundColor: "#032955" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Secure Your Cloud?
            </h2>
            <p className="text-xl text-white/80">
              Book a cloud security consultation and take the first step toward transforming your
              security posture—safely and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#032955] hover:bg-white/90" asChild>
                <Link to="/contact">
                  Speak to Our Experts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#032955] hover:bg-white/90"
                asChild
              >
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>
            {/* trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                <span>Multi‑cloud expertise</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                <span>Compliance‑first approach</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                <span>24/7 monitoring options</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudSecurity;
