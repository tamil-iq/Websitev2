import chatui from "@/assets/homepage/chat-ui.png";
import scanreports from "@/assets/homepage/scan-reports.png";
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
                    {/* Today's Scans Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                    <BarChart3 className="w-5 h-5 text-foreground/70" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground">Multi site Scan Volume</h3>
                            </div>
                            <p className="text-muted font-light text-sm mb-6">Real-time scan volume with centre breakdown</p>

                            {/* Stats Display */}
                            <div className="space-y-5">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-semibold text-foreground">847</span>
                                    <span className="text-muted text-sm">scans today</span>
                                </div>

                                {/* Modality Split Bars */}
                                <div className="space-y-3">
                                    {[
                                        { name: "Site 1", count: 245, color: "bg-emerald-400", percent: 29 },
                                        { name: "Site 2", count: 189, color: "bg-cyan-400", percent: 22 },
                                        { name: "Site 3", count: 312, color: "bg-blue-400", percent: 37 },
                                        { name: "Site 4", count: 101, color: "bg-violet-400", percent: 12 },
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

                    {/* Reporting TAT Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                    <TrendingUp className="w-5 h-5 text-foreground/70" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground">Reporting TAT</h3>
                            </div>
                            <p className="text-muted font-light text-sm mb-6">Average turnaround time with Modality breakdown</p>

                            {/* TAT Stats Display */}
                            <div className="space-y-5">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-semibold text-foreground">20</span>
                                    <span className="text-muted text-lg">min</span>
                                    <div className="ml-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" transform="rotate(180 12 12)" />
                                        </svg>
                                        <span className="text-xs text-emerald-400 font-medium">12%</span>
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
                                                doc.status === "fast" && "text-emerald-400 bg-emerald-500/10",
                                                doc.status === "normal" && "text-blue-400 bg-blue-500/10",
                                                doc.status === "slow" && "text-amber-400 bg-amber-500/10"
                                            )}>
                                                {doc.tat}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* SLA Compliance Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                            <Gauge className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-xl font-medium text-foreground">SLA Compliance</h3>
                                    </div>
                                    <p className="text-muted font-light text-sm mb-4">Performance tracking with actionable alerts</p>

                                    {/* SLA Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                            <div className="text-3xl font-semibold text-emerald-400">1240</div>
                                            <div className="text-xs text-muted mt-1">Studies Booked</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                            <div className="text-3xl font-semibold text-amber-400">847</div>
                                            <div className="text-xs text-muted mt-1">Acquired</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                            <div className="text-3xl font-semibold text-blue-400">112</div>
                                            <div className="text-xs text-muted mt-1">In-Reporting</div>
                                        </div>
                                        <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                            <div className="text-3xl font-semibold text-blue-400">735</div>
                                            <div className="text-xs text-muted mt-1">Finalized</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Actionable Alerts */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-foreground/80 mb-3">Actionable Alerts</h4>
                                    {[
                                        { type: "urgent", message: "Reporting TAT for STAT Case is critical", action: "Reassign" },
                                        { type: "warning", message: "System is experiencing high load, TAT may be impacted", action: "View" },
                                        { type: "info", message: "MRI queue cleared ahead of schedule", action: "Details" },
                                    ].map((alert, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "flex items-center justify-between p-3 rounded-lg border",
                                                alert.type === "urgent" && "bg-red-500/10 border-red-500/20",
                                                alert.type === "warning" && "bg-amber-500/10 border-amber-500/20",
                                                alert.type === "info" && "bg-emerald-500/10 border-emerald-500/20"
                                            )}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className={cn(
                                                    "w-2 h-2 rounded-full",
                                                    alert.type === "urgent" && "bg-red-400",
                                                    alert.type === "warning" && "bg-amber-400",
                                                    alert.type === "info" && "bg-emerald-400"
                                                )} />
                                                <span className="text-sm text-foreground/80">{alert.message}</span>
                                            </div>
                                            <button className={cn(
                                                "text-xs font-medium px-3 py-1 rounded-full transition-colors",
                                                alert.type === "urgent" && "text-red-400 bg-red-500/20 hover:bg-red-500/30",
                                                alert.type === "warning" && "text-amber-400 bg-amber-500/20 hover:bg-amber-500/30",
                                                alert.type === "info" && "text-emerald-400 bg-emerald-500/20 hover:bg-emerald-500/30"
                                            )}>
                                                {alert.action}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                                            <Gauge className="w-5 h-5 text-foreground/70" />
                                        </div>
                                        <h3 className="text-xl font-medium text-foreground">Chart header placeholder</h3>
                                    </div>
                                        <p className="text-muted font-light text-sm mb-4">Performance tracking with actionable alerts</p>
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
                                            className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30"
                                        >
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative rounded-full h-1.5 w-1.5 bg-primary"></span>
                                            </span>
                                            <span className="text-[10px] text-primary/80 font-medium">AI Active</span>
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
        <section className="relative pt-12 pb-16 px-4">
            <div ref={sectionRef} className="relative max-w-5xl mx-auto">
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
        text: "Somatiq unified all our centers onto one intelligent platform. We previously struggled with fragmented systems that made coordination tedious and increased IT overheads. With Somatiq's integrated RIS-PACS, our workflow is now streamlined across modalities and locations. Reporting speed has improved by nearly 30%, making our imaging operations faster, smarter and more cohesive than ever."
    },
    {
        author: {
            name: "Dr. Murali Nadig",
            handle: "@muralinadig",
            role: "MD and Chief (Nuclear Medicine)",
            company: "NewMedd Diagnostics",
            avatar: "/newmed-without-bg.png"
        },
        text: "Before adopting Somatiq, our workflow relied on systems with limited integration across centers. Transitioning to Somatiq's unified platform has elevated the way we operate—connecting our Bengaluru and Mysore centers seamlessly for real-time image exchange, reporting and case allocation. The result has been smoother coordination, improved efficiency and faster reporting turnaround times."
    },
    {
        author: {
            name: "Saketh",
            handle: "@saketh",
            role: "Director, Africa operations",
            company: "TX Biomarker",
            avatar: "/tx-without-bg.png"
        },
        text: "Somatiq built our entire imaging workflow from the ground up right from setup to integrated reporting. The system allows our radiologists to deliver high-quality reports with exceptional turnaround time. What stands out is how it improved diagnostic accessibility for our patients, connecting our imaging center with radiologists across borders."
    },
    {
        author: {
            name: "Dr. Amarnath Reddy",
            handle: "@amarnathreddy",
            role: "Director",
            company: "OM Diagnostics",
            avatar: "/om-without-bg.png"
        },
        text: "We've been using Somatiq as our teleradiology platform, and it has been a game-changer. With the current shortage of in-house radiologists, Somatiq enabled us to maintain high-quality diagnostic services through remote expert support. The platform is reliable, efficient and designed with radiologists in mind."
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
