import { ChevronsUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import footerBg from "@/assets/footer-bg.jpg";
import { AnimatedButton } from "@/components/common/animated-button";
import { Separator } from "@/components/common/separator";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee";

const portfolioItems = [
  { name: "Platform", path: "/", description: "Unified RIS-PACS solution" },
  { name: "Radone Reporting", path: "/portfolio/radone", description: "Radiology reporting solution" },
  { name: "Billing System", path: "/portfolio/billing", description: "Healthcare billing management" },
];

const trustedCompanies = [
  { name: "NewMed", logo: "/newmed-without-bg.png" },
  { name: "OM Diagnostics", logo: "/om-without-bg.png" },
  { name: "Prima", logo: "/prima-without-bg.png" },
  { name: "TX Healthcare", logo: "/tx-without-bg.png" },
];

export const TrustedBySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-sm text-muted/70 font-light tracking-widest uppercase">
            Trusted by
          </span>
        </div>
        <Marquee className="w-full max-w-full min-h-[100px]">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {trustedCompanies.map((company, index) => (
              <MarqueeItem className="h-20 w-auto px-8 flex items-center justify-center group/logo" key={index}>
                <img
                  alt={company.name}
                  className="h-20 w-auto max-w-[180px] object-contain grayscale brightness-0 invert opacity-60 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110"
                  src={company.logo}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 mx-auto mb-12 text-muted hover:text-foreground transition-colors group"
          aria-label="Scroll to top of page"
        >
          <ChevronsUp className="w-4 h-4 animate-bounce-slow" aria-hidden="true" />
          <span className="text-sm tracking-wider font-extralight">scroll to the top</span>
          <ChevronsUp className="w-4 h-4 animate-bounce-slow" aria-hidden="true" />
        </button>

        {/* Mission Statement - Prominent */}
        <div className="text-center mb-16">
          <p className="text-xs text-muted font-light tracking-[0.2em] uppercase mb-4">Our Mission</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Building imaging infrastructure
            <br />
            for a <span className="text-gradient-radiologist">billion</span> people.
          </h2>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and CTA - takes more space */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <img src="/logo/footer-logo.png" alt="Somatiq Logo" className='w-36' />
            <p className="text-foreground/60 text-sm font-light max-w-xs">
              Every second matters. Every detail counts.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-foreground/80 font-light tracking-wide text-sm">
                Ready to transform your workflow?
              </p>
              <AnimatedButton>SCHEDULE A DEMO</AnimatedButton>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-foreground font-medium text-sm tracking-wide mb-4">
              Navigate
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Platform
              </Link>
              {/* Portfolio with hover dropdown */}
              <div className="relative group">
                <Link
                  to="/portfolio"
                  className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Portfolio
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background/95 backdrop-blur-sm border border-white/10 rounded-lg py-2 min-w-[200px] shadow-xl">
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-white/5 transition-colors"
                      >
                        <span className="text-foreground/80 text-sm font-light block">{item.name}</span>
                        <span className="text-foreground/40 text-xs font-light">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/teleradiology"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Teleradiology
              </Link>
              <Link
                to="/about"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-foreground font-medium text-sm tracking-wide mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@somatiq.ai"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                info@somatiq.ai
              </a>
              <a
                href="https://linkedin.com/company/somatiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
                aria-label="Connect with Somatiq on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-foreground/50 font-extralight tracking-wide text-sm">
            © 2026 Somatiq AI Tech Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
