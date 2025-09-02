import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Users,
  Key,
  Eye,
  FileCheck,
  Settings,
  ArrowRight,
  Calendar,
  Phone,
} from "lucide-react";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";

const IdentityAccessManagement = () => {
  const solutions = [
    {
      icon: Users,
      title: "Identity Lifecycle Management",
      description:
        "Automate user provisioning, deprovisioning, and role changes throughout the employee lifecycle.",
    },
    {
      icon: Shield,
      title: "Access Governance",
      description:
        "Implement comprehensive access controls and governance policies across all systems and applications.",
    },
    {
      icon: Key,
      title: "Privileged Access Management (PAM)",
      description:
        "Secure and monitor privileged accounts with just-in-time access and session recording.",
    },
    {
      icon: Eye,
      title: "Passwordless & Context-Aware Authentication",
      description:
        "Enable secure, frictionless authentication based on user context and risk assessment.",
    },
    {
      icon: FileCheck,
      title: "Access Request & Approval Workflows",
      description:
        "Streamline access requests with automated approval workflows and policy enforcement.",
    },
    {
      icon: Settings,
      title: "Compliance & Audit Readiness",
      description:
        "Maintain continuous compliance with automated reporting and comprehensive audit trails.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section (replaced with HeroSection2; brand accents use #032955) */}
      <section className="relative">
        {/* subtle brand tint backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 60rem at 50% -10%, rgba(3,41,85,0.06) 0%, transparent 60%)",
          }}
        />
        
          <HeroSection2
            badge="Welford Systems — IAM"
            title= "Secure Every Identity Govern Every Access."
            
            subtitle="At Welford Systems, we help organizations transform their cybersecurity posture through advanced Identity & Access Management (IAM) solutions that put security, compliance, and scalability at the core of your digital operations."
            bullets={[
              "Zero Trust-aligned controls",
              "Policy-based automation",
              "Human & machine identity coverage",
            ]}
            primaryCta={{
              label: "Get Started",
              href: "/demo",
              icon: <Calendar className="mr-2 h-4 w-4" />,
            }}
            secondaryCta={{
              label: "Contact Sales",
              href: "/contact",
              icon: <Phone className="mr-2 h-4 w-4" />,
            }}
            image={{
              src: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Live product walkthrough preview",
            }}
            imageBadgeText="30–45 min session"
            id="demo-hero"
          />
        
      </section>

      {/* Why IAM Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#032955" }}>
              Why Identity & Access Management Matters
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In today's threat landscape, identities are the new perimeter.
              Every user—human or machine—represents a potential entry point for attackers.
              Our comprehensive IAM solutions ensure that only the right people have
              access to the right resources at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Our IAM & IAG Solutions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#032955" }}>
              Our IAM & IAG Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <solution.icon
                    className="w-12 h-12 mb-4"
                    style={{ color: "#032955" }}
                  />
                  <h3 className="font-semibold text-xl mb-3" style={{ color: "#032955" }}>
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welford IAG Flagship */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#032955" }}>
              Welford IAG: Our Flagship IAM Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A next-gen solution that centralizes identity management, eliminates standing access,
              and enforces Zero Trust.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                n: 1,
                t: "Unified Governance",
                d: "Centralize identity management across all systems and environments",
              },
              {
                n: 2,
                t: "Automated Lifecycle",
                d: "Streamline provisioning and deprovisioning processes",
              },
              {
                n: 3,
                t: "Identity Support",
                d: "Manage both human and technical identities effectively",
              },
              {
                n: 4,
                t: "Compliance & Audit",
                d: "Maintain full visibility and auditability across all access",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(3,41,85,0.18)" }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold"
                      style={{ backgroundColor: "#032955" }}
                    >
                      {item.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2" style={{ color: "#032955" }}>
                        {item.t}
                      </h3>
                      <p className="text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (no gradient buttons; brand accents via #032955) */}
      <section
        className="py-20"
        style={{ backgroundColor: "rgba(3,41,85,0.06)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: "#032955" }}>
              Ready to Secure Your Identities?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our IAM solutions can strengthen your security posture and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Default buttons (no gradient, no custom classes) */}
              <Button asChild>
                <Link to="/demo">
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IdentityAccessManagement;
