import { ShieldCheck, UserCog, ClipboardList, Headset } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    },
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
        title: "24/7 Expert Radiology Coverage",
        description: "Around-the-clock reporting for all cases. Our in-house team delivers reliable, top-tier interpretations.",
    },
    {
        icon: UserCog,
        title: "Trust & Security",
        description: "HIPAA-compliant technology, robust encryption, and secure data pipelines.",
    },
    {
        icon: ClipboardList,
        title: "Speed & Reliability",
        description: "Dedicated urgent reads for emergencies and fast turnarounds without compromising accuracy.",
    },
    {
        icon: Headset,
        title: "Quality Assurance",
        description: "Multi-level peer review and embedded QA in every report.",
    },
];


function StatsSection() {
    return (
        <section className="relative w-full overflow-hidden container max-w-full h-[70vh] -mt-16">
            <div className="grid grid-cols-3 grid-rows-3 relative w-full h-full z-10">
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
                    className="absolute left-0 right-0 top-1/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 25%, rgba(255, 123, 255, 1) 30%, rgba(255, 123, 229, 1) 70%, rgba(255, 123, 229, 0) 75%)'
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
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '33.33%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '33.33%',
                        top: '66.66%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Vertical line 2 (2/3) intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '33.33%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '66.66%',
                        top: '66.66%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>

                {/* Row 2 */}
                <div className="col-span-1"></div>
                <div className="col-span-1 flex items-center justify-center">
                    <p className="text-xl text-muted leading-relaxed font-extralight text-center tracking-wide p-2">
                        Built by Radiologists and Engineers by blending frontline radiology practice with deep expertise in healthcare AI and imaging informatics. Our mission is to help radiologists to see clearer, diagnose with confidence and reduce cognitive burden.
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
        </section>
    )
}

function StatsDisplay() {
    return (
        <section className="relative w-full py-16 pt-4 px-4 -mt-24">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-8 py-6">
                            <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base tracking-wide font-light text-foreground mb-1">
                                {stat.label}
                            </span>
                            {stat.sublabel && (
                                <span className="text-xs md:text-sm text-muted font-extralight tracking-wide">
                                    {stat.sublabel}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function KeyCapabilitiesSection() {
    return (
        <section className="py-24 px-4 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Key Capabilities & Unique Value
                </h2>
                <p className="text-muted font-extralight max-w-xl mx-auto">
                    Highest standards of data protection for healthcare organisations and their patients</p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
                {/* Center intersection rectangle */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 -translate-y-1/2 z-10" />
                {features.map((feature, index) => (
                    <div className={cn("flex flex-col items-center justify-center gap-3 p-10 border border-border",
                        index === 0 ? 'border-0' : '', index === 1 ? 'border-r-0 border-t-0 border-b-0' : '',
                        index === 2 ? 'border-l-0 border-b-0 border-r-0' : '', index === 3 ? 'border-r-0 border-b-0' : '')}>
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-muted">
                            <feature.icon className="h-10 w-10 text-muted" strokeWidth={2} />
                        </div>
                        <p className="text-center text-xl tracking-wider text-foreground font-light">{feature.title}</p>
                        <p className="text-center text-sm tracking-wider text- text-muted font-extralight max-w-sm mx-auto">{feature.description}</p>
                    </div>))}
            </div>
        </section>
    )
}


function WorkflowSection() {
    return (
        <section className="py-24 px-4 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Workflow & Operational Benefits
                </h2>
                <p className="text-muted font-extralight max-w-md mx-auto">
                    Designed for efficiency and insight, Somatiq’s in-house platform unifies reporting, analytics, and collaboration.
                </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 translate-y-8 z-10" />
                {workflowData.map((feature, index) => (
                    <div className={cn("flex flex-col items-center justify-center gap-3 p-10 border border-border",
                        index === 0 ? 'border-0' : '', index === 1 ? 'border-r-0 border-t-0 border-b-0' : '',
                        index === 2 ? 'border-l-0 border-b-0 border-r-0' : '', index === 3 ? 'border-r-0 border-b-0' : '')}>
                        <p className="text-center text-xl  tracking-wider text-foreground font-light">{feature.label}</p>
                        <div className="flex  items-center justify-center ">
                            {/* <feature.icon className="h-10 w-10 text-muted" strokeWidth={2} /> */}
                            <img src={feature.image} alt={feature.label} />
                        </div>
                    </div>))}
            </div>

        </section>
    )
}

function JoinusSection() {
    return (
        <section className="py-20 px-4 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Join us Today
                </h2>
            </div>
            <section className="relative w-full overflow-hidden container max-w-full h-[50vh]">
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
                    <div className="col-span-1 flex items-end justify-end pb-10">
                        <p className="text-xl text-muted leading-relaxed font-extralight text-center tracking-wide p-2">
                            “If you’re a radiologist who values precision, efficiency, and purpose - Somatiq is your next home”                    </p>
                    </div>
                    <div className="col-span-1"></div>

                    {/* Row 2 */}
                    <div className="col-span-1"></div>
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        {/* Apply Now Line */}
                        <div className="flex items-center justify-center gap-2 text-sm pt-8">
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className='text-foreground font-extralight'>Apply Now: <span className="font-medium tracking-wide">info@somatiq.ai</span></span>
                        </div>

                        {/* Check for positions text */}
                        <div className="text-sm text-foreground font-extralight">
                            Check for open positions at Somatiq
                        </div>

                        {/* Button */}
                        <div>
                            <button className="bg-white text-black font-medium text-sm px-3 py-2 rounded hover:bg-gray-100 transition-colors">
                                CAREERS AT SOMATIQ
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                </div>
            </section>
        </section>
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