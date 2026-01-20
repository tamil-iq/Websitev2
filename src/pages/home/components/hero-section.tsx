
import { AnimatedButton } from '@/components/common/animated-button';
import { RippleButton } from "@/components/ui/ripple-button";
import { ChevronsRightIcon } from '@/components/ui/right-icon';
import { motion, useInView } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import { trackEngagement } from '@/lib/analytics';

// Lazy load 3D component for better initial load performance
const Hero3D = lazy(() => import('@/components/ui/hero-3d'));

const TrustBadge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-primary/5"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
      </span>
      <span className="text-sm text-white/70 font-light tracking-wide">
        Trusted by Bengaluru's largest imaging chain
      </span>
    </motion.div>
  );
};

const HeroSection = () => {
  const trustBadgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const buttonsRef = useRef(null);

  const trustBadgeInView = useInView(trustBadgeRef, { once: true, margin: "-100px" });
  const headlineInView = useInView(headlineRef, { once: true, margin: "-100px" });
  const subheadlineInView = useInView(subheadlineRef, { once: true, margin: "-100px" });
  const buttonsInView = useInView(buttonsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        </div>
      }>
        <Hero3D />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 xl:max-w-7xl lg:max-w-4xl mx-auto text-center space-y-4">
        {/* Trust badge */}
        <motion.div
          ref={trustBadgeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={trustBadgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TrustBadge />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          ref={headlineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight pb-2"
        >
          <span className="block text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            One <span className="hero-wave-text">Intelligent</span> Platform
          </span>
          <span className="block mt-3 text-white/90">for Modern Radiology.</span>
        </motion.h1>

        {/* Subheadline - two lines, more prominent */}
        <motion.div
          ref={subheadlineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={subheadlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-2xl mx-auto pt-8 space-y-2"
        >
          <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
            RIS, PACS, and Reporting — Unified.
          </p>
          <p className="text-lg md:text-xl text-white/60">
            So radiologists can focus on diagnosis, not software.
          </p>
        </motion.div>

        {/* CTA buttons - positioned to overlap with sphere */}
        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 md:pt-12"
        >
          <AnimatedButton trackingSource="hero_demo">
            SCHEDULE A DEMO
          </AnimatedButton>
          <RippleButton onClick={() => {
            trackEngagement('explore_platform', 'hero_section');
            const radiologistsSection = document.getElementById('radiologists-section');
            if (radiologistsSection) {
              radiologistsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }} >
            <div className="flex items-center gap-2">
              <span>Explore platform</span>
              <ChevronsRightIcon/>
            </div>
          </RippleButton>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;
