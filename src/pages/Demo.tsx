// src/pages/Demo.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  CheckCircle,
  Users,
  Phone,
  Loader2,
} from "lucide-react";
import Layout from "@/components/layout/layout";
import { useToast } from "@/hooks/use-toast";
import HeroSection2 from "@/components/ui/herosection2";

const API_BASE =
  (import.meta as any)?.env?.VITE_API_BASE ?? "https://welfordsystems.com/api";

type DemoCreate = {
  name: string;
  email: string;
  company_name: string;
  job_title?: string | null;
  message?: string | null;
};

type DemoOut = {
  id: number;
  name: string;
  email: string;
  company_name: string;
  job_title?: string | null;
  message?: string | null;
  created_at: string;
};

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const expectations = [
    "Live, guided product walkthrough",
    "Answers to your specific questions",
    "Use-case scenarios based on your environment",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // simple client-side validation
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({ title: "Enter a valid email", variant: "destructive" });
      return;
    }
    if (!formData.company.trim()) {
      toast({ title: "Company is required", variant: "destructive" });
      return;
    }

    const payload: DemoCreate = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company_name: formData.company.trim(),
      job_title: formData.jobTitle.trim() || null,
      message: formData.message.trim() || null,
    };

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Failed to request demo (${res.status})`);
      }

      const _data: DemoOut = await res.json();
      toast({
        title: "Demo requested!",
        description:
          "Thank you for your interest. We'll contact you soon to schedule your demo.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        jobTitle: "",
        message: "",
      });
    } catch (err: any) {
      toast({
        title: "Couldn’t submit your request",
        description: err?.message ?? "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    /**
     * Global accent theme:
     * #032955 => hsl(212 93% 17%)
     */
    <div
      style={
        {
          ["--primary" as any]: "212 93% 17%",
          ["--primary-foreground" as any]: "0 0% 100%",
          ["--ring" as any]: "212 93% 17%",
        } as React.CSSProperties
      }
      className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(3,41,85,0.06),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(3,41,85,0.05),transparent_55%)]"
    >
      <Layout>
        {/* HERO (reusable component) */}
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
            href: "#request-demo",
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

        {/* FORM + INFO */}
        <section
          id="request-demo"
          className="pb-12 pt-6 sm:pb-16 sm:pt-10 lg:pb-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Demo Request Form */}
              <Card className="border border-primary/15 shadow-sm shadow-[rgba(3,41,85,0.08)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        autoComplete="name"
                        className="focus-visible:ring-primary"
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        inputMode="email"
                        autoComplete="email"
                        className="focus-visible:ring-primary"
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        required
                        autoComplete="organization"
                        className="focus-visible:ring-primary"
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Enter your job title"
                        autoComplete="organization-title"
                        className="focus-visible:ring-primary"
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Requirements</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you'd like to see in the demo"
                        rows={4}
                        className="focus-visible:ring-primary"
                        disabled={submitting}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 w-4 h-4" />
                          Request Demo
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right column */}
              <div className="space-y-8">
                <Card className="border border-primary/15 shadow-sm shadow-[rgba(3,41,85,0.08)]">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Clock className="mr-3 w-6 h-6 text-primary" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {expectations.map((expectation, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{expectation}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border border-primary/15 shadow-sm shadow-[rgba(3,41,85,0.08)]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Personalized Experience</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our demos are tailored to your specific industry, use cases,
                      and security requirements. You'll see exactly how Welford IAG
                      can address your organization's unique challenges.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Demo sessions typically last 30-45 minutes and include time
                      for Q&amp;A.
                    </p>
                  </CardContent>
                </Card>

                {/* Placeholder for spacing consistency
                
                <Card className="bg-white/70 backdrop-blur border border-primary/15">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      Need Help Now?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Have urgent questions or need immediate assistance? Our team is
                      ready to help.
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 hover:bg-primary/5"
                        asChild
                      >
                        <a href="tel:+18001234567">Call +1 (800) 123-4567</a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 hover:bg-primary/5"
                        asChild
                      >
                        <a href="mailto:support@welfordsystems.com">Email Support</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                */}
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="pb-14">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl border border-primary/15 bg-white/70 p-6 sm:p-8 text-center shadow-sm backdrop-blur">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Ready to see <span className="text-primary">Welford IAG</span> in action?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Book a personalized session and get your questions answered live.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <a href="#request-demo">
                    <Calendar className="mr-2 h-4 w-4" />
                    Request Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:info@welfordsystems.com">Talk to Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Demo;
