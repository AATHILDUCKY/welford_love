import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, ChevronDown, X } from "lucide-react";
import LogoImage from "@/assets/welfordsystems_logo.jpeg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/* ✅ NEW: Accordion for mobile dropdowns */
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type MenuItem = { name: string; href: string; description?: string };

const NAV_HOVER_BG = "hover:bg-[#032955]/10";
const NAV_HOVER_TEXT = "hover:text-[#032955]";
const NAV_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#032955]/30";
const NAV_TRANSITION = "transition-colors duration-150";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const solutions: MenuItem[] = [
    {
      name: "Identity & Access Management",
      href: "/solutions/identity-access-management",
      description: "Comprehensive IAM solutions",
    },
    {
      name: "GRC Consultancy",
      href: "/solutions/grc-consultancy",
      description: "Governance, Risk & Compliance",
    },
    {
      name: "Cloud Security",
      href: "/solutions/cloud-security",
      description: "Secure cloud environments",
    },
  ];

  const products: MenuItem[] = [
    {
      name: "Identity & Access Governance",
      href: "/products/welford-iag",
      description: "Unified access governance platform",
    },
  ];

  const resources: MenuItem[] = [
    {
      name: "Blog",
      href: "/resources/blog",
      description: "Latest insights and updates",
    },
    {
      name: "Videos & Demos",
      href: "/resources/videos-demos",
      description: "Product demonstrations",
    },
    {
      name: "Documentation",
      href: "/resources/documentation",
      description: "Technical documentation",
    },
  ];

  // Hover popover helper (prevents flicker)
  const useHoverPopover = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [open, setOpen] = useState(false);

    const onMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setOpen(true), 80);
    };

    const onMouseLeave = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setOpen(false), 120);
    };

    return { open, setOpen, onMouseEnter, onMouseLeave };
  };

  // Reusable popover menu (for Solutions / Products / Resources)
  const NavPopover = ({
    label,
    items,
    width = 320,
  }: {
    label: string;
    items: MenuItem[];
    width?: number;
  }) => {
    const ctl = useHoverPopover();
    return (
      <Popover open={ctl.open} onOpenChange={ctl.setOpen}>
        <PopoverTrigger
          onMouseEnter={ctl.onMouseEnter}
          onMouseLeave={ctl.onMouseLeave}
          className={cn(
            "group inline-flex h-11 items-center rounded-xl px-4 text-[15px] font-semibold",
            NAV_HOVER_BG,
            NAV_HOVER_TEXT,
            NAV_RING,
            NAV_TRANSITION,
            "data-[state=open]:bg-[#032955]/10"
          )}
        >
          <span>{label}</span>
          <ChevronDown
            className={cn(
              "ml-1 h-4 w-4 shrink-0 transition-transform duration-200",
              ctl.open ? "rotate-180" : "rotate-0",
              "group-hover:text-[#032955]"
            )}
            aria-hidden="true"
          />
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="start"
          alignOffset={0}
          className={cn(
            `w-[${width}px] p-3 md:p-4 rounded-xl border shadow-lg`,
            "bg-popover text-popover-foreground"
          )}
          onMouseEnter={ctl.onMouseEnter}
          onMouseLeave={ctl.onMouseLeave}
        >
          <div className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-lg p-3",
                  "transition-all duration-150",
                  NAV_HOVER_BG,
                  NAV_HOVER_TEXT
                )}
              >
                <div className="text-[15px] font-semibold leading-none">
                  {item.name}
                </div>
                {item.description && (
                  <p className="mt-1 text-[13.5px] leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={LogoImage}
              alt="Welford Systems Logo"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="text-[18px] sm:text-lg font-bold tracking-tight text-[#032955]">
              Welford Systems
            </span>
          </Link>

          {/* Desktop Navigation (unchanged) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavPopover label="Solutions" items={solutions} width={400} />
            <NavPopover label="Products" items={products} width={320} />
            <NavPopover label="Resources" items={resources} width={320} />

            {/* Partners */}
            <Link
              to="/partners"
              className={cn(
                "inline-flex h-11 items-center rounded-xl px-4 text-[15px] font-semibold",
                NAV_HOVER_BG,
                NAV_HOVER_TEXT,
                NAV_RING,
                NAV_TRANSITION
              )}
            >
              Partners
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              className={cn(
                "inline-flex h-11 items-center rounded-xl px-4 text-[15px] font-semibold",
                NAV_HOVER_BG,
                NAV_HOVER_TEXT,
                NAV_RING,
                NAV_TRANSITION
              )}
            >
              About Us
            </Link>

            {/* Careers */}
            <Link
              to="/careers"
              className={cn(
                "inline-flex h-11 items-center rounded-xl px-4 text-[15px] font-semibold",
                NAV_HOVER_BG,
                NAV_HOVER_TEXT,
                NAV_RING,
                NAV_TRANSITION
              )}
            >
              Careers
            </Link>
          </nav>

          {/* CTA Buttons (desktop unchanged) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button
                variant="ghost"
                className={cn(
                  "font-semibold text-[15px]",
                  NAV_HOVER_TEXT,
                  NAV_RING,
                  NAV_TRANSITION
                )}
              >
                Contact
              </Button>
            </Link>
            <Link to="/demo">
              <Button className="text-[15px] font-semibold shadow-sm hover:shadow transition">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu — UI ONLY CHANGED BELOW */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={NAV_RING} aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[88vw] sm:w-[360px] p-0">
              {/* Sticky header inside sheet with CLEAR CLOSE BUTTON */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 backdrop-blur px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={LogoImage}
                    alt="Welford Systems Logo"
                    className="h-9 w-9 rounded-md object-cover"
                  />
                  <div className="text-base font-bold text-[#032955]">Welford Systems</div>
                </div>

                {/* ✅ Clear Close action (large tap target) */}
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                      NAV_RING
                    )}
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                    <span className="hidden xs:inline">Close</span>
                  </Button>
                </SheetClose>
              </div>

              <div className="px-2 py-2">
                {/* ✅ Clear note: list items are dropdowns */}
                <div className="px-2 pb-2 pt-1 text-xs text-muted-foreground">
                  Browse sections below — tap to expand the dropdown.
                </div>

                {/* ✅ Accordion dropdowns for mobile */}
                <Accordion type="multiple" className="w-full">
                  {/* Solutions */}
                  <AccordionItem value="solutions" className="border-b">
                    <AccordionTrigger className="px-2 py-3 text-left text-[15px] font-semibold">
                      Solutions
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-3">
                      <div className="flex flex-col">
                        {solutions.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "rounded-lg px-3 py-2.5 text-[15px] font-medium",
                              "border border-transparent hover:border-border",
                              NAV_HOVER_BG,
                              NAV_HOVER_TEXT,
                              NAV_TRANSITION
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <div>{item.name}</div>
                            {item.description && (
                              <div className="mt-1 text-[13px] text-muted-foreground">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Products */}
                  <AccordionItem value="products" className="border-b">
                    <AccordionTrigger className="px-2 py-3 text-left text-[15px] font-semibold">
                      Products
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-3">
                      <div className="flex flex-col">
                        {products.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "rounded-lg px-3 py-2.5 text-[15px] font-medium",
                              "border border-transparent hover:border-border",
                              NAV_HOVER_BG,
                              NAV_HOVER_TEXT,
                              NAV_TRANSITION
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <div>{item.name}</div>
                            {item.description && (
                              <div className="mt-1 text-[13px] text-muted-foreground">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Resources */}
                  <AccordionItem value="resources" className="border-b">
                    <AccordionTrigger className="px-2 py-3 text-left text-[15px] font-semibold">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent className="px-1 pb-3">
                      <div className="flex flex-col">
                        {resources.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                              "rounded-lg px-3 py-2.5 text-[15px] font-medium",
                              "border border-transparent hover:border-border",
                              NAV_HOVER_BG,
                              NAV_HOVER_TEXT,
                              NAV_TRANSITION
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <div>{item.name}</div>
                            {item.description && (
                              <div className="mt-1 text-[13px] text-muted-foreground">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Singles (Partners / About / Careers) */}
                <div className="mt-2 space-y-1 px-2">
                  <Link
                    to="/partners"
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-[15px] font-semibold",
                      "border border-transparent hover:border-border",
                      NAV_HOVER_BG,
                      NAV_HOVER_TEXT,
                      NAV_TRANSITION
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Partners
                  </Link>

                  <Link
                    to="/company/about"
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-[15px] font-semibold",
                      "border border-transparent hover:border-border",
                      NAV_HOVER_BG,
                      NAV_HOVER_TEXT,
                      NAV_TRANSITION
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  <Link
                    to="/company/careers"
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-[15px] font-semibold",
                      "border border-transparent hover:border-border",
                      NAV_HOVER_BG,
                      NAV_HOVER_TEXT,
                      NAV_TRANSITION
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                </div>

                {/* CTAs */}
                <div className="mt-4 space-y-3 border-t border-border px-2 pt-4">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full text-[15px] font-semibold"
                    >
                      Contact
                    </Button>
                  </Link>
                  <Link to="/demo" onClick={() => setIsOpen(false)}>
                    <Button className="w-full text-[15px] font-semibold">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
