
import { AnimatedButton } from '@/components/common/animated-button';
import { RippleButton } from "@/components/ui/ripple-button";
import { ChevronsRightIcon } from '@/components/ui/right-icon';
import { LazyImage } from '@/components/ui/lazy-image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import dashboardImg from '@/assets/homepage/dashboard-monitoring.png';

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-gradient-radiologist tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

// Stats data
const stats = [
  { value: 100000, suffix: "+", label: "Scans processed" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 100, suffix: "+", label: "Radiologists using platform" },
];




const TrustBadge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-sm text-muted font-light tracking-wide">
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
 <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden ">
      {/* Animated gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#0EA5E9]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

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
          <span className="block text-foreground">One <span className="text-gradient-radiologist">Intelligent</span> platform for your</span>
          <span className="block mt-3 text-foreground">entire radiology workflow</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          ref={subheadlineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={subheadlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 leading-relaxed font-light pt-4"
        >
          Unified RIS-PACS that cuts reporting time in half — from registration to signed report, all in one place.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={subheadlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-semibold text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
              </span>
              <span className="text-xs md:text-sm text-muted font-light tracking-wide mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <AnimatedButton>
            SCHEDULE A DEMO
          </AnimatedButton>
          <RippleButton onClick={() => {
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

        {/* Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={buttonsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="relative mt-16 w-full max-w-5xl mx-auto"
        >
          {/* Glow effect behind the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent rounded-2xl blur-2xl -z-10 scale-105" />

          {/* Dashboard image with border and shadow */}
          <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 bg-background/50 backdrop-blur-sm">
            <LazyImage
              src={dashboardImg}
              alt="Somatiq Dashboard - Real-time monitoring and analytics for radiology workflow"
              className="w-full h-auto"
            />
            {/* Subtle gradient overlay at the bottom for fade effect */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;