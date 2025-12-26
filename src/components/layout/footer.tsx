import { ChevronsUp } from "lucide-react";
import footerBg from "@/assets/footer-bg.png";
import { AnimatedButton } from "@/components/common/animated-button";
import { Separator } from "@/components/common/separator";

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

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-normal text-footer-foreground mb-4 leading-tight">
              Better Imaging Leads to Better Healthcare
            </h2>
            <p className="text-muted font-extralight tracking-wide text-base">
              &lt;Fast reporting, precise diagnosis, no wasted time&gt;
            </p>
          </div>

          <AnimatedButton>SCHEDULE A DEMO</AnimatedButton>
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
            © 2025 Somatiq AI Labs Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
