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
  badge="Welford Systems — IAG"
  title="Identity & Access Governance — Unify, Automate, and Secure Every Identity"
  subtitle="Empower your enterprise to enforce Zero Trust, eliminate standing access, and automate compliance across hybrid and multi-cloud environments."
  bullets={[
    "Unified Identity Governance",
    "Zero Trust enforcement",
    "Automated compliance workflows",
  ]}
  primaryCta={{
    label: "Request a Demo",
    href: "/demo",
    icon: <Calendar className="mr-2 h-4 w-4" />,
  }}
  secondaryCta={{
    label: "Explore Welford IAG",
    href: "/resources/videos-demos",
    icon: <Phone className="mr-2 h-4 w-4" />,
  }}
  image={{
    src: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Identity & Access Governance product overview",
  }}
  imageBadgeText="30–45 min session"
  id="demo-hero"
/>
      </section>




<section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-blue-50/30">
  {/* Simplified Background */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    {/* Soft gradient overlays */}
    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/20 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-50/10 to-transparent" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-6xl">
      {/* Centered Header Section */}
      <div className="text-center mb-16">
        {/* Centered Kicker */}
        <div className="mb-6 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide bg-white/90 backdrop-blur-xl shadow-sm"
            style={{ 
              borderColor: "rgba(3,41,85,0.15)", 
              color: "#032955",
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)"
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700" />
            </span>
            The Challenge
          </span>
        </div>

        {/* Centered Title */}
        <h2 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl mb-6">
          <span className="text-slate-900">
            Identity Risk Is{" "}
            <span className="relative inline-block bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Business Risk
              <span
                className="pointer-events-none absolute -bottom-2 left-0 right-0 h-2 rounded-full opacity-30"
                style={{
                  background: "linear-gradient(90deg, #0b4aa8 0%, #032955 50%, transparent 100%)",
                }}
              />
            </span>
          </span>
        </h2>

        {/* Centered Intro */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-light mb-8">
            Identity is the new perimeter — unmanaged access is the weakest link. With thousands of human and 
            machine identities across on-prem, SaaS, and multi-cloud, standing privileges and manual provisioning 
            can't keep pace.
          </p>
        </div>
      </div>

      {/* Challenges Grid - All cards same size */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Privilege Sprawl */}
        <div
          className="group relative rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`,
            border: '1px solid rgba(3,41,85,0.1)',
            boxShadow: '0 8px 32px rgba(2, 8, 20, 0.08), 0 1px 3px rgba(2, 8, 20, 0.04)'
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  border: '1px solid rgba(3,41,85,0.1)',
                  boxShadow: '0 4px 12px rgba(2, 8, 20, 0.05)'
                }}
              >
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-lg font-semibold text-slate-800">Privilege Sprawl</div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 font-light flex-grow">
              Excessive permissions expand the attack surface across all environments and platforms.
            </p>
          </div>
        </div>

        {/* Manual Provisioning */}
        <div
          className="group relative rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`,
            border: '1px solid rgba(3,41,85,0.1)',
            boxShadow: '0 8px 32px rgba(2, 8, 20, 0.08), 0 1px 3px rgba(2, 8, 20, 0.04)'
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-blue-700/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  border: '1px solid rgba(3,41,85,0.1)',
                  boxShadow: '0 4px 12px rgba(2, 8, 20, 0.05)'
                }}
              >
                <Settings className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-lg font-semibold text-slate-800">Manual Provisioning</div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 font-light flex-grow">
              Human workflows add delay and inconsistency to access management processes.
            </p>
          </div>
        </div>

        {/* Limited Visibility */}
        <div
          className="group relative rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`,
            border: '1px solid rgba(3,41,85,0.1)',
            boxShadow: '0 8px 32px rgba(2, 8, 20, 0.08), 0 1px 3px rgba(2, 8, 20, 0.04)'
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-700/5 to-blue-800/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  border: '1px solid rgba(3,41,85,0.1)',
                  boxShadow: '0 4px 12px rgba(2, 8, 20, 0.05)'
                }}
              >
                <Eye className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-lg font-semibold text-slate-800">Limited Visibility</div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 font-light flex-grow">
              No real-time insight into entitlements and access patterns across systems.
            </p>
          </div>
        </div>

        {/* Compliance Pressure */}
        <div
          className="group relative rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`,
            border: '1px solid rgba(3,41,85,0.1)',
            boxShadow: '0 8px 32px rgba(2, 8, 20, 0.08), 0 1px 3px rgba(2, 8, 20, 0.04)'
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-800/5 to-blue-900/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  border: '1px solid rgba(3,41,85,0.1)',
                  boxShadow: '0 4px 12px rgba(2, 8, 20, 0.05)'
                }}
              >
                <FileCheck className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-lg font-semibold text-slate-800">Compliance Pressure</div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 font-light flex-grow">
              Proving ISO 27001, SOC 2, GDPR controls is costly and time-consuming.
            </p>
          </div>
        </div>

        {/* Hybrid Complexity - Now same size as others but spans 2 columns */}
        <div
          className="group relative rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`,
            border: '1px solid rgba(3,41,85,0.1)',
            boxShadow: '0 8px 32px rgba(2, 8, 20, 0.08), 0 1px 3px rgba(2, 8, 20, 0.04)'
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/5 to-indigo-900/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                  border: '1px solid rgba(3,41,85,0.1)',
                  boxShadow: '0 4px 12px rgba(2, 8, 20, 0.05)'
                }}
              >
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-lg font-semibold text-slate-800">Hybrid Complexity</div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 font-light flex-grow">
              Azure, AWS, Entra ID, ADDS, and SaaS sprawl create governance blind spots and security gaps.
            </p>
          </div>
        </div>


      </div>
    </div>
  </div>

  {/* Section separators */}
  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
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
