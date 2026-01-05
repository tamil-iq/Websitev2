
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon, Zap } from 'lucide-react';

export const TrustBadge = ({description, icon: Icon = Zap}: {description: string, icon?: LucideIcon}) => {
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
      <span className="relative flex h-4 w-4">
        {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> */}
        <Icon className="h-4 w-4 text-[#ff7be5]" />
      </span>
      <span className="lg:text-sm text-xs text-muted font-light tracking-wide">
       {description}
      </span>
    </motion.div>
  );
};