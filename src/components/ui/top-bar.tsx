import { Phone, Mail, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  return (
    <div className="bg-[#032955] text-blue-50 border-b border-blue-800">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Contact Info */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+18001234567" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>+94 () 123-4567</span>
            </a>
            <a href="mailto:support@welfordsystems.com" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@welfordsystems.com</span>
            </a>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/welfordsystems" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/welford-systems" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;