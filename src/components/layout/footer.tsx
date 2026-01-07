import { ChevronsUp } from "lucide-react";
import footerBg from "@/assets/footer-bg.png";
import { AnimatedButton } from "@/components/common/animated-button";
import { Separator } from "@/components/common/separator";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee";

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
    <footer className=" bg-background overflow-hidden relative ">
      <div
        className="absolute inset-0 top-56 pointer-events-none object-cover"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      />

      <div className="relative z-10 max-w-4/5 mx-auto px-6 py-12">
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 mx-auto mb-16 text-footer-muted hover:text-footer-foreground transition-colors group"
        >
          <ChevronsUp className="w-4 h-4 animate-bounce-slow" />
          <span className="text-sm tracking-wider font-extralight">scroll to the top</span>
          <ChevronsUp className="w-4 h-4 animate-bounce-slow" />
        </button>

        {/* Vision Statement - Left aligned */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-xs text-muted/60 font-light tracking-widest uppercase mb-3">Our Mission</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground leading-tight">
              Building imaging infrastructure
              <br />
              for a <span className="text-gradient-radiologist">billion</span> people.
            </h2>
          </div>

          {/* CTA section */}
          <div className="flex flex-col items-start gap-3 md:pt-8">
            <p className="text-foreground/80 font-light tracking-wide text-sm">
              Ready to transform your imaging workflow?
            </p>
            <AnimatedButton>SCHEDULE A DEMO</AnimatedButton>
          </div>
        </div>

        {/* Footer links section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-4">
            <img src="/logo/footer-logo.png" alt="Somatiq Logo" className='w-40' />
            <div className="text-foreground/90 text-sm">
              <p className="font-extralight tracking-wide">Every second matters.</p>
              <p className="font-extralight tracking-wide">Every detail counts.</p>
            </div>
          </div>

          {/* Links columns */}
          <div className="flex gap-16 md:gap-24">
            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h3 className="text-foreground font-normal text-sm tracking-wide">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-foreground/80 font-light text-xs hover:text-footer-foreground transition-colors hover:underline tracking-wide"
                >
                  INSTAGRAM
                </a>
                <a
                  href="#"
                  className="text-foreground/80 font-light text-xs hover:text-footer-foreground transition-colors tracking-wide hover:underline"
                >
                  LINKEDIN
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="text-foreground font-normal text-sm tracking-wide">
                Legal
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-foreground/80 font-light tracking-wide text-xs hover:text-footer-foreground transition-colors hover:underline"
                >
                  PRIVACY POLICY
                </a>
                <a
                  href="#"
                  className="text-foreground/80 font-light tracking-wide text-xs hover:text-footer-foreground transition-colors hover:underline"
                >
                  TERMS & CONDITIONS
                </a>
              </div>
            </div>
          </div>
        </div>
        <Separator />

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-foreground/80 font-extralight tracking-wide text-sm">
            © 2026 Somatiq AI Tech Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
