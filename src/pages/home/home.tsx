import HeroSection from './components/hero-section';
import SecureSection from './components/secure-section';
import StatsSection from './components/stats-section';
import { HomePageSections } from './components/dashboard-section';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/common/seo';

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
      <div 
        className={cn(
          "pointer-events-none fixed top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#0855b4]/25 to-transparent z-10 transition-opacity duration-300",
          showGradient ? "opacity-100" : "opacity-0"
        )}
      />
      
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <SecureSection hideLocalGradient={showGradient} />
      <StatsSection />
      <HomePageSections />
    </div>
  );
};

export default Home;
