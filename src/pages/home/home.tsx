import HeroSection from './components/hero-section';
import SecureSection from './components/secure-section';
import { HomePageSections } from './components/dashboard-section';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Fixed gradient overlay at the top - appears after hero section */}
      <div 
        className={cn(
          "pointer-events-none fixed top-0 left-0 right-0 h-1/2 bg-linear-to-b from-[#0855b4]/25 to-transparent z-10 transition-opacity duration-300",
          showGradient ? "opacity-100" : "opacity-0"
        )}
      />
      
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <SecureSection hideLocalGradient={showGradient} />
      <HomePageSections />
    </div>
  );
};

export default Home;
