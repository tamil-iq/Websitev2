import { ShieldCheck, ClipboardList, Headset, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import tools from "@/assets/teleradiology/tools.png";
import dashboard from "@/assets/teleradiology/dashboard.png";
import analytics from "@/assets/teleradiology/analytics.png";
import insights from "@/assets/teleradiology/insights.png";


const stats = [
    {
        value: "10+",
        label: "Diagnostic centres",
        sublabel: "use Somatiq worldwide",
    },
    {
        value: "1000+",
        label: "Patients impacted per day",
        sublabel: "(in just a month)",
    },
    {
        value: "20+",
        label: "Radiologists connected",
        sublabel: "in our network",
    }
];

const workflowData = [
    {
        label: "Unified Platform Architecture - completely built in-house",
        description: "",
        image: tools,
    },
    {
        label: "Seamless Multi-Site Management",
        description: "",
        image: dashboard,
    },
    {
        label: "Real-time dashboard analytics - reporting volumes, turnaround times, referral trends.",
        description: "",
        image: analytics,
    },
    {
        label: "Actionable Insights",
        description: "",
        image: insights,
    },
]



const features = [
    {
        icon: ShieldCheck,
        title: "24/7 Expert Coverage",
        description: "Board-certified radiologists with subspecialty expertise. Around-the-clock availability for emergencies, nights, weekends, and holidays. Never leave cases unread.",
    },
    {
        icon: Zap,
        title: "Speed Without Compromise",
        description: "STAT reads delivered in under 30 minutes. Routine cases completed within 12 hours. Fast turnarounds without sacrificing accuracy or quality.",
    },
    {
        icon: ClipboardList,
        title: "Seamless Integration",
        description: "Unlike traditional teleradiology, cases flow through the same platform you already use. No file transfers, no separate logins, no workflow disruption.",
    },
    {
        icon: Headset,
        title: "Built-in Quality Assurance",
        description: "Multi-level peer review embedded in every workflow. Discrepancy tracking, feedback loops, and complete audit trails. QA isn't optional—it's how we operate.",
    },
];

function Counter({ value, isInView, delay }: { value: string; isInView: boolean; delay: number }) {
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
        if (!isInView) return;
        
        const numericValue = parseInt(value.replace(/\D/g, ''));
        let currentValue = 0;
        const increment = numericValue / 100; // Divide into 100 steps for smooth animation
        
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    setDisplayValue(numericValue);
                    clearInterval(interval);
                } else {
                    setDisplayValue(Math.round(currentValue));
                }
            }, 20); // Update every 20ms for smooth animation
        }, delay * 1000);
        
        return () => {
            clearTimeout(timer);
        };
    }, [isInView, value, delay]);

    // For non-numeric values, just return the value
    if (!/\d/.test(value)) {
        return (
            <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: delay }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4"
            >
                {value}
            </motion.span>
        );
    }

    return (
        <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: delay }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4"
        >
            {value.includes('+') ? <>{displayValue}+</> : displayValue}
        </motion.span>
    );
}

function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full overflow-hidden container max-w-full md:h-[70vh] h-[50vh] -mt-16"
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:grid grid-cols-[25%_50%_25%] grid-rows-3  relative w-full h-full z-10 hidden"
            >
                {/* Vertical gradient borders */}
                <div 
                    className="absolute top-0 bottom-0 xl:left-[30%] lg:left-1/4 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 229, 1) 27%, rgba(255, 123, 229, 1) 73%, rgba(255, 123, 229, 0) 89%)'
                    }}
                />
                  <div 
                    className="absolute top-0 bottom-0 xl:right-[30%] lg:right-1/4  w-px pointer-events-none opacity-30 hidden lg:block"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 229, 1) 27%, rgba(255, 123, 229, 1) 73%, rgba(255, 123, 229, 0) 89%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div
                    className="absolute left-0 right-0 top-1/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229,0) 25%, rgba(255, 123, 255, 1) 30%, rgba(255, 123, 229, 1) 70%, rgba(255, 123, 229, 0) 75%)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 top-2/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 25%, rgba(255, 123, 255, 1) 30%, rgba(255, 123, 229, 1) 70%, rgba(255, 123, 229, 0) 75%)'
                    }}
                />
                {/* Intersection points */}
                {/* Vertical line 1 (1/3) intersections */}
                <div
                    className="absolute w-1 h-1 xl:left-[30%] xl:top-[33.33%] lg:left-[25%] lg:top-[33%] bg-foreground/90 pointer-events-none"
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 xl:left-[30%] xl:top-[66.66%] lg:left-[25%] lg:top-[66.66%] bg-foreground/90 pointer-events-none"
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Vertical line 2 (2/3) intersections */}
                <div
                    className="absolute w-1 h-1 xl:left-[70%] xl:top-[33.33%] lg:left-[75%] lg:top-[33.33%] bg-foreground/90 pointer-events-none"
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 xl:left-[70%] xl:top-[66.66%] lg:left-[75%] lg:top-[66.66%] bg-foreground/90 pointer-events-none"
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>

                {/* Row 2 */}
                <div className="col-span-1"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="col-span-1 flex items-center justify-center max-w-6xl"
                >
                    <p className="text-lg text-muted leading-relaxed font-extralight text-center tracking-wide p-2 max-w-3xl ">
                    Built by radiologists and engineers who've lived the frustrations of fragmented infrastructure. Our mission is to help radiologists see clearer, diagnose with confidence, and reclaim the time they lose fighting their tools instead of using them.                    </p>
                </motion.div>
                <div className="col-span-1"></div>
            </motion.div>
            <motion.div className=''>
                <div className="flex items-center justify-center max-w-6xl">
                    <span className='text-lg text-muted leading-relaxed font-extralight text-center tracking-wide p-2 max-w-3xl '>
                    Built by radiologists and engineers who've lived the frustrations of fragmented infrastructure. Our mission is to help radiologists see clearer, diagnose with confidence, and reclaim the time they lose fighting their tools instead of using them.
                    </span>
                </div>

            </motion.div>
        </motion.section>
    )
}

function StatsDisplay() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-16 pt-4 px-4 -mt-24"
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center md:justify-between max-w-5xl mx-auto">
                    {stats.slice(0, 2).map((stat, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                            className="flex flex-col items-center text-center md:px-8 md:py-6"
                        >
                            <Counter 
                                value={stat.value} 
                                isInView={isInView} 
                                delay={0.3 + (index * 0.1)} 
                            />
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
                    {stats.slice(2).map((stat, index) => (
                        <motion.div 
                            key={index + 2} 
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 + ((index + 2) * 0.1) }}
                            className="flex flex-col items-center text-center px-8 py-6 col-span-2 md:col-span-1 md:flex md:flex-row"
                        >
                            <Counter 
                                value={stat.value} 
                                isInView={isInView} 
                                delay={0.3 + ((index + 2) * 0.1)} 
                            />
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
                </div>
            </div>
        </motion.section>
    )
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
            className="py-24 px-4 relative"
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Key Capabilities & Unique Value
                </h2>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-muted font-extralight max-w-xl mx-auto"
                >
                    Highest standards of data protection for healthcare organisations and their patients</motion.p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
            >
                {/* Center intersection rectangle */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 -translate-y-1/2 z-10" />
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                        className={cn("flex flex-col items-center justify-center gap-3 p-10 border border-border",
                            index === 0 ? 'border-0' : '', index === 1 ? 'border-r-0 border-t-0 border-b-0' : '',
                            index === 2 ? 'border-l-0 border-b-0 border-r-0' : '', index === 3 ? 'border-r-0 border-b-0' : '')}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                            className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-muted"
                        >
                            <feature.icon className="h-10 w-10 text-muted" strokeWidth={2} />
                        </motion.div>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                            className="text-center text-xl tracking-wider text-foreground font-light"
                        >
                            {feature.title}
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                            className="text-center text-sm tracking-wider text- text-muted font-extralight max-w-sm mx-auto"
                        >
                            {feature.description}
                        </motion.p>
                    </motion.div>))}
            </motion.div>
        </motion.section>
    )
}


function WorkflowSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-24 px-4 relative"
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Workflow & Operational Benefits
                </h2>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-muted font-extralight max-w-md mx-auto"
                >
                    Designed for efficiency and insight, Somatiq's in-house platform unifies reporting, analytics, and collaboration.
                </motion.p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
            >
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 translate-y-8 z-10" />
                {workflowData.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                        className={cn("flex flex-col items-center justify-center gap-3 p-10 border border-border",
                            index === 0 ? 'border-0' : '', index === 1 ? 'border-r-0 border-t-0 border-b-0' : '',
                            index === 2 ? 'border-l-0 border-b-0 border-r-0' : '', index === 3 ? 'border-r-0 border-b-0' : '')}
                    >
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                            className="text-center text-xl  tracking-wider text-foreground font-light"
                        >
                            {feature.label}
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                            className="flex  items-center justify-center "
                        >
                            {/* <feature.icon className="h-10 w-10 text-muted" strokeWidth={2} /> */}
                            <img src={feature.image} alt={feature.label} />
                        </motion.div>
                    </motion.div>))}
            </motion.div>
        </motion.section>
    )
}

function JoinusSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-4 relative"
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Join us Today
                </h2>
            </motion.div>
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full overflow-hidden container max-w-full h-[50vh]"
            >
                <div className="grid grid-cols-3 grid-rows-2 relative w-full h-full z-10">
                    {/* Vertical gradient borders */}
                    <div
                        className="absolute top-0 bottom-0 left-1/3 w-px pointer-events-none opacity-30"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 10%, rgba(255, 123, 229, 1) 30%, rgba(255, 123, 229, 1) 70%, rgba(255, 123, 229, 0) 80%)'
                        }}
                    />
                    <div
                        className="absolute top-0 bottom-0 left-2/3 w-px pointer-events-none opacity-30"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 10%, rgba(255, 123, 229, 1) 30%, rgba(255, 123, 229, 1) 70%, rgba(255, 123, 229, 0) 80%)'
                        }}
                    />
                    {/* Horizontal gradient borders */}
                    <div
                        className="absolute left-0 right-0 top-1/2 h-px pointer-events-none opacity-30"
                        style={{
                            background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 25%, rgba(255, 123, 255, 1) 30%, rgba(255, 123, 229, 1) 70%, rgba(255, 123, 229, 0) 75%)'
                        }}
                    />
                    {/* Intersection points */}
                    {/* Vertical line 1 (1/3) intersection */}
                    <div
                        className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                        style={{
                            left: '33.33%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                    {/* Vertical line 2 (2/3) intersection */}
                    <div
                        className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                        style={{
                            left: '66.66%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                    {/* Row 1 */}
                    <div className="col-span-1"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="col-span-1 flex items-end justify-end pb-10"
                    >
                        <p className="text-xl text-muted leading-relaxed font-extralight text-center tracking-wide p-2">
                            "If you're a radiologist who values precision, efficiency, and purpose - Somatiq is your next home"                    </p>
                    </motion.div>
                    <div className="col-span-1"></div>

                    {/* Row 2 */}
                    <div className="col-span-1"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-4xl mx-auto text-center space-y-4"
                    >
                        {/* Apply Now Line */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center justify-center gap-2 text-sm pt-8"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className='text-foreground font-extralight'>Apply Now: <span className="font-medium tracking-wide">info@somatiq.ai</span></span>
                        </motion.div>

                        {/* Check for positions text */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-sm text-foreground font-extralight"
                        >
                            Check for open positions at Somatiq
                        </motion.div>

                        {/* Button */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <button className="bg-white text-black font-medium text-sm px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                                CAREERS AT SOMATIQ
                            </button>
                        </motion.div>
                    </motion.div>
                    <div className="col-span-1"></div>
                </div>
            </motion.section>
        </motion.section>
    )
}

export default function FeatureSection() {
    return (
        <div>
            <StatsSection />
            <StatsDisplay />
            <KeyCapabilitiesSection />
            <WorkflowSection />
            <JoinusSection />
        </div>
    )
}