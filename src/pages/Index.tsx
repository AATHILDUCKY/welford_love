import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BenefitsGrid from "@/components/ui/benefits-grid";
import CtaSection from "@/components/ui/cta-section";
import CompanyOverviewCentered from "@/components/ui/companyoverview";

//components
import IntegrationEcosystem from "@/components/ui/ScrollItems";
import HeroSection from '@/components/ui/hero-section';
import KeyCapabilities from "@/components/ui/key-capabilities";
import { 
  Play, 
  CheckCircle, 
  Settings, 
  Clock, 
  Eye, 
  Database, 
  Brain, 
  Users,
  Key,
  Shield,
  Cloud,
  BarChart3,
  ArrowRight,
  Star
} from "lucide-react";
import Layout from "@/components/layout/layout";

const Index = () => {
  const features = [
    {
      icon: Settings,
      title: "Autonomous Access Provisioning",
      description: "Eliminate tickets and administrator involvement with fully automated access provisioning and revocation based on time-bound entitlements."
    },
    {
      icon: Clock,
      title: "Universal Just-in-Time (JIT) Access",
      description: "Grant access only when it's needed—and automatically revoke it when it's no longer required. Every access is governed like privileged access."
    },
    {
      icon: Eye,
      title: "Real-Time Visibility and Control",
      description: "System owners and approvers gain instant visibility into who has what access across systems or by user—no more waiting for audit exports or admin reports."
    },
    {
      icon: Database,
      title: "Granular Entitlement Management",
      description: "Define and manage access at a fine-grained level for Linux, Microsoft 365, Azure, AWS, GCP, and enterprise databases, with support for session-based controls and no standing credentials."
    },
    {
      icon: Brain,
      title: "Intelligent Recommendations",
      description: "Use AI-powered insights to detect entitlement risks, suggest access improvements, and continuously strengthen your governance posture."
    },
    {
      icon: Users,
      title: "Non-Personal Technical Accounts (NPTA)",
      description: "Securely manage service principals, application identities, and schema-based technical accounts across databases and platforms."
    },
    {
      icon: Key,
      title: "Identity Lifecycle Automation",
      description: "Automate onboarding, offboarding, and role changes for joiners, movers, and leavers using policy-based workflows."
    },
    {
      icon: Shield,
      title: "Single Sign-On (SSO) & MFA",
      description: "Enable seamless authentication and strong security through integrated SSO and multi-factor authentication."
    },
    {
      icon: Key,
      title: "Password Management & Key Vault",
      description: "Securely store and manage credentials, rotate passwords, and integrate with Key Vaults for secure handling of sensitive assets."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Unified Access Governance",
      description: "Centrally manage access across all enterprise resources in one powerful platform."
    },
    {
      icon: CheckCircle,
      title: "Built for Zero Trust",
      description: "Treat all access as privileged and eliminate standing entitlements by default."
    },
    {
      icon: Settings,
      title: "Autonomous & Scalable",
      description: "Automate provisioning at scale without administrative bottlenecks or tickets."
    },
    {
      icon: Eye,
      title: "Continuous Visibility",
      description: "See every entitlement in real time—by system or by user—for smarter, faster decisions."
    },
    {
      icon: BarChart3,
      title: "Compliance Made Easy",
      description: "Align with ISO 27001, Zero Trust, and other standards with full audit trails and policy enforcement."
    },
    {
      icon: Cloud,
      title: "Rapid, Flexible Integration",
      description: "Easily plug into your existing IT landscape using standards-based connectors."
    }
  ];

  const integrations = [
    { name: "Azure", category: "Cloud Platform" },
    { name: "AWS", category: "Cloud Platform" },
    { name: "GCP", category: "Cloud Platform" },
    { name: "Azure Entra ID", category: "Identity Provider" },
    { name: "LDAP", category: "Identity Provider" },
    { name: "Active Directory", category: "Identity Provider" },
    { name: "Oracle", category: "Database" },
    { name: "SQL Server", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Oracle ERP", category: "Enterprise App" },
    { name: "Salesforce", category: "Enterprise App" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Product Overview */}
      <CompanyOverviewCentered
        id="overview"
        title="All identities. One converged,"
        highlight="AI-powered platform"
        description="Welford IAG provides centralized, intelligent access governance across the enterprise."
        imageSrc="/src/assets/welfordw33.webp"
        imageAlt="Welford IAG platform overview"
        brandColor="#032955"
        accent="gradient"
      />

      {/* Key Capabilities */}
      <KeyCapabilities  />

      {/* Why Choose Welford IAG */}
      <BenefitsGrid title="Why Choose Welford IAG?" benefits={benefits} brandColor="#032955" />

      {/* Integration Ecosystem */}
      < IntegrationEcosystem />

      {/* CTA Section */}
      <CtaSection />

    </Layout>
  );
};

export default Index;
