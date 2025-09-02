import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Welford Systems</span>
            </div>
            <p className="text-sm text-background/80">
              Secure. Scalable. Smarter Identity Governance. Simplifying enterprise security through intelligent, automated, and scalable identity solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@welfordsystems.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/identity-access-management" className="text-background/80 hover:text-primary transition-colors">
                  Identity & Access Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/grc-consultancy" className="text-background/80 hover:text-primary transition-colors">
                  GRC Consultancy
                </Link>
              </li>
              <li>
                <Link to="/solutions/cloud-security" className="text-background/80 hover:text-primary transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-background/80 hover:text-primary transition-colors">
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
                <Link to="/resources/blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/videos-demos" className="text-background/80 hover:text-primary transition-colors">
                  Videos & Demos
                </Link>
              </li>
              <li>
                <Link to="/resources/documentation" className="text-background/80 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a 
                  href="https://support.welfordsystems.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-background/80 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-background/80 hover:text-primary transition-colors">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Welford Systems. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;