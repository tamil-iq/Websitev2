
import { AnimatedButton } from '@/components/common/animated-button';
// import heroimage from "@/assets/homepage/hero-image.png";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee"
import { RippleButton } from "@/components/ui/ripple-button";
import { ChevronsRightIcon } from '@/components/ui/right-icon';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';



const trustedCompanies = [
  { name: "NewMed", logo: "/newmed-without-bg.png" },
  { name: "OM Diagnostics", logo: "/om-without-bg.png" },
  { name: "Prima", logo: "/prima-without-bg.png" },
  { name: "TX Healthcare", logo: "/tx-without-bg.png" },
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
        Trusted by India's leading diagnostic/hospital networks
      </span>
    </motion.div>
  );
};




const HeroSection = () => {

  const trustBadgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const buttonsRef = useRef(null);
  const logosRef = useRef(null);

  const trustBadgeInView = useInView(trustBadgeRef, { once: true, margin: "-100px" });
  const headlineInView = useInView(headlineRef, { once: true, margin: "-100px" });
  const subheadlineInView = useInView(subheadlineRef, { once: true, margin: "-100px" });
  const buttonsInView = useInView(buttonsRef, { once: true, margin: "-100px" });
  const logosInView = useInView(logosRef, { once: true, margin: "-50px" });

  return (
 <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden ">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
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
          className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight pb-2 "
        >
          <span className="block text-gradient">One <span>Intelligent</span> platform for your</span>
          <span className="block mt-2 text-gradient">entire radiology workflow</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          ref={subheadlineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={subheadlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted leading-relaxed tracking-wide font-light"
        >
          From patient registration to final report — unified RIS-PACS with native
          intelligence at every step. <br/><span className="font-light text-foreground tracking-wide"> One platform. One vendor.
          Complete focus on diagnosis.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          ref={buttonsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <AnimatedButton onClick={() => console.log('Schedule demo clicked')}>
            schedule a demo
          </AnimatedButton>
          <RippleButton onClick={() => {
            const everythingSection = document.getElementById('everything-section');
            if (everythingSection) {
              everythingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }} >
            <div className="flex items-center gap-2">
              <span>Explore platform </span>
              <ChevronsRightIcon/>
            </div>
          </RippleButton>
        </motion.div>

        {/* Client logos */}
        <motion.div 
          ref={logosRef}
          initial={{ opacity: 0, y: 40 }}
          animate={logosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="pt-16 md:pt-24"
        >
          <div className="w-full max-w-full overflow-x-hidden mx-auto px-4">
                  <div className="text-center mb-8">
                    <label  className="text-muted font-extralight text-xl tracking-wide">
                      Trusted by:
                    </label>
                  </div>
                  <Marquee className="w-full max-w-full min-h-[120px]">
                    <MarqueeFade side="left" />
                    <MarqueeFade side="right" />
                    <MarqueeContent>
                      {trustedCompanies.map((company, index) => (
                        <MarqueeItem className="h-24 w-auto px-8 flex items-center justify-center" key={index}>
                          <img
                            alt={company.name}
                            className="h-24 w-auto max-w-[200px] object-contain grayscale brightness-0 invert"
                            src={company.logo}
                            onError={() => {
                              console.error('Failed to load logo:', company.logo);
                            }}
                          />
                        </MarqueeItem>
                      ))}
                    </MarqueeContent>
                  </Marquee>
                </div>
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