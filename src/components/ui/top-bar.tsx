import { Phone, Mail, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#032955] text-blue-50 border-b border-blue-800">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700" />

      <div className="container mx-auto px-3 sm:px-4">
        {/* Force single row + allow scroll on mobile */}
        <div className="flex items-center justify-between gap-4 h-12 overflow-x-auto whitespace-nowrap">
          {/* Contact Info */}
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a
              href="tel:+442034420741"
              className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-md px-1"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              {/* Only show number on ≥sm */}
              <span className="hidden sm:inline">+44 203 442 0741</span>
            </a>

            <a
              href="mailto:info@welfordsystems.com"
              className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-md px-1"
              aria-label="Email us"
            >
              <Mail className="w-4 h-4" />
              {/* Only show email on ≥sm */}
              <span className="hidden sm:inline">info@welfordsystems.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-md"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/share/164hve3zBS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-md"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/welfordsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://youtube.com/@welfordsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/60 rounded-md"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
