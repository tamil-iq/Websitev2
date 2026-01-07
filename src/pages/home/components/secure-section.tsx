import { cn } from '@/lib/utils';
import { Separator } from '@/components/common/separator';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Check } from 'lucide-react';

// Visual flow steps
const flowSteps = ["Dictate", "Review", "Sign off"];

// Feature data with improved copy per user requirements
const features = [
    {
        id: 'reporting',
        label: "Reporting",
        title: "Dictate. Review. Sign off.",
        description: (
            <>
                Speech-to-text with intelligent priors and an AI assistant that learns your style —
                not a generic LLM wrapper you could replace with ChatGPT.{' '}
                <span className="text-primary font-medium">Workflow-native intelligence, built for radiology.</span>
            </>
        ),
        video: "/videos/ai-reporting.mp4",
        step: 0,
    },
    {
        id: 'viewer',
        label: "Viewer",
        title: "Workstation power. Any device.",
        description: (
            <>
                MPR, MIP, 3D reconstruction — instant in your browser.
                Same performance on workstation, laptop, or tablet.{' '}
                <span className="text-primary font-medium">Device and browser agnostic. Zero installs.</span>
            </>
        ),
        video: "/videos/zero-footprint.mp4",
        step: 1,
    },
    {
        id: 'anywhere',
        label: "Access",
        title: "One login. Every study.",
        description: (
            <>
                Start on your workstation, continue from home.
                Immediate viewing access on mobile when you need it.{' '}
                <span className="text-primary font-medium">Your worklist, wherever you are.</span>
            </>
        ),
        video: "/videos/any-device.mp4",
        step: 2,
    },
];

const testimonialData = {
    quote:
        "Our average turnaround time dropped by 40% within the first month. The unified workflow means radiologists spend time on diagnosis, not navigating between systems.",
    author: {
        name: "Dr. Rajesh Kumar",
        title: "Chief Radiologist | Metro Diagnostics",
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

    // Auto-rotate logic
    useEffect(() => {
        if (!isAutoPlaying || !isInView) return;

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
                }
                return next;
            });
            setProgress(0);
        }, ROTATION_INTERVAL);

        return () => {
            clearInterval(progressInterval);
            clearInterval(rotationInterval);
        };
    }, [isAutoPlaying, isInView]);

    const handleFeatureClick = useCallback((index: number) => {
        setActiveFeature(index);
        setProgress(0);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs text-primary font-medium tracking-wide">For Radiologists</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4">
                        Reporting that respects your time
                    </h2>
                    <p className="text-lg text-muted font-light max-w-2xl mx-auto">
                        A complete radiology workspace — viewer, reporting, collaboration —
                        unified in one interface. Intelligence woven into every step.
                    </p>
                </motion.div>

                {/* Visual Flow Stepper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4 md:gap-8"
                >
                    {flowSteps.map((step, index) => {
                        const isActive = activeFeature >= index;
                        const isCompleted = completedCycle || activeFeature > index;

                        return (
                            <div key={step} className="flex items-center gap-4 md:gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    {/* Step circle */}
                                    <motion.div
                                        className={cn(
                                            "relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-500",
                                            isCompleted
                                                ? "bg-primary/20 border-primary"
                                                : isActive
                                                    ? "bg-primary/10 border-primary/60"
                                                    : "bg-white/[0.02] border-white/[0.15]"
                                        )}
                                        animate={isActive && !isCompleted ? { scale: [1, 1.05, 1] } : {}}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <AnimatePresence mode="wait">
                                            {isCompleted ? (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <Check className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2.5} />
                                                </motion.div>
                                            ) : (
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className={cn(
                                                        "text-sm md:text-base font-medium",
                                                        isActive ? "text-primary" : "text-muted"
                                                    )}
                                                >
                                                    {index + 1}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Step label */}
                                    <span className={cn(
                                        "text-sm md:text-base font-medium transition-colors duration-300",
                                        isActive ? "text-foreground" : "text-muted"
                                    )}>
                                        {step}
                                    </span>
                                </div>

                                {/* Connector line */}
                                {index < flowSteps.length - 1 && (
                                    <div className="relative w-12 md:w-20 h-0.5 bg-white/[0.1] rounded-full overflow-hidden">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-primary rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{
                                                width: isCompleted || activeFeature > index ? "100%" : "0%"
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left: Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        {features.map((feature, index) => {
                            const isActive = activeFeature === index;

                            return (
                                <motion.button
                                    key={feature.id}
                                    onClick={() => handleFeatureClick(index)}
                                    className={cn(
                                        "w-full text-left p-5 md:p-6 rounded-xl border transition-all duration-300 relative overflow-hidden",
                                        isActive
                                            ? "bg-white/[0.04] border-primary/30"
                                            : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.03] hover:border-white/[0.12]"
                                    )}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {/* Progress bar for active card */}
                                    {isActive && isAutoPlaying && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-primary/60"
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.05, ease: "linear" }}
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
                                            <span className="text-lg font-semibold">{index + 1}</span>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            {/* Label badge */}
                                            <span className={cn(
                                                "inline-block text-xs font-medium tracking-wide px-2 py-0.5 rounded-full mb-2 transition-colors duration-300",
                                                isActive
                                                    ? "bg-primary/20 text-primary"
                                                    : "bg-white/[0.05] text-muted"
                                            )}>
                                                {feature.label}
                                            </span>

                                            <h3 className={cn(
                                                "text-lg md:text-xl font-medium mb-2 transition-colors duration-300",
                                                isActive ? "text-foreground" : "text-foreground/80"
                                            )}>
                                                {feature.title}
                                            </h3>

                                            <p className={cn(
                                                "text-base leading-relaxed transition-colors duration-300",
                                                isActive ? "text-muted" : "text-muted/70"
                                            )}>
                                                {feature.description}
                                            </p>
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
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-2xl blur-3xl opacity-50" />

                        {/* Video container */}
                        <div className="relative rounded-2xl border border-white/[0.1] overflow-hidden shadow-2xl shadow-black/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentFeature.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="aspect-video bg-black/50 flex items-center justify-center"
                                >
                                    {/* Placeholder for actual video */}
                                    <div className="text-center p-8">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/[0.05] flex items-center justify-center">
                                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-muted font-light">{currentFeature.title}</p>
                                        <p className="text-xs text-muted/60 mt-1">Video demo coming soon</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Feature label overlay */}
                            <div className="absolute top-4 left-4">
                                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.1]">
                                    <span className="text-xs text-foreground font-medium">{currentFeature.label}</span>
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
                    <blockquote className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed mb-6">
                        "{testimonialData.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-medium">
                                {testimonialData.author.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <div className="text-left">
                            <p className="text-foreground font-medium">{testimonialData.author.name}</p>
                            <p className="text-sm text-muted">{testimonialData.author.title}</p>
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
                        <span className="text-primary font-medium">Experience the platform</span>
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
