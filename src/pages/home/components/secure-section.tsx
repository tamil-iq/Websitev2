import { cn } from '@/lib/utils';
import { Separator } from '@/components/common/separator';
import { getPngImageUrl } from '@/components/utils/assets';
import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ["Unified", "AI-Enabled", "Cloud-native", "Affordable"];

type TabContent = {
    title: string;
    description: string;
    videoPlaceholder: string;
};

const tabContents: Record<string, TabContent> = {
    "Unified": {
        title: "Unified Workspace",
        description: "Complete radiology workspace—viewer, reporting, collaboration—in one interface.",
        videoPlaceholder: "Unified Platform Demo"
    },
    "AI-Enabled": {
        title: "AI-Enabled Features",
        description: "Intelligent workflows with AI-powered diagnostics and automation.",
        videoPlaceholder: "AI Features Demo"
    },
    "Cloud-native": {
        title: "Cloud-Native Architecture",
        description: "Access anywhere, anytime with zero footprint cloud deployment.",
        videoPlaceholder: "Cloud Access Demo"
    },
    "Affordable": {
        title: "Affordable Solution",
        description: "Enterprise-grade radiology platform at accessible pricing.",
        videoPlaceholder: "Pricing Overview"
    }
};

// const testimonialData = {
//     quote:
//         "The platform facilitates efficient scheduling and resource management, optimizing the use of imaging equipment.",
//     author: {
//         name: "Dr. Jenny D'souza",
//         title: "Manager | City Hospital",
//         avatarUrl: "",
//     },
// };

type FeatureAccent = 'emerald' | 'amber' | 'violet';

type Feature = {
    title: string;
    description: string;
    highlighted: boolean;
    accent: FeatureAccent;
    imageUrl: string;
};

const features = [
    {
        title: "Your command center",
        description: "Every imaging journey starts here—with a smart worklist that understands urgency, workflow, and clinical context.",
        highlighted: true,
        accent: 'emerald',
        imageUrl: getPngImageUrl('command-center'),
    },
    {
        title: "AI that works with you",
        description: "Prior study summaries. Impression suggestions. Grammar correction. Intelligence that supports your judgment—not a separate tool.",
        highlighted: false,
        accent: 'amber',
        imageUrl: getPngImageUrl('agentic-ai'),
    },
    {
        title: "Access Anywhere",
        description: "Phone, tablet, or workstation—view studies without downloads, installs, or software dependencies. Zero footprint.",
        highlighted: false,
        accent: 'violet',
        imageUrl: getPngImageUrl('device'),
    },
] satisfies ReadonlyArray<Feature>;


const accentStyles: Record<FeatureAccent, { glow: string; icon: string; border: string }> = {
    emerald: {
        glow: 'bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.22),transparent_60%)]',
        icon: 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20',
        border: 'border-emerald-500/15',
    },
    amber: {
        glow: 'bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.20),transparent_60%)]',
        icon: 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20',
        border: 'border-amber-500/15',
    },
    violet: {
        glow: 'bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.22),transparent_60%)]',
        icon: 'bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20',
        border: 'border-violet-500/15',
    },
};

type ViewerSectionProps = {
    hideLocalGradient?: boolean;
};

const ViewerSection = ({ hideLocalGradient = false }: ViewerSectionProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const currentTab = tabs[activeTab];
    const currentContent = tabContents[currentTab];

    return (
        <section id="everything-section" className="relative py-24 px-6 overflow-hidden bg-background">
            <div className={cn(
                "pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0855b4]/25 to-transparent transition-opacity duration-300",
                hideLocalGradient ? "opacity-0" : "opacity-100"
            )} />

            <div className="relative xl:mx-24  space-y-16">

                {/* Header */}
                <div className="text-center mb-10 flex flex-col gap-7">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground ">
                        Everything you need. Built for modern radiology.
                    </h2>
                    {/* <p className='text-muted font-extralight tracking-wide max-w-3xl mx-auto'>
                        A complete radiology workspace—viewer, reporting, collaboration—in one unified interface. Intelligence woven into every interaction, native to the workflow from the start.
                    </p> */}

                    {/* Tabs */}
                    <div className=' flex items-center justify-center'>
                        <div className=' flex border border-background-gradient/60 tab-primary-gradient rounded-md '>
                            {tabs.map((label, index) => (
                                <motion.button
                                    key={label}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveTab(index)}
                                    className={`${activeTab === index ? "" : "hover:text-foreground/60"
                                        } relative cursor-pointer rounded-md px-5 py-1.5 text-sm font-extralight tracking-wider outline-primary transition focus-visible:outline-2`}
                                    style={{
                                        WebkitTapHighlightColor: "transparent",
                                    }}
                                >
                                    {/* {activeTab === index && (
                                        <motion.span
                                            layoutId="bubble"
                                            className="absolute inset-0 z-10 bg-primary/20"
                                            style={{ borderRadius: 6 }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )} */}
                                    <span className={activeTab === index ? "text-foreground font-normal" : "text-foreground"}>
                                        {label}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mb-16">
                    <div className="relative mx-auto max-w-4xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent rounded-2xl blur-2xl scale-95" />
                        {/* Mockup container */}
                        <div className="relative drop-shadow-[0_-30px_16px_rgba(0,0,0,0.25)] drop-shadow-radix-gradient/50 border border-border rounded-xl overflow-hidden max-w-3xl mx-auto">
                            <div className=' video-wrapper'>
                                <div className='video-container bg-background rounded-md'>
                                    <motion.div
                                        key={currentContent.videoPlaceholder}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="aspect-video w-full bg-black/50 rounded-lg flex items-center justify-center"
                                    >
                                        <span className="text-foreground text-sm">{currentContent.videoPlaceholder}</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator bgColor='bg-linear-to-r from-transparent via-foreground/20 to-transparent' />

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative rounded-2xl p-px transition-transform duration-300 hover:-translate-y-1">
                            <div
                                className={`pointer-events-none absolute inset-0 rounded-2xl opacity-70 blur-[10px] transition-opacity duration-300 group-hover:opacity-100 ${accentStyles[feature.accent].glow
                                    }`}
                            />

                            <div
                                className={`relative h-full rounded-2xl border bg-card/30 backdrop-blur-md p-5 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] transition-colors duration-300 ${feature.highlighted
                                    ? accentStyles[feature.accent].border
                                    : 'border-border/50 group-hover:border-border'
                                    }`}
                            >
                                <div className="flex flex-col items-start ">
                                    <div className='flex justify-between items-center gap-2'>
                                        <div>
                                            <img
                                                src={feature.imageUrl}
                                                alt={feature.title}
                                                className="h-6 w-6 object-contain"
                                            />
                                        </div>
                                        <h3 className="text-lg font-normal tracking-wide text-foreground">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="mt-2 text-sm leading-relaxed text-muted font-extralight tracking-wide">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ViewerSection;