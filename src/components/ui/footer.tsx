import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* top accent */}
      <div className="h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid: responsive, breathable spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info (logo image replaces icon + text) */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/Blue%20and%20White%20Modern%20Company%20Logo.png"
                alt="Welford Systems"
                className="h-16 sm:h-20 object-contain"
                loading="lazy"
              />
            </div>

            <p className="text-sm/6 text-background/80">
              Secure. Scalable. Smarter Identity Governance. Simplifying enterprise
              security through intelligent, automated, and scalable identity solutions.
            </p>

            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@welfordsystems.com"
                className="group flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Email info@welfordsystems.com"
              >
                <Mail className="w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="truncate">info@welfordsystems.com</span>
              </a>
              <a
                href="tel:+442034420741"
                className="group flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Call +44 203 442 0741"
              >
                <Phone className="w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>+44 203 442 0741</span>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/solutions/identity-access-governance"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Identity &amp; Access Governance
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/grc-consultancy"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  GRC Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/cloud-security"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/resources/blog"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/videos-demos"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Videos &amp; Demos
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/documentation"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-1 text-background/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Welford Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="opacity-40">•</span>
              <Link
                to="/terms-of-use"
                className="hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
