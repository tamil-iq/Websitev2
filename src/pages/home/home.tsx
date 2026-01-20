import HeroSection from './components/hero-section';
import SecureSection from './components/secure-section';
import StatsSection from './components/stats-section';
import { HomePageSections } from './components/dashboard-section';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/seo';
import { motion } from 'framer-motion';

// Section divider component for seamless transitions
const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'subtle' | 'accent' }) => (
  <div className="relative w-full">
    <div
      className={cn(
        "mx-auto transition-all duration-500 hidden md:block",
        variant === 'default' && "h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent",
        variant === 'subtle' && "h-24 w-full",
        variant === 'accent' && "h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      )}
    />
  </div>
);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const currentRef = heroRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show gradient when hero section is NOT intersecting (i.e., scrolled past it)
        setShowGradient(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <SEO
        title="Somatiq | Intelligent RIS-PACS Platform for Radiology"
        description="One intelligent platform for your entire radiology workflow. Unified RIS-PACS with native intelligence, from patient registration to final report."
        canonical="/"
      />

      {/* Fixed gradient overlay at the top - appears after hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showGradient ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="pointer-events-none fixed top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent z-10"
      />

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection />
      </div>

      {/* Main content with unified background */}
      <div className="relative">
        {/* Persistent subtle gradient orbs - fixed position for continuity */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showGradient ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showGradient ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
            className="absolute top-[50%] right-[10%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showGradient ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="absolute bottom-[20%] left-[30%] w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[80px]"
          />
        </div>

        {/* Sections with seamless flow */}
        <div className="relative z-[1]">
          {/* Radiologists Section */}
          <SecureSection hideLocalGradient={showGradient} />

          {/* Subtle divider */}
          <SectionDivider variant="subtle" />

          {/* Stats Section */}
          <StatsSection />

          {/* Accent divider before features */}
          <SectionDivider variant="accent" />

          {/* Features & Testimonials */}
          <HomePageSections />
        </div>
      </div>
    </div>
  );
};

export default Home;
