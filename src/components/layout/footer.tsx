import { ChevronsUp } from "lucide-react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import footerBg from "@/assets/footer-bg.jpg";
import { AnimatedButton } from "@/components/common/animated-button";
import { Separator } from "@/components/common/separator";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee";
import { trackContactClick, trackOutboundLink } from "@/lib/analytics";

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
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Logo and CTA */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-6">
            <img src="/logo/footer-logo.png" alt="Somatiq Logo" className='w-36' />
            <p className="text-foreground/60 text-sm max-w-xs">
              Every second matters. Every detail counts.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-foreground/80 tracking-wide text-sm">
                Ready to transform your workflow?
              </p>
              <AnimatedButton trackingSource="footer_demo">SCHEDULE A DEMO</AnimatedButton>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground font-medium text-sm tracking-wide mb-4">
              Products
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Platform
              </Link>
              <Link
                to="/portfolio/radone"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Radone Reporting
              </Link>
              <Link
                to="/portfolio/billing"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Billing System
              </Link>
              <Link
                to="/teleradiology"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Teleradiology
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground font-medium text-sm tracking-wide mb-4">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/about#team"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Our Team
              </Link>
              <Link
                to="/blog"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <a
                href="https://linkedin.com/company/somatiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
                onClick={() => trackOutboundLink('linkedin')}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Careers */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground font-medium text-sm tracking-wide mb-4">
              Careers
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/careers"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Open Positions
              </Link>
              <Link
                to="/careers#why"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Why Somatiq?
              </Link>
              <a
                href="mailto:careers@somatiq.ai"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
                onClick={() => trackContactClick('footer_careers_email')}
              >
                careers@somatiq.ai
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground font-medium text-sm tracking-wide mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@somatiq.ai"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
                onClick={() => trackContactClick('footer_email')}
              >
                info@somatiq.ai
              </a>
              <Link
                to="/contact"
                className="text-foreground/60 font-light text-sm hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
              <span className="text-foreground/40 font-light text-xs mt-2">
                Bengaluru, India
              </span>
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
