import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import TeamSectionPage from './team-card';
import { AnimatedButton } from '@/components/common/animated-button';

const stats = [
    {
        value: "10",
        suffix: "+",
        label: "Diagnostic Centres",
    },
    {
        value: "1000",
        suffix: "+",
        label: "Patients Daily",
    },
    {
        value: "50",
        suffix: "+",
        label: "Radiologists",
    }
];

// Counter component
function Counter({ value, suffix = "", isInView, delay }: { value: string; suffix?: string; isInView: boolean; delay: number }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const numericValue = parseInt(value.replace(/\D/g, ''));
        if (isNaN(numericValue)) return;

        let currentValue = 0;
        const increment = numericValue / 60;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    setDisplayValue(numericValue);
                    clearInterval(interval);
                } else {
                    setDisplayValue(Math.round(currentValue));
                }
            }, 20);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [isInView, value, delay]);

    return (
        <span className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            {displayValue}{suffix}
        </span>
    );
}

// Traction Section - combines badges and stats in a clean layout
function TractionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                {/* Badges row - subtle, inline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-16"
                >
                    <a
                        href="https://www.nvidia.com/en-in/startups/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#76B900]/30 bg-[#76B900]/5 hover:bg-[#76B900]/10 transition-colors"
                    >
                        <div className="w-5 h-5 rounded bg-[#76B900] flex items-center justify-center">
                            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span className="text-sm text-foreground/80">NVIDIA Inception</span>
                    </a>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-foreground/80">Live & Commercialized</span>
                    </div>
                </motion.div>

                {/* Stats - horizontal, compact */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            className="text-center"
                        >
                            <Counter
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                                delay={0.3 + (index * 0.1)}
                            />
                            <p className="text-sm text-foreground/50 font-light mt-1 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-6 relative"
        >
            <div className="max-w-5xl mx-auto">
                <TeamSectionPage />
            </div>
        </motion.section>
    );
}

function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-6 relative"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center p-12 rounded-2xl border border-border/50 bg-white/[0.02]"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
                        Ready to Modernize Your Workflow?
                    </h2>
                    <p className="text-base md:text-lg text-foreground/60 font-light max-w-xl mx-auto mb-8">
                        Join diagnostic centers across India already using Somatiq.
                    </p>
                    <AnimatedButton>
                        SCHEDULE A DEMO
                    </AnimatedButton>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default function FeatureSection() {
    return (
        <div>
            <TractionSection />
            <TeamSection />
            <CTASection />
        </div>
    );
}
