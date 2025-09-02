import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  FileCheck,
  Users,
  BarChart3,
  AlertTriangle,
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Calendar,
  Phone,
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const GRCConsultancy = () => {
  const brand = "#032955";

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Strategy & Architecture",
      description:
        "Build and scale a cyber resilience strategy aligned with your business goals, regulatory requirements, and threat landscape.",
    },
    {
      icon: BarChart3,
      title: "Risk Assessments & Management",
      description:
        "Identify, assess, and manage cybersecurity risks with comprehensive assessments that reduce exposure and enhance preparedness.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Certification Readiness",
      description:
        "Navigate and implement compliance programs to meet legal, contractual, and industry-specific security mandates.",
    },
    {
      icon: Globe,
      title: "Policy & Control Framework Development",
      description:
        "Design and implement cybersecurity policies, standards, and control frameworks tailored to your operational environment.",
    },
    {
      icon: Users,
      title: "Virtual CISO (vCISO) Services",
      description:
        "Gain access to executive-level expertise without the overhead. Our vCISOs help lead your cybersecurity and compliance strategy from within.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Cyber Resilience Planning",
      description:
        "Prepare for the unexpected with robust incident response plans, business continuity strategies, and tabletop exercises.",
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Trusted Security Partner",
      description:
        "From startups to enterprises, Welford Systems is the cybersecurity backbone of forward-thinking organizations across diverse sectors.",
    },
    {
      icon: Zap,
      title: "Scalable, Sustainable Solutions",
      description:
        "We offer scalable services that grow with your business and adapt to the changing regulatory and cyber threat environment.",
    },
    {
      icon: Users,
      title: "People-First, Business-Centric",
      description:
        "We integrate seamlessly with your internal teams, acting as a strategic advisor and an extension of your business.",
    },
  ];

  const frameworks = [
    "NIST",
    "ISO/IEC 27001",
    "SOC 2",
    "HIPAA",
    "GDPR",
    "CCPA",
    "PCI DSS",
  ];

  const whyChooseUs = [
    {
      title: "Tailored Cybersecurity Frameworks",
      description:
        "We don't believe in one-size-fits-all. Our team deeply analyzes your unique business operations, goals, and threat posture to craft a cybersecurity strategy that aligns with your risk tolerance and compliance requirements.",
    },
    {
      title: "Expert-Led GRC Advisory",
      description:
        "Our consultants have hands-on experience across multiple industries and regulatory frameworks. We offer Virtual CISO services, strategic planning, compliance readiness assessments, and full-lifecycle GRC program design.",
    },
    {
      title: "End-to-End Compliance Solutions",
      description:
        "We help you achieve and maintain compliance with global and industry-specific standards.",
    },
  ];

  return (
    <Layout>
      {/* Simple Hero — concise copy, default buttons, brand accents */}
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
            badge="Welford Systems — GRC"
            title="Cyber Resilience & Compliance"
            subtitle="Advisory to reduce risk, meet compliance, and build operational resilience."
            // keep bullets minimal or omit entirely for simplicity
            bullets={[]}
            primaryCta={{
              label: "Get Started",
              href: "/demo",
              icon: <Calendar className="mr-2 h-4 w-4" />,
            }}
            secondaryCta={{
              label: "Contact Our Experts",
              href: "/contact",
              icon: <Phone className="mr-2 h-4 w-4" />,
            }}
            image={{
              src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
              alt: "Advisory session preview",
            }}
            imageBadgeText="Expert-led guidance"
            id="grc-hero"
          />
      </section>

      {/* What We Do — clear explanation immediately after the short hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide Governance, Risk, and Compliance consulting that turns policy into
              practice. From risk assessments and vCISO leadership to audit readiness and
              incident response, we help you design, implement, and operate a resilient
              security program aligned to your business and regulatory obligations.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <h3
                    className="font-semibold text-xl mb-4"
                    style={{ color: brand }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20" style={{ backgroundColor: "rgba(3,41,85,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              End-to-End Compliance Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              We help you achieve and maintain compliance with global and
              industry-specific standards
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((framework, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-base px-5 py-2"
                style={{
                  color: brand,
                  borderColor: "rgba(3,41,85,0.25)",
                  backgroundColor: "rgba(3,41,85,0.10)",
                }}
              >
                {framework}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              Our Core GRC &amp; Cybersecurity Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 mb-4" style={{ color: brand }} />
                  <h3
                    className="font-semibold text-xl mb-3"
                    style={{ color: brand }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Welford Advantage */}
      <section className="py-20" style={{ backgroundColor: "rgba(3,41,85,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: brand }}
            >
              The Welford Advantage
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <advantage.icon
                    className="w-16 h-16 mx-auto mb-4"
                    style={{ color: brand }}
                  />
                  <h3
                    className="font-semibold text-xl mb-3"
                    style={{ color: brand }}
                  >
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — brand background (#032955), light text */}
<section className="py-20" style={{ backgroundColor: "#032955" }}>
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-3xl lg:text-5xl font-bold text-white">
        Let's Fortify Your Cyber Defenses
      </h2>
      <p className="text-xl text-white/80">
        Connect with our cybersecurity experts to assess your vulnerabilities,
        strengthen your digital infrastructure, and build lasting resilience
        against evolving threats.
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
      {/* trust badges / micro-points */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
          <CheckCircle className="w-5 h-5 mr-2 text-white" />
          <span>Industry-certified experts</span>
        </div>
        <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
          <CheckCircle className="w-5 h-5 mr-2 text-white" />
          <span>Outcome-driven engagements</span>
        </div>
        <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center text-white">
          <CheckCircle className="w-5 h-5 mr-2 text-white" />
          <span>Flexible delivery models</span>
        </div>
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default GRCConsultancy;
