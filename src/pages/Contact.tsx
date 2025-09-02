// src/pages/Contact.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import Layout from "@/components/layout/layout";
import { useToast } from "@/hooks/use-toast";
import HeroSection2 from "@/components/ui/herosection2";

const API_BASE =
  (import.meta as any)?.env?.VITE_API_BASE ?? "http://127.0.0.1:8000";

type ContactCreate = {
  name: string;
  email: string;
  company?: string | null;
  message: string;
};

type ContactOut = {
  id: number;
  name: string;
  email: string;
  company?: string | null;
  message: string;
  created_at: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactCreate>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // simple validation
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({ title: "Enter a valid email", variant: "destructive" });
      return;
    }
    if (!formData.message.trim()) {
      toast({ title: "Message is required", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const payload: ContactCreate = {
        ...formData,
        company: formData.company?.trim() ? formData.company.trim() : null,
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // try to read error from API (may be JSON or text)
        let errMsg = "Failed to send message";
        try {
          const t = await res.text();
          errMsg = t || errMsg;
        } catch {}
        throw new Error(errMsg);
      }

      const data: ContactOut = await res.json();

      toast({
        title: "Message sent!",
        description:
          "Thank you for contacting us. We'll get back to you soon.",
      });

      // reset
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Couldn’t send your message",
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
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        badge="We're here to help"
        title="Talk to Us"
        subtitle="Have questions? Need help? Our team is here to assist you."
        bullets={[
          "Get answers from our experts",
          "Discuss your unique requirements",
          "Receive quick and personalized support",
        ]}
        primaryCta={{
          label: "Email Support",
          href: "mailto:info@welfordsystems.com",
          icon: <Mail className="mr-2 h-4 w-4" />,
        }}
        secondaryCta={{
          label: "Call Us",
          href: "tel:+18001234567",
          icon: <Phone className="mr-2 h-4 w-4" />,
        }}
        image={{
          src: "https://images.pexels.com/photos/3783229/pexels-photo-3783229.jpeg",
          alt: "Customer support team",
        }}
        imageBadgeText="Available 24/7"
        id="contact-hero"
      />

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
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
                      disabled={submitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      disabled={submitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here"
                      rows={5}
                      required
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
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">
                          support@welfordsystems.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-muted-foreground">+1 (800) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Office</h4>
                        <p className="text-muted-foreground">
                          123 Security Street
                          <br />
                          Cybersecurity District
                          <br />
                          Tech City, TC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Customer Support</h3>
                  <p className="text-muted-foreground mb-4">
                    For existing customers, access our dedicated support portal
                    for faster assistance.
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://support.welfordsystems.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Support Portal
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
