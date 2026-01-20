import { Link } from "react-router-dom";
// import { useState } from "react";
import footerBg from "@/assets/footer-bg-original.svg";
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

const Footer = () => {
  return (
    <footer className=" overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
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
            {/* <div className="flex flex-col gap-2">
              <p className="text-foreground/80 tracking-wide text-sm">
                Ready to transform your workflow?
              </p>
              <AnimatedButton trackingSource="footer_demo">SCHEDULE A DEMO</AnimatedButton>
            </div> */}
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