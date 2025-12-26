import { Sparkles, Zap, Globe, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = ["Unified", "AI-Enabled", "Cloud-native", "Affordable"];

type FeatureAccent = 'emerald' | 'amber' | 'violet';

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
    highlighted: boolean;
    accent: FeatureAccent;
};

const features = [
    {
        icon: Sparkles,
        title: "Your command center",
        description: "This is where every imaging journey begins—with a smart, prioritized worklist that understands urgency, workflow, and clinical context.",
        highlighted: true,
        accent: 'emerald',
    },
    {
        icon: Zap,
        title: "Super power for Radiologists - Agentic AI",
        description: "This is not automation replacing radiologists—it's intelligence amplifying expertise.",
        highlighted: false,
        accent: 'amber',
    },
    {
        icon: Globe,
        title: "Access Anywhere. Access Faster.",
        description: "Access cases securely on any device—phone, tablet, or workstation. Radiologists and clinicians can view studies without downloads or software.",
        highlighted: false,
        accent: 'violet',
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

const ViewerSection = () => {
    return (
        <section className="relative py-24 px-6 overflow-hidden bg-background">
                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0855b4]/25 to-transparent" />

            <div className="relative mx-24">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8">
                        A Secure, Hybrid and Intuitive Viewer
                    </h2> 

                    {/* Tabs */}
                    <div className=' flex items-center justify-center'>
                        <div className=' flex border border-background-gradient/60 tab-primary-gradient rounded-md'>
                            {tabs.map((label,index) => (
                                <span key={index} className={cn(
                                    'font-extralight text-base tracking-wider border-background-gradient/40 px-5 py-1 cursor-pointer',
                                    index === 0 && 'pl-2',
                                    index < tabs.length - 1 && 'border-r'
                                )}>
                                    {label}
                                </span>
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
                                    <div className="aspect-video w-full bg-black/50 rounded-lg flex items-center justify-center">
                                        <span className="text-foreground text-sm">Video placeholder</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-[90%] mx-auto">
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
                                <div className="flex items-start gap-3">
                                   

                                    <div>
                                        <div className='flex items-center gap-2'>
                                    <div
                                        className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accentStyles[feature.accent].icon
                                            }`}
                                    >
                                        <feature.icon className="h-4 w-4" />
                                    </div>
                                        <h3 className="text-sm font-semibold text-foreground">
                                            {feature.title}
                                        </h3>
                                        </div>
                                        

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