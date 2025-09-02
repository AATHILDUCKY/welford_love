import Layout from "@/components/layout/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Eye,
  Lock,
  Users,
  RefreshCw,
  BarChart,
  CheckCircle,
  Server,
  Cloud,
  Database,
  Settings,
  Calendar,
  Phone,
} from "lucide-react";
import HeroSection2 from "@/components/ui/herosection2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faMicrosoft,
  faGoogle,
  faGithub,
  faGitlab,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faCloud,
  faDatabase,
  faShieldHalved,
  faUserShield,
  faUsers,
  faSitemap,
  faBucket,
  faMicrochip,
  faIdBadge,
  faLock,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";


const ProductsIAG = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Enterprise-Wide Access Control",
      description:
        "Every system across your enterprise is brought under Welford Governance, ensuring all access is standardized and monitored.",
    },
    {
      icon: Users,
      title: "User-Initiated Access Requests",
      description:
        "Employees, contractors, and technical accounts can request access to any system through Welford IAG.",
    },
    {
      icon: Zap,
      title: "Automated Approval & Provisioning",
      description:
        "Access requests go through a governed approval process, and once approved, Welford IAG automatically provisions access without human administrator involvement for the designated period.",
    },
    {
      icon: Eye,
      title: "Complete Visibility & Compliance",
      description:
        "System owners, managers, and auditors gain a real-time view of who has access to what, ensuring transparency and compliance with security mandates.",
    },
    {
      icon: Lock,
      title: "Governance for Human & Technical Accounts",
      description:
        "Welford IAG manages access not just for human users but also for non-personal technical accounts, including service principals, application accounts, and database schemas.",
    },
    {
      icon: RefreshCw,
      title: "Powerful Leaver Management",
      description:
        "Upon an employee or contractor's leaving date, Welford IAG automatically expires all entitlements, ensuring no lingering access remains across any system.",
    },
  ];

  const features = [
    {
      icon: BarChart,
      title: "Comprehensive Access Analytics",
      description:
        "Visual dashboards and reports showing access patterns, risk scores, and compliance status across your entire ecosystem.",
    },
    {
      icon: CheckCircle,
      title: "Automated Certification Campaigns",
      description:
        "Streamline access reviews with configurable certification campaigns that automatically route to the right approvers.",
    },
    {
      icon: Server,
      title: "Hybrid Environment Support",
      description:
        "Govern access consistently across on-premises, cloud, and hybrid environments from a single control plane.",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description:
        "Built for modern infrastructures with elastic scalability, microservices architecture, and API-first design.",
    },
    {
      icon: Database,
      title: "Unified Identity Repository",
      description:
        "Centralized source of truth for all identities and their relationships across business applications and IT systems.",
    },
    {
      icon: Settings,
      title: "Policy-Based Automation",
      description:
        "Define once, apply everywhere with reusable policy templates that automate access decisions across your environment.",
    },
  ];

  const integrations = [
    "Azure Cloud",
    "Linux",
    "Oracle",
    "SAP",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "LDAP",
    "Google Groups",
    "GCP",
    "GitLab",
    "GitHub",
    "GCP Project",
    "GCP Compute",
    "GCP Cloud SQL",
    "GCP Bucket",
    "Azure VM",
    "Azure SQL",
    "Azure Blob Storage",
    "AWS SSO IAM Identity Center",
    "AWS IAM Role",
    "AWS",
    "Amazon EKS",
    "Amazon EC2",
    "Amazon Aurora",
    "Microsoft AD",
  ];

  return (
    <Layout>
      {/* Hero Section (compact spacing) */}
      <HeroSection2
        badge="See Welford IAG in action"
        title="Schedule a Demo"
        subtitle="Get a personalized walkthrough tailored to your organization's needs."
        bullets={[
          "Live, guided product walkthrough",
          "Answers to your specific questions",
          "Use-case scenarios based on your environment",
        ]}
        primaryCta={{
          label: "Request Demo",
          href: "/demo", // use route instead of hash for consistency
          icon: <Calendar className="mr-2 h-4 w-4" />,
        }}
        secondaryCta={{
          label: "Talk to Sales",
          href: "tel:+18001234567",
          icon: <Phone className="mr-2 h-4 w-4" />,
        }}
        image={{
          src: "https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Live product walkthrough preview",
        }}
        imageBadgeText="30–45 min session"
        id="demo-hero"
      />

      {/* Product Overview (tightened) */}
      <section className="py-16 lg:py-24">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
      {/* Image on the left now */}
      <div className="bg-muted rounded-xl p-6 lg:p-8 border border-border">
        <img
          src="https://images.pexels.com/photos/7418077/pexels-photo-7418077.jpeg"
          alt="Welford IAG Dashboard"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Content on the right */}
      <div>
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
          <Shield className="w-4 h-4" />
          <span>Welford Identity & Access Governance</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
          Why Welford IAG?
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground mb-4 leading-relaxed">
          Our flagship solution, Welford Identity & Access Governance (IAG)
          Suite, is built to transform how you manage access across your
          enterprise. By implementing a true Zero Trust model, we help
          eliminate standing access, enforce password-free authentication
          for Linux servers, and govern access across cloud platforms,
          databases, and applications with ease.
        </p>
        <p className="text-base lg:text-lg text-foreground mb-6 leading-relaxed">
          Welford IAG replaces fragmented, manual processes with automated,
          policy-driven workflows to govern access across applications,
          servers, databases, and cloud services.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="bg-secondary/30 px-3 py-1.5 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            <span>Zero Trust Ready</span>
          </div>
          <div className="bg-secondary/30 px-3 py-1.5 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="bg-secondary/30 px-3 py-1.5 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            <span>GDPR & HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Key Capabilities */}
      <section className="py-16 lg:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Key Capabilities</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient">
              Seamless, Automated Access Lifecycle Management
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Welford IAG provides the tools you need to govern access at scale
              while reducing operational overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="card-feature group">
                <CardHeader className="pb-3">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base lg:text-lg font-semibold">
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Settings className="w-4 h-4" />
                <span>Advanced Features</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gradient">
                Beyond Basic IGA
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welford IAG goes beyond traditional identity governance with
                features designed for today's dynamic environments and evolving
                threats.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base lg:text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm lg:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Welford IAG Features"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>





      {/* Integrations */}

<section className="relative py-14 lg:py-20 bg-white overflow-hidden">
  {/* soft brand backdrop */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(50rem 50rem at 50% -10%, rgba(3,41,85,0.05) 0%, transparent 60%)",
    }}
  />
  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[rgba(3,41,85,0.12)]" />
  <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-[rgba(3,41,85,0.12)]" />

  <div className="container mx-auto px-4 lg:px-8">
    {/* Header */}
    <div className="text-center space-y-2 mb-10">
      <span
        className="inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium"
        style={{
          color: "#032955",
          backgroundColor: "rgba(3,41,85,0.08)",
          border: "1px solid rgba(3,41,85,0.2)",
        }}
      >
        Integrations
      </span>
      <h2 className="text-2xl lg:text-4xl font-bold">
        The Welford IAG Integrations Catalog
      </h2>
      <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
        Empower your enterprise with deep Welford IAG integrations for identity lifecycle,
        automated provisioning, and strong compliance.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
      {integrations.map((name, i) => {
        // icon resolver for all listed items
        const iconFor = (n: string) => {
          const s = n.toLowerCase();

          // brands / platforms
          if (s.includes("aws")) return faAws;
          if (s.includes("azure")) return faMicrosoft;
          if (s.includes("microsoft ad")) return faSitemap;
          if (s === "linux") return faLinux;
          if (s.includes("gcp") || s.includes("google cloud")) return faGoogle;
          if (s.includes("github")) return faGithub;
          if (s.includes("gitlab")) return faGitlab;

          // resource types / services
          if (s.includes("compute") || s.includes("vm") || s.includes("ec2")) return faServer;
          if (s.includes("eks") || s.includes("project")) return faDiagramProject;
          if (s.includes("bucket") || s.includes("blob")) return faBucket;

          // databases
          if (s.includes("sql") || s.includes("postgres") || s.includes("mysql") || s.includes("aurora") || s.includes("oracle")) return faDatabase;
          if (s.includes("mongo")) return faDatabase;

          // identity & directory
          if (s.includes("iam role") || s.includes("user") || s.includes("privilege")) return faUserShield;
          if (s.includes("sso") || s.includes("identity center")) return faIdBadge;
          if (s.includes("ldap") || s.includes("directory")) return faSitemap;
          if (s.includes("groups")) return faUsers;

          // security / generic cloud & infra
          if (s.includes("security") || s.includes("lock")) return faLock;
          if (s.includes("cloud")) return faCloud;
          if (s.includes("compute") || s.includes("micro") || s.includes("cpu")) return faMicrochip;

          // default fallback
          return faShieldHalved;
        };

        return (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: "rgba(3,41,85,0.15)" }}
            title={name}
          >
            {/* icon badge */}
            <div
              className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-sm group-hover:scale-105 transition-transform"
              style={{
                color: "#032955",
                backgroundColor: "rgba(3,41,85,0.08)",
                border: "1px solid rgba(3,41,85,0.2)",
              }}
            >
              <FontAwesomeIcon icon={iconFor(name)} className="text-base" />
            </div>
            {/* name */}
            <div className="text-center">
              <div className="font-medium text-sm truncate max-w-[9rem]">{name}</div>
              <div className="text-[11px] text-muted-foreground">Connector</div>
            </div>
          </div>
        );
      })}
    </div>

    {/* CTA */}
    <div className="text-center mt-10">
      <Button
        variant="outline"
        size="sm"
        className="border-[#032955] text-[#032955] hover:bg-[#032955] hover:text-white"
      >
        View All Integrations
      </Button>
    </div>
  </div>
</section>




     {/* Use Cases (Enhanced, Welford theme) */}
<section className="relative py-16 lg:py-24" style={{ backgroundColor: "rgba(3,41,85,0.03)" }}>
  {/* subtle top/bottom hairlines for structure */}
  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[rgba(3,41,85,0.12)]" />
  <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-[rgba(3,41,85,0.12)]" />

  <div className="container mx-auto px-4 lg:px-8">
    {/* Header */}
    <div className="text-center space-y-3 mb-12">
      <div
        className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium"
        style={{ backgroundColor: "rgba(3,41,85,0.10)", color: "#032955", border: "1px solid rgba(3,41,85,0.25)" }}
      >
        <Users className="w-4 h-4" style={{ color: "#032955" }} />
        <span>Use Cases</span>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold">
        Solving Real Challenges
      </h2>
      <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
        Practical outcomes your teams and auditors will feel from day one.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <Card
        className="relative overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        style={{ borderColor: "rgba(3,41,85,0.18)" }}
      >
        {/* brand accent bar */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: "#032955" }} />
        <CardHeader className="pb-3 pt-6">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: "rgba(3,41,85,0.10)", border: "1px solid rgba(3,41,85,0.25)" }}
          >
            <Shield className="w-5 h-5" style={{ color: "#032955" }} />
          </div>
          <CardTitle className="text-lg">Compliance &amp; Audit Readiness</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="leading-relaxed">
            Automate evidence collection for SOC 2, ISO 27001, GDPR, HIPAA and other frameworks
            with detailed access reports and audit trails.
          </CardDescription>

          {/* micro-benefits */}
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#032955" }} />
              Real-time SoD &amp; access attestations
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#032955" }} />
              Exportable audit-ready evidence
            </li>
          </ul>

          {/* quiet CTA */}
          <div className="mt-5">
            <button
              className="text-sm font-medium"
              style={{ color: "#032955" }}
            >
              Learn more →
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card
        className="relative overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        style={{ borderColor: "rgba(3,41,85,0.18)" }}
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: "#032955" }} />
        <CardHeader className="pb-3 pt-6">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: "rgba(3,41,85,0.10)", border: "1px solid rgba(3,41,85,0.25)" }}
          >
            <Lock className="w-5 h-5" style={{ color: "#032955" }} />
          </div>
          <CardTitle className="text-lg">Privileged Access Management</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="leading-relaxed">
            Extend PAM controls to all users with just-in-time elevation, session monitoring, and
            governed approvals for sensitive access.
          </CardDescription>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#032955" }} />
              Ephemeral access; no standing privileges
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#032955" }} />
              Full session visibility &amp; traceability
            </li>
          </ul>
          <div className="mt-5">
            <button className="text-sm font-medium" style={{ color: "#032955" }}>
              Learn more →
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Card 3 */}
      <Card
        className="relative overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        style={{ borderColor: "rgba(3,41,85,0.18)" }}
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: "#032955" }} />
        <CardHeader className="pb-3 pt-6">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: "rgba(3,41,85,0.10)", border: "1px solid rgba(3,41,85,0.25)" }}
          >
            <RefreshCw className="w-5 h-5" style={{ color: "#032955" }} />
          </div>
          <CardTitle className="text-lg">Identity Lifecycle Automation</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="leading-relaxed">
            Automate onboarding, role changes, and offboarding across all connected systems with
            policy-based workflows.
          </CardDescription>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#032955" }} />
              Zero-touch provisioning &amp; de-provisioning
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#032955" }} />
              Time-bound access with automatic expiry
            </li>
          </ul>
          <div className="mt-5">
            <button className="text-sm font-medium" style={{ color: "#032955" }}>
              Learn more →
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="py-20" style={{ backgroundColor: "#032955" }}>
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-4xl mx-auto space-y-8">
      {/* small kicker chip */}
      <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 bg-white/10">
        Ready to transform access?
      </span>

      <h2 className="text-3xl lg:text-5xl font-bold text-white">
        Let’s get started.
      </h2>

      <p className="text-lg lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
        It’s time to discover how Identity Security can help make your organization
        more secure and cyber resilient. Contact us today to request a demo or a
        meeting with one of our experts.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        {/* Primary CTA */}
        <Button
          size="lg"
          className="bg-white text-[#032955] hover:bg-white/90 text-base lg:text-lg px-7 py-3 shadow-md"
          asChild
        >
          <Link to="/demo">
            Schedule Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>

        {/* Secondary CTA */}
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-[#032955] hover:bg-white/90 text-base lg:text-lg px-7 py-3 shadow-md"
          asChild
        >
          <Link to="/contact">Contact Sales</Link>
        </Button>
      </div>

      {/* trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
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

export default ProductsIAG;
