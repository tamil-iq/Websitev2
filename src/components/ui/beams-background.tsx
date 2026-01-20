"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AnimatedButton } from '@/components/common/animated-button';
import { RippleButton } from "@/components/ui/ripple-button";
import { ChevronsRightIcon } from '@/components/ui/right-icon';


interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

const TrustBadge = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-primary/5"
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            <span className="text-sm text-white/70 font-light tracking-wide">
                Trusted by Bengaluru's largest imaging chain
            </span>
        </motion.div>
    );
};

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    className,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 20;
    const trustBadgeRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const buttonsRef = useRef(null);

    const trustBadgeInView = useInView(trustBadgeRef, { once: true, margin: "-100px" });
    const headlineInView = useInView(headlineRef, { once: true, margin: "-100px" });
    const subheadlineInView = useInView(subheadlineRef, { once: true, margin: "-100px" });
    const buttonsInView = useInView(buttonsRef, { once: true, margin: "-100px" });



    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };
    
    // Performance optimization variables
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const targetFPS = isMobile ? 20 : 24; // Much lower FPS for better performance
    const frameInterval = 1000 / targetFPS;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            // Cap DPR at 1.5 for better performance
            const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
            // Reduce canvas size for better performance
            const canvasWidth = isMobile ? window.innerWidth * 0.8 : window.innerWidth;
            const canvasHeight = isMobile ? window.innerHeight * 0.8 : window.innerHeight;
            canvas.width = canvasWidth * dpr;
            canvas.height = canvasHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            // Drastically reduce beam count
            const totalBeams = isMobile ? MINIMUM_BEAMS * 0.4 : MINIMUM_BEAMS * 0.7;
            beamsRef.current = Array.from({ length: Math.floor(totalBeams) }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;

            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.2 + Math.random() * 0.1;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Enhanced gradient with multiple color stops
            gradient.addColorStop(0, `oklch(60.736% 0.19251 253.874 / 0)`);
            gradient.addColorStop(
                0.1,
                `oklch(60.736% 0.19251 253.874 / ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(
                0.4,
                `oklch(60.736% 0.19251 253.874 / ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.6,
                `oklch(60.736% 0.19251 253.874 / ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.9,
                `oklch(60.736% 0.19251 253.874 / ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(1, `oklch(60.736% 0.19251 253.874 / 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        let lastFrameTime = 0;
        
        function animate(timestamp = 0) {
            if (!canvas || !ctx) return;
            
            // Frame rate throttling for better performance
            const elapsed = timestamp - lastFrameTime;
            if (elapsed < frameInterval) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime = timestamp;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Minimal blur for better performance
            ctx.filter = isMobile ? "blur(10px)" : "blur(15px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-neutral-950",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: isMobile ? "blur(5px)" : "blur(8px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: isMobile ? "blur(20px)" : "blur(30px)",
                }}
            />

            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                <div className="relative z-10 xl:max-w-7xl lg:max-w-4xl mx-auto text-center space-y-4">
                {/* Trust badge */}
                <motion.div
                    ref={trustBadgeRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={trustBadgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrustBadge />
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    ref={headlineRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight pb-2"
                >
                    <span className="block text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                        One <span className="hero-wave-text">Intelligent</span> Platform
                    </span>
                    <span className="block mt-3 text-white/90">for Modern Radiology.</span>
                </motion.h1>

                {/* Subheadline - two lines, more prominent */}
                <motion.div
                    ref={subheadlineRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={subheadlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="max-w-2xl mx-auto pt-8 space-y-2"
                >
                    <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
                        RIS, PACS, and Reporting — Unified.
                    </p>
                    <p className="text-lg md:text-xl text-white/60">
                        So radiologists can focus on diagnosis, not software.
                    </p>
                </motion.div>

                {/* CTA buttons - positioned to overlap with sphere */}
                <motion.div
                    ref={buttonsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-16 md:pt-24"
                >
                    <AnimatedButton trackingSource="hero_demo">
                        SCHEDULE A DEMO
                    </AnimatedButton>
                    <RippleButton onClick={() => {
                        trackEngagement('explore_platform', 'hero_section');
                        const radiologistsSection = document.getElementById('radiologists-section');
                        if (radiologistsSection) {
                            radiologistsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }} >
                        <div className="flex items-center gap-2">
                            <span>Explore platform</span>
                            <ChevronsRightIcon />
                        </div>
                    </RippleButton>
                </motion.div>
                </div>
            </div>

        </div>
    );
}
22