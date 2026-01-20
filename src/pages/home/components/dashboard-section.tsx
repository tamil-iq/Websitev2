import chatui from "@/assets/homepage/chat-ui.png";
import scanreports from "@/assets/homepage/scan-reports.png";
import aipowered from "@/assets/homepage/video/aipowered.gif";
import instantgif from "@/assets/homepage/video/instant.gif";
import share from "@/assets/homepage/video/share.gif";
import lifetime from "@/assets/homepage/video/lifetime.gif";
import { cn } from "@/lib/utils";
import { TrendingUp, Gauge, BarChart3 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TestimonialWithMarquee } from "@/components/ui/testtimonial-with-marquee";
import DonutChart from "./donut-chart";
import CertificationsSection from "./certification";

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
        description: "Every scan, every report. Organized and accessible forever.",
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
        <section id="administrators-section" className="relative pt-16 pb-24 px-6 overflow-hidden">
            <div ref={sectionRef} className="relative max-w-6xl mx-auto">

                {/* Section Header - Left aligned like Radiologists */}
                <div className="text-left mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="w-3 h-3 rounded-full bg-primary" />
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
                            className="inline-block text-primary"
                        >
                            clarity.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="text-lg md:text-xl text-foreground/60 max-w-2xl"
                    >
                        Track daily scan volumes, monitor radiologist TAT, and act on SLA breaches before they escalate.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Today's Scans Card - Top Left Corner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                    <BarChart3 className="w-5 h-5 text-foreground/70" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground">Multi site Scan Volume</h3>
                            </div>

                            {/* Stats Display */}
                            <div className="space-y-5">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-semibold text-foreground">847</span>
                                    <span className="text-muted text-sm">scans today</span>
                                </div>

                                {/* Modality Split Bars */}
                                <div className="space-y-3">
                                    {[
                                        { name: "Site A", count: 312, color: "bg-[#00b4d8]", percent: 42 },  // turquoise-surf
                                        { name: "Site B", count: 289, color: "bg-[#0077b6]", percent: 38 },  // bright-teal-blue
                                        { name: "Site C", count: 146, color: "bg-[#90e0ef]", percent: 20 },  // frosted-blue
                                    ].map((modality) => (
                                        <div key={modality.name} className="space-y-1.5">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-foreground/80">{modality.name}</span>
                                                <span className="text-muted">{modality.count}</span>
                                            </div>
                                            <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${modality.percent}%` } : { width: 0 }}
                                                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                                    className={`h-full ${modality.color} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reporting TAT Card - Top Right Corner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                    <TrendingUp className="w-5 h-5 text-foreground/70" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground">Reporting TAT</h3>
                            </div>

                            {/* TAT Stats Display */}
                            <div className="space-y-5">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-semibold text-foreground">20</span>
                                    <span className="text-muted text-lg">min</span>
                                    <div className="ml-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00b4d8]/20 border border-[#00b4d8]/30">
                                        <svg className="w-3 h-3 text-[#90e0ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" transform="rotate(180 12 12)" />
                                        </svg>
                                        <span className="text-xs text-[#90e0ef] font-medium">12%</span>
                                    </div>
                                </div>
                                {/* <span className="text-muted text-xs">vs last week</span> */}

                                {/* Radiologist TAT Breakdown */}
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    {[
                                        { name: "CT", tat: "25 min", status: "fast" },
                                        { name: "MRI", tat: "30 min", status: "normal" },
                                        { name: "X-Ray", tat: "12 min", status: "fast" },
                                        { name: "USG", tat: "15 min", status: "slow" },
                                    ].map((doc) => (
                                        <div key={doc.name} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                                            <span className="text-sm text-foreground/80">{doc.name}</span>
                                            <span className={cn(
                                                "text-xs font-medium px-2 py-0.5 rounded",
                                                doc.status === "fast" && "text-[#caf0f8] bg-[#00b4d8]/10",      // light-cyan / turquoise
                                                doc.status === "normal" && "text-[#90e0ef] bg-[#0077b6]/10",   // frosted-blue / bright-teal
                                                doc.status === "slow" && "text-[#00b4d8] bg-[#03045e]/10"      // turquoise / deep-twilight
                                            )}>
                                                {doc.tat}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* SLA Compliance Card - Bottom Left Corner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                            <Gauge className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-xl font-medium text-foreground">Today's SLA Compliance</h3>
                                    </div>

                                    {/* SLA Stats Grid - Compact */}
                                    <div className="grid grid-cols-4 gap-2 mb-3">
                                        <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                            <div className="text-lg font-medium text-foreground/60">124</div>
                                            <div className="text-[10px] text-muted">Booked</div>
                                        </div>
                                        <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                            <div className="text-lg font-medium text-foreground/60">98</div>
                                            <div className="text-[10px] text-muted">Acquired</div>
                                        </div>
                                        <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                            <div className="text-lg font-medium text-foreground/60">12</div>
                                            <div className="text-[10px] text-muted">Reporting</div>
                                        </div>
                                        <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                                            <div className="text-lg font-medium text-foreground/60">86</div>
                                            <div className="text-[10px] text-muted">Finalized</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Actionable Alerts - Prominent */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-foreground mb-2">Actionable Alerts</h4>
                                    {[
                                        { type: "urgent", message: "2 emergency cases pending in worklist", action: "Assign" },
                                        { type: "warning", message: "CT scanner queue nearing SLA threshold", action: "View Details" },
                                        { type: "info", message: "Preliminary report awaiting final sign-off", action: "View Details" },
                                    ].map((alert, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "flex items-center justify-between p-3 rounded-xl border transition-all duration-200",
                                                alert.type === "urgent" && "bg-[#03045e]/20 border-[#0077b6]/40 hover:border-[#00b4d8]/60",
                                                alert.type === "warning" && "bg-[#0077b6]/15 border-[#00b4d8]/30 hover:border-[#00b4d8]/50",
                                                alert.type === "info" && "bg-[#00b4d8]/10 border-[#90e0ef]/30 hover:border-[#90e0ef]/50"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={cn(
                                                    "w-2.5 h-2.5 rounded-full animate-pulse",
                                                    alert.type === "urgent" && "bg-red-500",
                                                    alert.type === "warning" && "bg-[#90e0ef]",
                                                    alert.type === "info" && "bg-[#caf0f8]"
                                                )} />
                                                <span className="text-sm text-foreground">{alert.message}</span>
                                            </div>
                                            <button className={cn(
                                                "text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 border",
                                                alert.type === "urgent" && "text-white bg-[#0077b6] border-[#00b4d8] hover:bg-[#00b4d8] hover:scale-105",
                                                alert.type === "warning" && "text-white bg-[#0077b6]/80 border-[#00b4d8]/60 hover:bg-[#00b4d8] hover:scale-105",
                                                alert.type === "info" && "text-white bg-[#00b4d8]/70 border-[#90e0ef]/50 hover:bg-[#00b4d8] hover:scale-105"
                                            )}>
                                                {alert.action}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                     {/* Chart Card - Bottom Right Corner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                            <Gauge className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-xl font-medium text-foreground">Workflow Status</h3>
                                    </div>
                                    <DonutChart />
                                  
                                </div>

                                
                            </div>
                        </div>
                    </motion.div>
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
        <section id="patients-section" className="relative pt-16 pb-24 px-6 overflow-hidden">
            <div ref={sectionRef} className="relative max-w-6xl mx-auto">

                {/* Section Header - Left aligned like Radiologists */}
                <div className="text-left mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="w-3 h-3 rounded-full bg-primary" />
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
                            className="inline-block text-primary"
                        >
                            love it.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-foreground/60 max-w-2xl"
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
                                        ? "bg-white/[0.06] border border-primary/30"
                                        : "bg-white/[0.02] border border-transparent hover:bg-white/[0.04] hover:border-white/[0.08]"
                                )}
                            >
                                {/* Active indicator */}
                                {activeFeature === index && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-primary/70 rounded-full"
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
                                            ? "text-primary translate-x-0 opacity-100"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-3xl opacity-50" />

                        {/* Stacked cards - Stripe depth effect */}
                        <div className="relative h-[400px] md:h-[450px]">
                            {/* Instant Report Access - Feature 0 */}
                            {activeFeature === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10"
                                >
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src={instantgif}
                                            alt="Instant Report Access"
                                            // className="w-full"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* AI-Powered Clarity - Feature 1 */}
                            {activeFeature === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0, scale: 1.02 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10"
                                >
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src={aipowered}
                                            alt="AI Chat"
                                        />   
                                    </div>
                                </motion.div>
                            )}
                            
                            {/* Easy Physician Sharing - Feature 2 */}
                            {activeFeature === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10"
                                >
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src={share}
                                            alt="Easy Physician Sharing"
                                        />
                                    </div>
                                </motion.div>
                            )}
                            
                            {/* Lifetime Health Record - Feature 3 */}
                            {activeFeature === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="absolute top-8 left-0 w-full transition-all duration-500"
                                >
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <img
                                            src={lifetime}
                                            alt="Lifetime Health Record"
                                            className="w-full"
                                        />
                                       
                                    </div>
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
        <section className="relative pt-12 pb-16 px-4">
            <div ref={sectionRef} className="relative max-w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                  <CertificationsSection />
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
            name: "Dr. Gururaj Rao",
            handle: "@gururajrao",
            role: "MD, Chief Radiologist",
            company: "Prima Diagnostics",
            avatar: "/prima-without-bg.png"
        },
        text: "Somatiq unified all our centers on a single intelligent platform. Earlier, fragmented systems made coordination cumbersome and increased IT overhead. With Somatiq’s integrated RIS-PACS, our workflows are now seamlessly connected across modalities and locations. Reporting speed has improved by nearly 30%, making our imaging operations faster, smarter, and more cohesive than ever."
    },
    {
        author: {
            name: "Dr. Murali Nadig",
            handle: "@muralinadig",
            role: "MD and Chief, Nuclear Medicine",
            company: "NewMedd Diagnostics",
            avatar: "/newmed-without-bg.png"
        },
        text: "Before Somatiq, our workflow depended on systems with limited cross-center integration. Moving to Somatiq’s unified platform transformed our operations—seamlessly connecting our Bengaluru and Mysore centers for real-time image sharing, reporting, and case allocation. The outcome has been smoother coordination, higher efficiency, and significantly faster report turnaround times."
    },
    {
        author: {
            name: "Saketh",
            handle: "@saketh",
            role: "Director, Africa Operations",
            company: "TX Biomarker",
            avatar: "/tx-without-bg.png"
        },
        text: "Somatiq designed our entire imaging workflow from the ground up—from initial setup to fully integrated reporting. The platform empowers our radiologists to deliver high-quality reports with exceptional turnaround times. Most importantly, it has expanded diagnostic access for patients by seamlessly connecting our imaging center with radiologists across borders."
    },
    {
        author: {
            name: "Dr. Amarnath Reddy",
            handle: "@amarnathreddy",
            role: "Director",
            company: "OM Diagnostics",
            avatar: "/om-without-bg.png"
        },
        text: "Somatiq has been a game-changer for our teleradiology operations. Amid a shortage of in-house radiologists, the platform enabled us to maintain high-quality diagnostic services through reliable remote expert support. It is efficient, dependable, and thoughtfully designed with radiologists at its core."
    }
];


// Section divider for visual flow
const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'subtle' }) => (
    <div className="relative w-full py-4">
        <div
            className={cn(
                "mx-auto",
                variant === 'default' && "h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent",
                variant === 'subtle' && "h-8 w-full"
            )}
        />
    </div>
);

// ============================================
// COMBINED EXPORT
// ============================================
export function DashboardSection() {
    return (
        <div id="features-section" className="relative">
            <AdministratorsSection />
            <SectionDivider />
            <PatientPortalSection />
            <SectionDivider variant="subtle" />
            <ComplianceSection />
            <SectionDivider />
            <TestimonialWithMarquee
                title="Trusted by centers across India"
                testimonials={testimonials}
            />
        </div>
    );
}

export const HomePageSections = () => {
    return <DashboardSection />;
};

export default DashboardSection;
