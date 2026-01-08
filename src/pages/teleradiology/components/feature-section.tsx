import { ShieldCheck, ClipboardList, Headset, Zap, Clock, Users, FileCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Service-focused stats for teleradiology
const serviceStats = [
    {
        value: "100",
        suffix: "%",
        label: "Qualified",
        sublabel: "MD/DNB subspecialists",
    },
    {
        value: "24/7",
        suffix: "",
        label: "Expert reporting",
        sublabel: "never compromised",
    },
    {
        value: "2x",
        suffix: "",
        label: "Peer review",
        sublabel: "on every critical finding",
    }
];

// Modalities we support
const modalities = [
    { name: "CT", fullName: "Computed Tomography" },
    { name: "MRI", fullName: "Magnetic Resonance Imaging" },
    { name: "X-Ray", fullName: "Digital Radiography" },
    { name: "PET-CT", fullName: "Positron Emission Tomography" },
    { name: "Ultrasound", fullName: "Sonography" },
    { name: "Mammography", fullName: "Breast Imaging" },
];

const features = [
    {
        icon: ShieldCheck,
        title: "Subspecialty Precision",
        description: "Every case read by a radiologist trained in that specific modality. Neuro, MSK, body, chest — matched expertise, not generalists.",
    },
    {
        icon: Zap,
        title: "Thorough, Not Just Fast",
        description: "Yes, we're fast. But speed never comes at the cost of accuracy. Every report is complete, clinically relevant, and actionable.",
    },
    {
        icon: ClipboardList,
        title: "Built-in Peer Review",
        description: "Critical findings are double-read. Discrepancies are tracked, reviewed, and learned from. Quality isn't a checkbox — it's the culture.",
    },
    {
        icon: Headset,
        title: "Direct Radiologist Access",
        description: "Questions about a report? Speak directly with the reading radiologist. No call centers, no runaround — real clinical collaboration.",
    },
];

const howItWorksSteps = [
    {
        step: "01",
        title: "Connect",
        description: "We integrate with your existing PACS/RIS. No hardware changes, no workflow disruption.",
        icon: Users,
    },
    {
        step: "02",
        title: "Route",
        description: "Cases are automatically routed to available subspecialty radiologists based on your rules.",
        icon: FileCheck,
    },
    {
        step: "03",
        title: "Report",
        description: "Reports delivered directly into your system. Seamless, as if read in-house.",
        icon: Clock,
    },
];

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

    // Handle non-numeric or special values like "24/7"
    if (value === "24/7" || !/\d/.test(value)) {
        return (
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground"
            >
                {value}
            </motion.span>
        );
    }

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground"
        >
            {value.includes('<') && '<'}{displayValue}{suffix}
        </motion.span>
    );
}

function ServiceStatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-24 px-6"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7BE5]/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4">
                    {serviceStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                            className="flex flex-col items-center text-center px-8 py-6"
                        >
                            <Counter
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                                delay={0.2 + (index * 0.1)}
                            />
                            <span className="text-lg md:text-xl tracking-wide font-light text-foreground mt-3">
                                {stat.label}
                            </span>
                            <span className="text-base text-muted font-light tracking-wide">
                                {stat.sublabel}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function ModalitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 relative"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                        All Modalities.{' '}
                        <span className="bg-gradient-to-r from-[#FF7BE5] to-[#c084fc] bg-clip-text text-transparent">
                            Matched Expertise.
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto">
                        Every study read by a radiologist trained in that specific modality.
                    </p>
                </motion.div>

                {/* Modalities Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {modalities.map((modality, index) => (
                        <motion.div
                            key={modality.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.08) }}
                            className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-border/50 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#FF7BE5]/30 transition-all duration-300"
                        >
                            {/* Large modality name */}
                            <span className="text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-[#FF7BE5] transition-colors duration-300">
                                {modality.name}
                            </span>
                            {/* Full name */}
                            <span className="text-sm text-muted font-light text-center">
                                {modality.fullName}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function KeyCapabilitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 relative"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                    Quality You Can Trust
                </h2>
                <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto">
                    In a market racing to the bottom, we chose a different path. Every report carries the weight of a patient's diagnosis.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
            >
                {/* Center intersection point */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />

                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        className={cn(
                            "flex flex-col items-center justify-center gap-5 p-12 border border-border/50",
                            index === 0 && 'border-t-0 border-l-0',
                            index === 1 && 'border-t-0 border-r-0',
                            index === 2 && 'border-b-0 border-l-0',
                            index === 3 && 'border-b-0 border-r-0'
                        )}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                            className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-muted/50"
                        >
                            <feature.icon className="h-10 w-10 text-muted" strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="text-center text-2xl md:text-3xl tracking-wide text-foreground font-medium">
                            {feature.title}
                        </h3>
                        <p className="text-center text-base md:text-lg tracking-wide text-muted font-light max-w-md">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

function HowItWorksSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 relative"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#FF7BE5]/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto">
                        Get started in days, not months. We handle the integration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {howItWorksSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
                            className="relative flex flex-col items-center text-center p-8"
                        >
                            {/* Step number */}
                            <span className="text-7xl md:text-8xl font-extralight text-muted/20 mb-4">
                                {step.step}
                            </span>

                            {/* Icon */}
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-muted/30 mb-6">
                                <step.icon className="h-9 w-9 text-foreground/70" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-base md:text-lg text-muted font-light">
                                {step.description}
                            </p>

                            {/* Arrow connector (hidden on last item and mobile) */}
                            {index < howItWorksSteps.length - 1 && (
                                <div className="hidden md:block absolute top-1/4 -right-4 text-muted/30">
                                    <ArrowRight className="w-10 h-10" strokeWidth={1} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function JoinNetworkSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 relative"
        >
            <div className="max-w-5xl mx-auto">
                {/* For Hospitals/Diagnostic Centers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-16 p-16 rounded-2xl border border-border/50 bg-white/[0.02]"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        Your Patients Deserve Better
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto mb-10">
                        Partner with radiologists who care about getting it right — not just getting it done. Let's talk about what quality reporting looks like for your center.
                    </p>
                    <button className="bg-white text-black font-medium text-base px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                        REQUEST A DEMO
                    </button>
                </motion.div>

                {/* For Radiologists */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center p-16 rounded-2xl border border-[#FF7BE5]/20 bg-[#FF7BE5]/5"
                >
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                        Are You a Radiologist?
                    </h3>
                    <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto mb-8">
                        Join a network that values precision over volume. Work on cases matched to your subspecialty, with time to do your best work.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:info@somatiq.ai"
                            className="inline-flex items-center gap-2 text-base text-foreground/80 hover:text-foreground transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>info@somatiq.ai</span>
                        </a>
                        <span className="text-muted/50 hidden sm:inline">|</span>
                        <a
                            href="/careers"
                            className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors underline underline-offset-4"
                        >
                            View Open Positions
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default function FeatureSection() {
    return (
        <div>
            <ServiceStatsSection />
            <ModalitiesSection />
            <KeyCapabilitiesSection />
            <HowItWorksSection />
            <JoinNetworkSection />
        </div>
    );
}
