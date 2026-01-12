import dashboard from "@/assets/homepage/dashboard-monitoring.png";
import metrics from "@/assets/homepage/metrics.png";
import rates from "@/assets/homepage/rates.png";
import chatui from "@/assets/homepage/chat-ui.png";
import scanreports from "@/assets/homepage/scan-reports.png";
import { cn } from "@/lib/utils";
import { TrendingUp, Gauge, BarChart3 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TestimonialWithMarquee } from "@/components/ui/testtimonial-with-marquee";

// Admin bento items - Linear/Notion inspired
const adminBentoItems = [
    {
        id: 'dashboard',
        title: "Command Center",
        description: "Real-time visibility across your entire operation",
        icon: BarChart3,
        image: dashboard,
        size: "large", // spans 2 cols
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
        id: 'analytics',
        title: "TAT Analytics",
        description: "Track turnaround times and SLA performance",
        icon: TrendingUp,
        image: metrics,
        size: "medium",
        gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    {
        id: 'utilization',
        title: "Equipment Utilization",
        description: "Occupancy and capacity by modality",
        icon: Gauge,
        image: rates,
        size: "medium",
        gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    },
];

// Patient features - Benefits for patients visiting diagnostic centers
const patientFeatures = [
    {
        id: 'access',
        title: "Instant Report Access",
        description: "No waiting in queues. Reports available on any device, the moment they're ready.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
        ),
    },
    {
        id: 'ai',
        title: "AI-Powered Clarity",
        description: "Complex radiology findings explained in simple, understandable language.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
        ),
    },
    {
        id: 'share',
        title: "Easy Physician Sharing",
        description: "One-click secure sharing with doctors. No CDs, no printouts, no hassle.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
        ),
    },
    {
        id: 'history',
        title: "Lifetime Health Record",
        description: "Every scan, every report — organized and accessible forever.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
    },
];

const complianceBadges = [
    { label: "HIPAA Compliant" },
    { label: "ISO 27001 Compliant" },
    { label: "NABH Ready" },
    { label: "Role-Based Access" },
    { label: "24/7 Support" },
];

// ============================================
// ADMINISTRATORS SECTION - Linear/Notion Bento Style
// ============================================
export function AdministratorsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="administrators-section" className="relative py-24 px-6 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[100px]" />
            </div>

            <div ref={sectionRef} className="relative max-w-6xl mx-auto">

                {/* Section Header - Left aligned like Radiologists */}
                <div className="text-left mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="w-5 h-3 rounded-full bg-emerald-400" />
                        <span className="text-sm text-foreground/70 font-light tracking-wide">For Administrators</span>
                        <svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        {["Decide", "with"].map((word, i) => (
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
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            className="inline-block text-emerald-400"
                        >
                            clarity.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl"
                    >
                        Real-time visibility across your entire operation. Track performance, monitor equipment, and make informed decisions.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
                >
                    {adminBentoItems.slice(0, 2).map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                            className={cn(
                                "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]",
                            )}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                        <item.icon className="w-5 h-5 text-foreground/70" />
                                    </div>
                                    <h3 className="text-xl font-medium text-foreground">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-muted font-light text-sm mb-4">
                                    {item.description}
                                </p>

                                {item.image && (
                                    <div className="relative rounded-lg overflow-hidden border border-white/[0.08]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Third item spans full width */}
                    {adminBentoItems.slice(2, 3).map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] md:col-span-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                            <item.icon className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-xl font-medium text-foreground">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted font-light text-sm">
                                        {item.description}
                                    </p>
                                </div>
                                {item.image && (
                                    <div className="relative rounded-lg overflow-hidden border border-white/[0.08] w-full md:w-1/2">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// PATIENT PORTAL SECTION - Stripe/Figma inspired
// ============================================
export function PatientPortalSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="patients-section" className="relative py-24 px-6 overflow-hidden">
            {/* Stripe-inspired gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div ref={sectionRef} className="relative max-w-6xl mx-auto">

                {/* Section Header - Left aligned like Radiologists */}
                <div className="text-left mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="w-5 h-3 rounded-full bg-violet-400" />
                        <span className="text-sm text-foreground/70 font-light tracking-wide">For Patients</span>
                        <svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        {["Patients"].map((word, i) => (
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
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            className="inline-block text-violet-400"
                        >
                            love it.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl"
                    >
                        Instant report access, AI-powered explanations, and effortless sharing.
                    </motion.p>
                </div>

                {/* Main Content - Figma-style interactive layout */}
                <div className="grid lg:grid-cols-5 gap-8 items-center">

                    {/* Left: Feature Pills - Notion style */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-2 space-y-3"
                    >
                        {patientFeatures.map((feature, index) => (
                            <motion.button
                                key={feature.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                onClick={() => setActiveFeature(index)}
                                className={cn(
                                    "w-full group relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                                    activeFeature === index
                                        ? "bg-white/[0.06] border border-violet-500/30"
                                        : "bg-white/[0.02] border border-transparent hover:bg-white/[0.04] hover:border-white/[0.08]"
                                )}
                            >
                                {/* Active indicator */}
                                {activeFeature === index && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-violet-400 to-purple-500 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <div className={cn(
                                    "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300",
                                    activeFeature === index
                                        ? "bg-white/[0.08] text-foreground"
                                        : "bg-white/[0.03] text-muted group-hover:text-foreground/70"
                                )}>
                                    {feature.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className={cn(
                                        "font-medium text-base md:text-lg transition-colors duration-300",
                                        activeFeature === index ? "text-foreground" : "text-foreground/70"
                                    )}>
                                        {feature.title}
                                    </h3>
                                    <p className={cn(
                                        "text-sm font-light mt-1 transition-colors duration-300 line-clamp-2",
                                        activeFeature === index ? "text-muted" : "text-muted/70"
                                    )}>
                                        {feature.description}
                                    </p>
                                </div>
                                <svg
                                    className={cn(
                                        "w-4 h-4 transition-all duration-300",
                                        activeFeature === index
                                            ? "text-violet-400 translate-x-0 opacity-100"
                                            : "text-foreground/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                    )}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Right: Floating UI Preview - Stripe layered style */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-3 relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 rounded-3xl blur-3xl opacity-50" />

                        {/* Stacked cards - Stripe depth effect */}
                        <div className="relative h-[400px] md:h-[450px]">
                            {/* Back layer - Reports */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, rotate: -3 }}
                                animate={isInView ? {
                                    opacity: activeFeature === 0 || activeFeature === 3 ? 0.9 : 0.5,
                                    y: 0,
                                    rotate: -3,
                                    scale: activeFeature === 0 || activeFeature === 3 ? 1 : 0.95
                                } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute top-8 left-0 w-[70%] transition-all duration-500"
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/50">
                                    <img
                                        src={scanreports}
                                        alt="Scan reports"
                                        className="w-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                </div>
                            </motion.div>

                            {/* Front layer - Chat AI */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, rotate: 2 }}
                                animate={isInView ? {
                                    opacity: activeFeature === 1 ? 1 : 0.8,
                                    y: 0,
                                    rotate: 2,
                                    scale: activeFeature === 1 ? 1.02 : 1,
                                    x: activeFeature === 1 ? -10 : 0
                                } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute top-16 right-0 w-[75%] transition-all duration-500"
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/50">
                                    <img
                                        src={chatui}
                                        alt="AI Chat"
                                        className="w-full"
                                    />
                                    {/* AI sparkle indicator */}
                                    {activeFeature === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30"
                                        >
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                                <span className="relative rounded-full h-1.5 w-1.5 bg-violet-400"></span>
                                            </span>
                                            <span className="text-[10px] text-violet-300 font-medium">AI Active</span>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Floating badge for share feature */}
                            {activeFeature === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className="text-xs text-emerald-300 font-medium">Link shared securely</span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

// ============================================
// COMPLIANCE SECTION - Horizontal Trust Bar
// ============================================
export function ComplianceSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section className="relative py-16 px-4">
            <div ref={sectionRef} className="relative max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm text-muted font-light tracking-wide mb-6">
                        Built for healthcare
                    </p>

                    {/* Horizontal badge row */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {complianceBadges.map((badge, index) => (
                            <motion.div
                                key={badge.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-300"
                            >
                                <span className="text-sm text-foreground/80 font-light tracking-wide">
                                    {badge.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// TESTIMONIALS DATA
// ============================================
const testimonials = [
    {
        author: {
            name: "Dr. Rajesh Kumar",
            handle: "@rajeshkumar",
            role: "Chief Radiologist",
            company: "NewMed Diagnostics",
            avatar: "/newmed-without-bg.png"
        },
        text: "Somatiq has transformed our reporting workflow. What used to take 45 minutes now takes 20. The AI-assisted dictation is remarkably accurate."
    },
    {
        author: {
            name: "Priya Sharma",
            handle: "@priyasharma",
            role: "Operations Head",
            company: "OM Diagnostics",
            avatar: "/om-without-bg.png"
        },
        text: "Finally, a platform that understands Indian healthcare. The NABH-ready compliance features saved us months of preparation time."
    },
    {
        author: {
            name: "Dr. Anil Mehta",
            handle: "@anilmehta",
            role: "Managing Director",
            company: "Prima Imaging",
            avatar: "/prima-without-bg.png"
        },
        text: "The real-time dashboard gives me visibility I never had before. I can track TAT across all centers from my phone."
    },
    {
        author: {
            name: "Sunita Reddy",
            handle: "@sunitareddy",
            role: "IT Manager",
            company: "TX Healthcare",
            avatar: "/tx-without-bg.png"
        },
        text: "Integration was seamless. Their team worked with our existing PACS and had us running in under two weeks."
    }
];

// ============================================
// COMBINED EXPORT
// ============================================
export function DashboardSection() {
    return (
        <div id="features-section">
            <AdministratorsSection />
            <PatientPortalSection />
            <ComplianceSection />
            <TestimonialWithMarquee
                title="Trusted by radiologists across India"
                testimonials={testimonials}
            />
        </div>
    );
}

export const HomePageSections = () => {
    return <DashboardSection />;
};

export default DashboardSection;
