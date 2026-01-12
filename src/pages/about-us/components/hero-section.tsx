import { motion } from 'framer-motion';
import bgimage1 from "@/assets/about-us/about-us-left.png";
import bgimage2 from "@/assets/about-us/about-us-right.png";

export default function HeroSection() {
    return (
        <motion.section
            className="relative w-full overflow-hidden flex items-center justify-center container max-w-full min-h-[85vh] pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background images with blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0.3), transparent)',
                        opacity: 0.7
                    }}
                />
                {/* Top left background image */}
                <div
                    className="absolute bottom-0 left-0 w-7/12 h-full opacity-70 bg-cover bg-center blur-xl"
                    style={{
                        backgroundImage: `url(${bgimage1})`,
                        filter: 'blur(40px) brightness(1.5) contrast(1) saturate(1.5)'
                    }}
                />
                {/* Bottom right background image */}
                <div
                    className="absolute bottom-0 right-0 w-[1024px] h-[1040px] opacity-50 bg-cover bg-center blur-xl"
                    style={{
                        backgroundImage: `url(${bgimage2})`,
                        transform: 'translate(45%, 0%)',
                        filter: 'blur(60px) brightness(1.5) drop-shadow(0 0 40px rgba(70, 153, 248, 0.5))'
                    }}
                />
            </div>

            {/* Content - Centered layout */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-3 mb-8"
                >
                    <span className="w-5 h-3 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/70 font-light tracking-wide">Our Story</span>
                    <svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-8 leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Why We Built{' '}
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        SOMATIQ
                    </span>
                </motion.h1>

                {/* Story paragraphs */}
                <motion.p
                    className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    We built Somatiq because the imaging infrastructure in our country is{' '}
                    <span className="text-foreground font-medium">fundamentally broken</span>.
                    Dominated by legacy vendors, lacking innovation, and not built for the future.
                </motion.p>

                <motion.p
                    className="text-xl md:text-2xl text-primary font-medium leading-relaxed max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    This is not just a technology gap — it is a healthcare problem.
                </motion.p>

                <motion.p
                    className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Diagnosis sits at the core of patient care. When workflows are fragmented, outcomes suffer.
                    We saw a messy ecosystem that needed <span className="text-primary font-medium">rebuilding</span>, not patching.
                </motion.p>
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Vertical lines */}
                <div
                    className="absolute top-0 bottom-0 left-1/4 w-px opacity-20"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(70, 153, 248, 0.5) 30%, rgba(70, 153, 248, 0.5) 70%, transparent)'
                    }}
                />
                <div
                    className="absolute top-0 bottom-0 right-1/4 w-px opacity-20 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(70, 153, 248, 0.5) 30%, rgba(70, 153, 248, 0.5) 70%, transparent)'
                    }}
                />
                {/* Horizontal line */}
                <div
                    className="absolute left-0 right-0 top-1/2 h-px opacity-20"
                    style={{
                        background: 'linear-gradient(to right, transparent, rgba(70, 153, 248, 0.5) 20%, rgba(70, 153, 248, 0.5) 80%, transparent)'
                    }}
                />
                {/* Intersection points */}
                <div className="absolute w-1 h-1 bg-foreground/60 left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-1 h-1 bg-foreground/60 right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 hidden md:block" />
            </div>
        </motion.section>
    );
}
