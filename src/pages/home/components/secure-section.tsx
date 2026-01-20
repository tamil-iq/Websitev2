import { cn } from '@/lib/utils';
import { Separator } from '@/components/common/separator';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatedTextCycle } from '@/components/ui/animated-text-cycle';

// Import GIFs directly
import dictateGif from '@/assets/homepage/video/dictate.gif';
import viewerGif from '@/assets/homepage/video/viewer.gif';
import boundaryGif from '@/assets/homepage/video/boundries.gif';
// Import other GIFs when they're available
// import anyDeviceGif from '@/assets/homepage/video/any-device.gif';

// AI Badge component for "breeze" word - static
const AIBadge = () => (
    <span className="absolute -top-3 -right-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
        AI
    </span>
);

// Device icons for "boundaries" word - mobile + tablet
const DeviceIcon = () => (
    <span className="absolute -top-3 -right-5 flex items-end gap-0.5 text-white/90">
        {/* Tablet icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5-3H5V3h14v16z"/>
        </svg>
        {/* Mobile icon */}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
    </span>
);

// Lightning bolt icon for "install" word
const LightningIcon = () => (
    <span className="absolute -top-3 -right-3 text-yellow-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
    </span>
);

// Magic sparkle icon for "magic" word - static triangle cluster, bright stars
const MagicIcon = () => (
    <>
        {/* Large star - top of triangle */}
        <span className="absolute -top-4 -right-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.09L21 12L14.74 12.91L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.91L3 12L9.26 11.09L5 7L10.91 8.26L12 2Z"/>
            </svg>
        </span>
        {/* Medium star - bottom left of triangle */}
        <span className="absolute -top-1 -right-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFC107">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.09L21 12L14.74 12.91L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.91L3 12L9.26 11.09L5 7L10.91 8.26L12 2Z"/>
            </svg>
        </span>
        {/* Small star - bottom right of triangle */}
        <span className="absolute -top-1 -right-4">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="#FFEB3B">
                <path d="M12 2L13.09 8.26L19 7L14.74 11.09L21 12L14.74 12.91L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.91L3 12L9.26 11.09L5 7L10.91 8.26L12 2Z"/>
            </svg>
        </span>
    </>
);

// Feature cards with descriptions
const features = [
    {
        id: 'reporting',
        label: "REPORTING",
        headline: <>Less <span className="relative inline-block italic font-bold text-foreground border-b-2 border-primary pb-0.5">typing.<AIBadge /></span></>,
        description: "Dictate naturally. Create flawless reports.",
        gif: dictateGif,
        color: "59, 130, 246",
    },
    {
        id: 'viewer',
        label: "VIEWER",
        headline: <>Zero <span className="relative inline-block italic font-bold text-foreground border-b-2 border-primary pb-0.5">install.<LightningIcon /></span></>,
        description: "Advanced Viewer in any browser with MPR, MIP and 3D.",
        gif: viewerGif,
        color: "59, 130, 246",
    },
    {
        id: 'anywhere',
        label: "ACCESS",
        headline: <>No <span className="relative inline-block italic font-bold text-foreground border-b-2 border-primary pb-0.5">boundaries.<DeviceIcon /></span></>,
        description: "Your worklist follows you everywhere.",
        gif: boundaryGif, // Using dictate.gif as placeholder until any-device.gif is available
        color: "59, 130, 246",
    },
];

// const testimonialData = {
//     quote:
//         "My reporting time reduced by nearly 50%. The platform felt familiar from day one, with virtually no learning curve—allowing me to focus on what truly matters: the patient.",
//     author: {
//         name: "Dr. Nikita Sridhar",
//         role: "Consultant Radiologist",
//         organization: "Prima Diagnostics, Bengaluru",
//         avatarUrl: "",
//     },
// };

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
            className="relative pt-16 pb-24 px-6 overflow-hidden"
        >
            {/* Background gradient - subtle fade in from hero */}
            <div className={cn(
                "pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent transition-opacity duration-500",
                hideLocalGradient ? "opacity-0" : "opacity-100"
            )} />

            <div className="relative max-w-6xl mx-auto space-y-16">

                {/* Section Header */}
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm text-foreground/70 font-light tracking-wide">For Radiologists</span>
                        <svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="-ml-2"
                    >
                        <AnimatedTextCycle
                            words={["Dictate.", "Review.", "Sign off."]}
                        />
                    </motion.div>

                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Left: Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col gap-3"
                    >
                        {features.map((feature, index) => {
                            const isActive = activeFeature === index;

                            return (
                                <motion.button
                                    key={feature.id}
                                    onClick={() => handleFeatureClick(index)}
                                    className={cn(
                                        "flex-1 w-full text-left px-5 py-5 md:px-6 md:py-6 rounded-xl border transition-all duration-300 relative overflow-hidden",
                                        isActive
                                            ? "bg-white/[0.03] border-white/[0.15]"
                                            : "bg-transparent border-white/[0.06] hover:bg-white/[0.02] hover:border-white/[0.1]"
                                    )}
                                    style={isActive ? { borderColor: `rgba(${feature.color}, 0.3)` } : {}}
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

                                    <div className="flex flex-col gap-2">
                                        {/* Label */}
                                        <span className="text-xs font-medium tracking-widest text-muted/70 uppercase">
                                            {feature.label}
                                        </span>

                                        {/* Bold headline with highlighted word */}
                                        <h3 className={cn(
                                            "text-2xl md:text-3xl font-bold tracking-tight leading-tight transition-all duration-300",
                                            isActive ? "text-foreground" : "text-foreground/90"
                                        )}>
                                            {feature.headline}
                                        </h3>

                                        {/* Description */}
                                        <p className={cn(
                                            "text-sm md:text-base font-light transition-colors duration-300 mt-1",
                                            isActive ? "text-foreground/70" : "text-foreground/50"
                                        )}>
                                            {feature.description}
                                        </p>
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

                        {/* Video container - centered */}
                        <div className="relative flex-1 flex items-center justify-center min-h-[300px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                            <AnimatePresence mode="wait">
                                
                                    {/* GIF display - centered with fixed dimensions */}
                                    <img 
                                        className="w-full h-auto max-w-full mx-auto object-contain"
                                        style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                                        src={currentFeature.gif}
                                        alt={currentFeature.description}
                                    />
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                <Separator bgColor='bg-linear-to-r from-transparent via-foreground/20 to-transparent' />

                {/* Testimonial */}
                {/* <motion.div
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
                </motion.div> */}

                {/* CTA */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <button
                        onClick={() => window.location.href = 'mailto:info@somatiq.ai?subject=Demo%20Request%20-%20Somatiq%20Platform&body=Hi%20Somatiq%20team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20demo%20of%20your%20platform.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThank%20you!'}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-300"
                    >
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
                </motion.div> */}

            </div>
        </section>
    );
};

export default ViewerSection;
