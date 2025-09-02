import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) => (
    <Link
      to={to}
      className={`nav-link font-medium text-sm transition-colors hover:text-primary ${
        isActive(to) ? "text-primary active" : "text-foreground"
      } ${className}`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-background border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl">Welford Systems</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link font-medium text-sm text-foreground hover:text-primary flex items-center space-x-1">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/solutions/identity-access-management" className="w-full">
                    Identity & Access Management
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/grc-consultancy" className="w-full">
                    GRC Consultancy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/solutions/cloud-security" className="w-full">
                    Cloud Security
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/partners">Partners</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link font-medium text-sm text-foreground hover:text-primary flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/resources/blog" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/videos-demos" className="w-full">
                    Videos & Demos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources/documentation" className="w-full">
                    Documentation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link font-medium text-sm text-foreground hover:text-primary flex items-center space-x-1">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/company/about" className="w-full">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company/careers" className="w-full">
                    Careers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button className="btn-gradient" asChild>
              <Link to="/demo">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLink to="/" className="block py-2">Home</NavLink>
                <div className="space-y-2">
                  <span className="font-medium text-sm text-muted-foreground">Solutions</span>
                  <div className="pl-4 space-y-2">
                    <NavLink to="/solutions/identity-access-management" className="block py-1">Identity & Access Management</NavLink>
                    <NavLink to="/solutions/grc-consultancy" className="block py-1">GRC Consultancy</NavLink>
                    <NavLink to="/solutions/cloud-security" className="block py-1">Cloud Security</NavLink>
                  </div>
                </div>
                <NavLink to="/partners" className="block py-2">Partners</NavLink>
                <div className="space-y-2">
                  <span className="font-medium text-sm text-muted-foreground">Resources</span>
                  <div className="pl-4 space-y-2">
                    <NavLink to="/resources/blog" className="block py-1">Blog</NavLink>
                    <NavLink to="/resources/videos-demos" className="block py-1">Videos & Demos</NavLink>
                    <NavLink to="/resources/documentation" className="block py-1">Documentation</NavLink>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-medium text-sm text-muted-foreground">Company</span>
                  <div className="pl-4 space-y-2">
                    <NavLink to="/company/about" className="block py-1">About Us</NavLink>
                    <NavLink to="/company/careers" className="block py-1">Careers</NavLink>
                    <NavLink to="/contact" className="block py-1">Contact Us</NavLink>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                  <Button className="btn-gradient w-full" asChild>
                    <Link to="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;