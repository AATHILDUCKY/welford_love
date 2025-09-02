import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Users, Globe, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/layout";

const About = () => {
  const features = [
    "Automate identity lifecycle management",
    "Integrate with cloud platforms, databases, and applications", 
    "Enable compliance and security through unified access governance"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Secure. Scalable.</span>{" "}
              <span className="gradient-text">Smarter Identity Governance.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient" asChild>
                <Link to="/demo">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Who We Are</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Welford Systems is a modern Identity and Access Governance (IAG) company helping enterprises automate access management, enforce least-privilege policies, and achieve Zero Trust security at scale.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl lg:text-4xl font-bold">What We Do</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To simplify enterprise security through intelligent, automated, and scalable identity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted by Enterprises */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Trusted by Enterprises</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Welford Systems is part of Microsoft for Startups and trusted by global organizations for secure identity governance.
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Microsoft for Startups Partner
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Security?
            </h2>
            <p className="text-xl text-background/80">
              Join the organizations that trust Welford Systems for their identity governance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient" asChild>
                <Link to="/demo">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;