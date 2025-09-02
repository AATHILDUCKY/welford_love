import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Zap, Eye } from 'lucide-react';
import { Button } from './button';

const HeroSection = () => {
  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
        {/* Modern geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/40"></div>
          
          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMEg2MFY2MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDMyOTU1IiBzdHJva2Utd2lkdGg9IjAuNSIgLz48L3N2Zz4=')]"></div>
          </div>
          
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgc3Ryb2tlPSIjMDMyOTU1IiBzdHJva2Utd2lkdGg9IjAuMyIgLz48bGluZSB4MT0iNjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjYwIiBzdHJva2U9IiMwMzI5NTUiIHN0cm9rZS13aWR0aD0iMC4zIiAvPjwvc3ZnPg==')]"></div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-blue-100/50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-blue-100/50"></div>
          
          {/* Subtle decorative elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-blue-200/20 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200/20 rounded-lg transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                  style={{ backgroundColor: "#03295510", color: "#032955" }}
                >
                  <Shield className="w-4 h-4 mr-2" style={{ color: "#032955" }} />
                  Enterprise Identity Governance Platform
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-800">Secure Access.</span>{' '}
                  <span className="text-gray-800">Simplify</span>{' '}
                  <span style={{ color: "rgba(3, 41, 85, 0.8)" }}>Governance.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Welford IAG is a unified, cloud-native identity and access governance
                  platform built to simplify access management across your enterprise.
                  Designed with Zero Trust principles at its core.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center bg-white/70 p-3 rounded-lg backdrop-blur-sm">
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: "#03295520" }}>
                      <Zap className="w-5 h-5" style={{ color: "#032955" }} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Just-in-Time Access</span>
                  </div>
                  <div className="flex items-center bg-white/70 p-3 rounded-lg backdrop-blur-sm">
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: "#03295520" }}>
                      <Eye className="w-5 h-5" style={{ color: "#032955" }} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Real-Time Visibility</span>
                  </div>
                  <div className="flex items-center bg-white/70 p-3 rounded-lg backdrop-blur-sm">
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: "#03295520" }}>
                      <Shield className="w-5 h-5" style={{ color: "#032955" }} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Zero Trust Security</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild style={{ backgroundColor: "#032955", color: "white" }}>
                  <Link to="/demo" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-colors duration-300"
                  style={{ borderColor: "#032955", color: "#032955" }}
                  asChild
                >
                  <Link to="/resources/videos-demos" className="flex items-center">
                    <Play className="mr-2 w-4 h-4" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white transition-transform duration-300 hover:shadow-xl">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/Ge-d085a6HI?si=RebX3S7et4Y3FjKH&rel=0"
                    title="Welford IAG Security Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#032955" }}>99.9%</div>
                  <div className="text-xs text-gray-500">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
