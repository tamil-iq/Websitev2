import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 100000, suffix: '+', label: 'Scans Processed' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 100, suffix: '+', label: 'Active Radiologists' },
];

const AnimatedCounter = ({
  value,
  suffix,
  isInView
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Easing function for smooth deceleration
      const progress = step / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      current = value * easedProgress;

      setDisplayValue(current);

      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  const formatValue = (val: number) => {
    if (value >= 1000) {
      return Math.floor(val).toLocaleString();
    }
    if (value < 100 && suffix === '%') {
      return val.toFixed(1);
    }
    return Math.floor(val).toString();
  };

  return (
    <span className="tabular-nums">
      {formatValue(displayValue)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 px-6 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-light tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
