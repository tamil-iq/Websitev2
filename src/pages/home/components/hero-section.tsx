
import { AnimatedButton } from '@/components/common/animated-button';
import { RippleButton } from "@/components/ui/ripple-button";
import { ChevronsRightIcon } from '@/components/ui/right-icon';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
          From patient registration to final report — unified RIS-PACS with native intelligence.
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
          <AnimatedButton onClick={() => console.log('Schedule demo clicked')}>
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
      </div>
    </section>
  )
}

export default HeroSection;


//hero section based on the figma design
// const HeroSection = ({ loading }: HeroSectionProps) => {
//   if (loading) return <HeroSectionSkeleton />;

//   return (
//    <section className="relative w-full overflow-hidden bg-black h-[80vh]">
//   <div 
//     className="pointer-events-none absolute inset-0"
//     style={{
//       background: 'linear-gradient(to bottom, black 0%, var(--background-gradient) 100%)',
//       opacity: 0.20
//     }}
//   />
  
//   <div className="relative w-full max-w-7xl mx-24 px-4 pt-24 sm:px-6 lg:px-8 z-10">
//     <div>
//       <div>
//         <h1 className="mt-5 text-4xl font-normal tracking-wide text-foreground sm:text-5xl">
//           One Intelligent platform for all <br/>your Diagnostic Imaging
//         </h1>
  
//         <p className="mt-6 max-w-xl text-sm tracking-wider leading-relaxed text-muted font-light ">
//           Unified RIS-PACS with AI-enabled workflows seamlessly connecting Radiologists, Clinicians and Patients
//         </p>
  
//         <div className="mt-10 flex flex-col items-start gap-4">
//           <AnimatedButton onClick={() => console.log('Schedule demo clicked')}>
//             schedule a demo
//           </AnimatedButton>
//           <span className="text-sm text-muted tracking-wide font-extralight">Trusted by Bengaluru's largest imaging chain</span>
//         </div>
//       </div>
//     </div>
//   </div>
  
//   <img 
//     src={heroimage} 
//     alt="" 
//     className="absolute bottom-0 right-0 left-14 top-1/4 w-full h-auto object-cover"
//     style={{ transform: 'translateY(10%)' }}
//   />
// </section>
//   );
// };