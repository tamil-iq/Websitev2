import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ProfileImage from "@/assets/about-us/team/viswa.png";
import TeamSectionPage from './team-card';

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
    {
    value: "5",
    label: "Cities Served",
    sublabel: "Expanding healthcare reach",
  }
];

function StatsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const textVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    return (
        <motion.section 
            className="relative w-full overflow-hidden container max-w-full h-[70vh] -mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="grid grid-cols-3 grid-rows-3 relative w-full h-full z-10">
                {/* Vertical gradient borders */}
                <div
                    className="absolute top-0 bottom-0 left-1/3 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                <div
                    className="absolute top-0 bottom-0 left-2/3 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div
                    className="absolute left-0 right-0 top-1/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 25%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 top-2/3 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 25%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 75%)'
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
                <motion.div className="col-span-1 flex items-center justify-center" variants={textVariants}>
                    <p className="text-xl text-muted leading-relaxed font-extralight text-center tracking-wide p-2">
                        Built by <label className="text-foreground font-light">Radiologists</label> and <label className="text-foreground font-light">Engineers</label> by blending frontline radiology practice with deep expertise in healthcare AI and imaging informatics. Our mission is to help radiologists to <label className=" text-foreground font-light">see clearer, diagnose with confidence</label> and reduce cognitive burden.
                    </p>
                </motion.div>
                <div className="col-span-1"></div>
            </div>
        </motion.section>
    )
}
// Counter component for animating numeric values
function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    // Extract numeric part and suffix (like +, % etc)
    const numericMatch = value.match(/([\d,]+)(.*)/); 
    const numericValue = numericMatch ? numericMatch[1].replace(/,/g, '') : '0';
    const suffix = numericMatch ? numericMatch[2] : '';
    
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => {
        // Format with commas if the original had commas
        const hasCommas = value.includes(',');
        const num = Math.round(latest);
        return hasCommas ? num.toLocaleString() : num.toString();
    });
    
    useEffect(() => {
        if (isInView) {
            const targetValue = parseInt(numericValue, 10);
            const animation = animate(count, targetValue, { duration });
            return animation.stop;
        }
    }, [isInView, count, numericValue, duration]);
    
    return (
        <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
            {isInView ? <motion.span>{rounded}</motion.span> : "0"}
            {suffix}
        </span>
    );
}

function StatsDisplay() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const controls = useAnimation();
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const statVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8,
            y: 30 
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0
        }
    };
    
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.section 
            ref={containerRef}
            className="relative w-full py-16 pt-4 px-4 -mt-24"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-5xl mx-auto"
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            className="flex flex-col items-center text-center px-8 py-6"
                            variants={statVariants}
                        >
                            <Counter value={stat.value} />
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
                </motion.div>
            </div>
        </motion.section>
    )
}

function TeamSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    // const titleVariants = {
    //     hidden: { 
    //         opacity: 0, 
    //         y: 30 
    //     },
    //     visible: { 
    //         opacity: 1, 
    //         y: 0
    //     }
    // };

    // const contentVariants = {
    //     hidden: { 
    //         opacity: 0, 
    //         x: -50 
    //     },
    //     visible: { 
    //         opacity: 1, 
    //         x: 0
    //     }
    // };

    // const profileVariants = {
    //     hidden: { 
    //         opacity: 0, 
    //         x: 50 
    //     },
    //     visible: { 
    //         opacity: 1, 
    //         x: 0
    //     }
    // };

    return (
        <motion.section 
            className="relative w-full overflow-hidden container max-w-6xl mx-auto  mt-52"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* <motion.div className="container mx-auto mb-10" variants={titleVariants}>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-light tracking-wide text-foreground mb-4">Team behind SOMATIQ</h2>
                </div>
            </motion.div> */}
            <TeamSectionPage/>
        </motion.section>
    )
}

function TechnicalAdvisorSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const profileVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: 30 
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0
        }
    };

    return (
        <motion.section 
            className="relative w-full overflow-hidden container max-w-6xl mx-auto h-[70vh] mt-52"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className="container mx-auto mb-10" variants={titleVariants}>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-light tracking-wide text-foreground mb-4">Our Technical Advisors</h2>
                </div>
            </motion.div>

            <div className="grid grid-cols-2 relative h-full z-10" style={{ gridTemplateRows: '2fr 0.5fr 2.5fr' }}>
                {/* Vertical gradient borders */}
                {/* Left border */}
                <div
                    className="absolute top-0 bottom-0 left-0 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Center border */}
                <div
                    className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Right border */}
                <div
                    className="absolute top-0 bottom-0 right-0 w-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                    style={{
                        top: '40%',
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                    style={{
                        top: '50%',
                        background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                    }}
                />
                {/* Intersection points */}
                {/* Left border intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '0%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '0%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Center vertical line (1/2) intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Right border intersections */}
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '100%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                    style={{
                        left: '100%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <motion.div className="col-span-1 flex items-end pb-10" variants={profileVariants}>
                    <div className="flex flex-col gap-4 px-8">
                        <div className="profile-section flex items-center gap-4">
                            <div className="profile-image">
                                <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                            </div>
                            <div className="profile-name flex flex-col gap-1">
                                <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                                <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                            </div>
                        </div>
                        <div className="responsibility-section">
                            <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col-span-1 flex items-end gap-4 pb-10" variants={profileVariants}>
                    <div className="flex flex-col gap-4 px-8">
                        <div className="profile-section flex items-center gap-4">
                            <div className="profile-image">
                                <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                            </div>
                            <div className="profile-name flex flex-col gap-1">
                                <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                                <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                            </div>
                        </div>
                        <div className="responsibility-section">
                            <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Row 2 */}
                <div className="col-span-1 "></div>
                <div className="col-span-1 "></div>

                {/* Row 3 */}
                <motion.div className="col-span-1 pt-10 px-8" variants={profileVariants}>
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </motion.div>
                <motion.div className="col-span-1 pt-10 px-8" variants={profileVariants}>
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

function MedicalAdvisorSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const profileVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: 30 
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0
        }
    };

    return (
        <motion.section 
            className="relative w-full overflow-hidden container max-w-6xl mx-auto h-[70vh] mt-52"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
        <motion.div className="container mx-auto mb-10" variants={titleVariants}>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-light tracking-wide text-foreground mb-4">Our Medical Advisors</h2>
            </div>
        </motion.div>

        <div className="grid grid-cols-2 relative h-full z-10" style={{ gridTemplateRows: '2fr 0.5fr 2.5fr' }}>
            {/* Vertical gradient borders */}
            {/* Left border */}
            <div
                className="absolute top-0 bottom-0 left-0 w-px pointer-events-none opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                }}
            />
            {/* Center border */}
            <div
                className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                }}
            />
            {/* Right border */}
            <div
                className="absolute top-0 bottom-0 right-0 w-px pointer-events-none opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(70, 153, 248, 0) 10%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 80%)'
                }}
            />
            {/* Horizontal gradient borders */}
            <div
                className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                style={{
                    top: '40%',
                    background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                }}
            />
            <div
                className="absolute left-0 right-0 h-px pointer-events-none opacity-30"
                style={{
                    top: '50%',
                    background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 0%, rgba(70, 153, 248, 0.7) 0%, rgba(70, 153, 248, 0.7) 100%, rgba(70, 153, 248, 0) 75%)'
                }}
            />
            {/* Intersection points */}
            {/* Left border intersections */}
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '0%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '0%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Center vertical line (1/2) intersections */}
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Right border intersections */}
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '100%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                style={{
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Row 1 */}
            <motion.div className="col-span-1 flex items-end pb-10" variants={profileVariants}>
                <div className="flex flex-col gap-4 px-8">
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className="col-span-1 flex items-end gap-4 pb-10" variants={profileVariants}>
                <div className="flex flex-col gap-4 px-8">
                    <div className="profile-section flex items-center gap-4">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                        </div>
                        <div className="profile-name flex flex-col gap-1">
                            <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                            <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                        </div>
                    </div>
                    <div className="responsibility-section">
                        <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                    </div>
                </div>
            </motion.div>

            {/* Row 2 */}
            <div className="col-span-1 "></div>
            <div className="col-span-1 "></div>

            {/* Row 3 */}
            <motion.div className="col-span-1 pt-10 px-8" variants={profileVariants}>
                <div className="profile-section flex items-center gap-4">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                    </div>
                    <div className="profile-name flex flex-col gap-1">
                        <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                        <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                    </div>
                </div>
                <div className="responsibility-section">
                    <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                </div>
            </motion.div>
            <motion.div className="col-span-1 pt-10 px-8" variants={profileVariants}>
                <div className="profile-section flex items-center gap-4">
                    <div className="profile-image">
                        <img src={ProfileImage} alt="Profile Image" width={100} height={100} />
                    </div>
                    <div className="profile-name flex flex-col gap-1">
                        <label className="text-lg font-light tracking-wide text-foreground">Dr. Vishwanath R S</label>
                        <span className="text-sm text-muted font-extralight tracking-wide">MD, CIIP – Co-Founder & CEO</span>
                    </div>
                </div>
                <div className="responsibility-section">
                    <p className="text-sm text-muted font-extralight tracking-wide">Radiologist and healthcare technology expert with over a decade of experience. Formerly at Siemens Healthineers, he shaped AI-enabled radiology products globally.</p>
                </div>
            </motion.div>
        </div>
    </motion.section>
    )
}


export default function FeatureSection() {
    return (
        <div>
            <StatsSection />
            <StatsDisplay />
            <TeamSection />
            <TechnicalAdvisorSection />
            <MedicalAdvisorSection />
        </div>
    )
}