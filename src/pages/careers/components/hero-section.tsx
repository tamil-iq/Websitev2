import { motion } from 'framer-motion';
import heroimage from "@/assets/careers/careers-hero.png";

export default function HeroSection() {
    return (
        <motion.section
            className="relative w-full overflow-hidden flex items-center justify-center container max-w-full min-h-[85vh] pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.15), transparent 60%)',
                    }}
                />
                {/* Subtle radial glow */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3), transparent 70%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-3 mb-8"
                >
                    <span className="w-5 h-3 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/70 font-light tracking-wide">Careers</span>
                    <svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Build the Future of{' '}
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        Radiology
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Join engineers, designers, and operators shaping how diagnostics work.
                    We're building intelligent software that makes radiology more accessible and efficient.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <img
                        src={heroimage}
                        alt="Somatiq Team"
                        className="w-40 md:w-48 rounded-xl shadow-lg shadow-primary/10"
                    />
                </motion.div>
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 bottom-0 left-1/4 w-px opacity-20"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5) 30%, rgba(59, 130, 246, 0.5) 70%, transparent)'
                    }}
                />
                <div
                    className="absolute top-0 bottom-0 right-1/4 w-px opacity-20 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5) 30%, rgba(59, 130, 246, 0.5) 70%, transparent)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 top-1/2 h-px opacity-20"
                    style={{
                        background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5) 20%, rgba(59, 130, 246, 0.5) 80%, transparent)'
                    }}
                />
                <div className="absolute w-1 h-1 bg-foreground/60 left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-1 h-1 bg-foreground/60 right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 hidden md:block" />
            </div>
        </motion.section>
    );
}
