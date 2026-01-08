import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import TeamSectionPage from './team-card';
import { Link } from 'react-router-dom';

const stats = [
    {
        value: "10+",
        label: "Diagnostic centres",
        sublabel: "use Somatiq worldwide",
    },
    {
        value: "1000+",
        label: "Patients impacted",
        sublabel: "per day",
    },
    {
        value: "20+",
        label: "Radiologists",
        sublabel: "in our network",
    },
    {
        value: "5",
        label: "Cities Served",
        sublabel: "Expanding healthcare reach",
    }
];

// Counter component for animating numeric values
function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Extract numeric part and suffix (like +, % etc)
    const numericMatch = value.match(/([\d,]+)(.*)/);
    const numericValue = numericMatch ? numericMatch[1].replace(/,/g, '') : '0';
    const suffix = numericMatch ? numericMatch[2] : '';

    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => {
        // Format with commas if the original had commas
        const hasCommas = value.includes(',');
        const num = Math.round(latest);
        return hasCommas ? num.toLocaleString() : num.toString();
    });

    useEffect(() => {
        if (isInView) {
            const targetValue = parseInt(numericValue, 10);
            const animation = animate(count, targetValue, { duration });
            return animation.stop;
        }
    }, [isInView, count, numericValue, duration]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
            {isInView ? <motion.span>{rounded}</motion.span> : "0"}
            {suffix}
        </span>
    );
}

function StatsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Mission statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
                        Built by <span className="text-foreground font-medium">Radiologists</span> and{' '}
                        <span className="text-foreground font-medium">Engineers</span> who understand the pain.
                        Our mission: help you <span className="text-primary font-medium">see clearer</span>,{' '}
                        <span className="text-primary font-medium">diagnose with confidence</span>, and reduce cognitive burden.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <Counter value={stat.value} />
                            <span className="text-sm md:text-base tracking-wide font-light text-foreground mb-1">
                                {stat.label}
                            </span>
                            {stat.sublabel && (
                                <span className="text-xs md:text-sm text-muted font-extralight tracking-wide">
                                    {stat.sublabel}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function TeamSection() {
    return (
        <section className="relative py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <TeamSectionPage />
            </div>
        </section>
    );
}

function AdvisorsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative py-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                        Advisors
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Guided by Experts
                    </h2>
                    <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
                        Our technical and medical advisors bring decades of experience in healthcare technology and clinical practice.
                    </p>
                </motion.div>

                {/* Placeholder cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {/* Technical Advisors Card */}
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-2">Technical Advisors</h3>
                        <p className="text-sm text-foreground/50 font-light">
                            Profiles coming soon
                        </p>
                    </div>

                    {/* Medical Advisors Card */}
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-2">Medical Advisors</h3>
                        <p className="text-sm text-foreground/50 font-light">
                            Profiles coming soon
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CTASection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center p-12 md:p-16 rounded-2xl border border-border/50 bg-white/[0.02]"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        Let's Talk
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto mb-10">
                        Have questions about SOMATIQ? Want to learn more about how we can help your diagnostic center? We'd love to hear from you.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-black font-medium text-base px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Get in Touch
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function FeatureSection() {
    return (
        <div>
            <StatsSection />
            <TeamSection />
            <AdvisorsSection />
            <CTASection />
        </div>
    );
}
