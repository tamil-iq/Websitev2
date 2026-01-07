import { cn } from '@/lib/utils';
import { Separator } from '@/components/common/separator';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

// Feature data - Apple style: minimal, impactful
const features = [
    {
        id: 'reporting',
        label: "Reporting",
        title: <>Dictate. Review. Sign off. <span className="text-primary">That's it!</span></>,
        video: "/videos/ai-reporting.mp4",
        color: "59, 130, 246", // primary blue RGB
        step: 0,
    },
    {
        id: 'viewer',
        label: "Viewer",
        title: <>Workstation power. Browser simplicity. Feels like <span className="text-primary">magic!</span></>,
        video: "/videos/zero-footprint.mp4",
        color: "59, 130, 246", // primary blue RGB
        step: 1,
    },
    {
        id: 'anywhere',
        label: "Access",
        title: <>One login. Any device. Total <span className="text-primary">freedom!</span></>,
        video: "/videos/any-device.mp4",
        color: "59, 130, 246", // primary blue RGB
        step: 2,
    },
];

const testimonialData = {
    quote:
        "My reporting time reduced by nearly 50%. The platform felt familiar from day one, with virtually no learning curve—allowing me to focus on what truly matters: the patient.",
    author: {
        name: "Dr. Nikita Sridhar",
        role: "Consultant Radiologist",
        organization: "Prima Diagnostics, Bengaluru",
        avatarUrl: "",
    },
};

type ViewerSectionProps = {
    hideLocalGradient?: boolean;
};

const ViewerSection = ({ hideLocalGradient = false }: ViewerSectionProps) => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [completedCycle, setCompletedCycle] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const ROTATION_INTERVAL = 5000; // 5 seconds per feature

    // Auto-rotate logic - stops after one complete cycle
    useEffect(() => {
        if (!isAutoPlaying || !isInView || completedCycle) return;

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + (100 / (ROTATION_INTERVAL / 50));
            });
        }, 50);

        const rotationInterval = setInterval(() => {
            setActiveFeature((prev) => {
                const next = (prev + 1) % features.length;
                if (next === 0 && prev === features.length - 1) {
                    setCompletedCycle(true);
                    setIsAutoPlaying(false); // Stop auto-rotation after one cycle
                }
                return next;
            });
            setProgress(0);
        }, ROTATION_INTERVAL);

        return () => {
            clearInterval(progressInterval);
            clearInterval(rotationInterval);
        };
    }, [isAutoPlaying, isInView, completedCycle]);

    const handleFeatureClick = useCallback((index: number) => {
        setActiveFeature(index);
        setProgress(0);
        setIsAutoPlaying(false);
    }, []);

    const currentFeature = features[activeFeature];

    return (
        <section
            ref={sectionRef}
            id="radiologists-section"
            className="relative py-24 px-6 overflow-hidden bg-background"
        >
            {/* Background gradient */}
            <div className={cn(
                "pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0855b4]/25 to-transparent transition-opacity duration-300",
                hideLocalGradient ? "opacity-0" : "opacity-100"
            )} />

            <div className="relative max-w-6xl mx-auto space-y-16">

                {/* Section Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs text-primary font-medium tracking-wide">For Radiologists</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                        {["Do", "what", "you", "do", "best:"].map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                                className="inline-block text-foreground mr-[0.3em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                            className="inline-block text-gradient-radiologist"
                        >
                            Diagnose.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-light text-muted/80 max-w-xl mx-auto tracking-tight"
                    >
                        We'll handle the rest.
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Left: Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col gap-4"
                    >
                        {features.map((feature, index) => {
                            const isActive = activeFeature === index;

                            return (
                                <motion.button
                                    key={feature.id}
                                    onClick={() => handleFeatureClick(index)}
                                    className={cn(
                                        "flex-1 w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden",
                                        isActive
                                            ? "bg-white/[0.04]"
                                            : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.03] hover:border-white/[0.12]"
                                    )}
                                    style={isActive ? { borderColor: `rgba(${feature.color}, 0.4)` } : {}}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {/* Subtle gradient sweep for active card - sweeps towards the highlighted word */}
                                    {isActive && (
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: `linear-gradient(90deg, transparent 0%, rgba(${feature.color}, ${0.01 + (progress / 100) * 0.04}) ${progress}%, rgba(${feature.color}, 0.06) 100%)`,
                                            }}
                                        />
                                    )}

                                    <div className="flex items-start gap-4">
                                        {/* Feature indicator */}
                                        <div className={cn(
                                            "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                                            isActive
                                                ? "bg-primary/20 text-primary"
                                                : "bg-white/[0.05] text-muted"
                                        )}>
                                            <span className="text-lg font-light">{index + 1}</span>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            {/* Label badge */}
                                            <span className={cn(
                                                "inline-block text-xs font-light tracking-wide px-2 py-0.5 rounded-full mb-2 transition-colors duration-300",
                                                isActive
                                                    ? "bg-primary/20 text-primary"
                                                    : "bg-white/[0.05] text-muted"
                                            )}>
                                                {feature.label}
                                            </span>

                                            <h3 className={cn(
                                                "text-lg font-medium tracking-tight transition-colors duration-300",
                                                isActive ? "text-foreground" : "text-foreground/70"
                                            )}>
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Right: Video/Image Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="relative flex flex-col"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-2xl blur-3xl opacity-50" />

                        {/* Video container - flex-1 to match height */}
                        <div className="relative flex-1 rounded-2xl border border-white/[0.1] overflow-hidden shadow-2xl shadow-black/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentFeature.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                                >
                                    {/* Placeholder for actual video */}
                                    <div className="text-center p-8">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05] flex items-center justify-center">
                                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-muted font-light tracking-wide">{currentFeature.title}</p>
                                        <p className="text-xs text-muted/60 font-extralight mt-1">Video demo coming soon</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Feature label overlay */}
                            <div className="absolute top-4 left-4 z-10">
                                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.1]">
                                    <span className="text-xs text-foreground font-light tracking-wide">{currentFeature.label}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <Separator bgColor='bg-linear-to-r from-transparent via-foreground/20 to-transparent' />

                {/* Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <blockquote className="text-lg md:text-xl font-extralight text-foreground/90 leading-relaxed mb-6 tracking-wide">
                        "{testimonialData.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 overflow-hidden flex items-center justify-center">
                            {testimonialData.author.avatarUrl ? (
                                <img
                                    src={testimonialData.author.avatarUrl}
                                    alt={testimonialData.author.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                            )}
                        </div>
                        <div className="text-left">
                            <p className="text-foreground font-light tracking-wide">{testimonialData.author.name}</p>
                            <p className="text-sm text-muted font-extralight tracking-wide">{testimonialData.author.role}</p>
                            <p className="text-xs text-muted/70 font-extralight tracking-wide">{testimonialData.author.organization}</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-300">
                        <span className="text-primary font-light tracking-wide">Experience the platform</span>
                        <svg
                            className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default ViewerSection;
