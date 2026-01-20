import { motion } from 'framer-motion';
import bgimage1 from "@/assets/about-us/about-us-left.png";
import bgimage2 from "@/assets/about-us/about-us-right.png";


export default function HeroSection() {
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

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const subtitleVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.section 
            className="relative w-full overflow-hidden flex items-center justify-center container max-w-full h-[90vh] -mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Background images with blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(70, 153, 248,0.3), transparent)',
                        opacity: 0.7
                    }}
                />
                {/* Top left background image */}
                <div
                    className="absolute bottom-0 left-0 w-7/12 h-full opacity-70 bg-cover bg-center blur-xl"
                    style={{
                        backgroundImage: `url(${bgimage1})`,
                        filter: 'blur(40px) brightness(1.1)'
                    }}
                />
                {/* Bottom right background image */}
                <div 
                    className="absolute bottom-0 right-0 w-[1024px] h-[1040px] opacity-50 bg-cover bg-center blur-xl"
                    style={{
                        backgroundImage: `url(${bgimage2})`,
                        transform: 'translate(10%, 0%)',
                        filter: 'blur(60px) brightness(1.1)'
                    }}
                />
            </div>

            <motion.div 
                className="grid xl:grid-cols-3 lg:grid-cols-4 md:grid-rows-4 relative w-full h-full z-10"
                variants={gridVariants}
            >
                {/* Vertical gradient borders */}
                <div 
                    className="absolute top-0 bottom-0 xl:left-[25%] lg:left-1/4 w-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 27%, rgb(70, 153, 248) 73%, rgb(70, 153, 248,0.1) 89%)'
                    }}
                />
                <div 
                    className="absolute top-0 bottom-0 xl:right-[25%] lg:right-1/4  w-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 27%, rgb(70, 153, 248) 73%, rgb(70, 153, 248,0.1) 89%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                 <div 
                    className="absolute left-0 right-0 top-1/4 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 21%, rgb(70, 153, 248) 79%, rgb(70, 153, 248,0.1) 87%)'
                    }}
                />
                <div 
                    className="absolute left-0 right-0 top-2/4 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 21%, rgb(70, 153, 248) 79%, rgb(70, 153, 248,0.1) 87%)'
                    }}
                />
                <div 
                    className="absolute left-0 right-0 top-3/4 h-px pointer-events-none opacity-30"
                    style={{
                        background: 'linear-gradient(to right, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 21%, rgb(70, 153, 248) 79%, rgb(70, 153, 248,0.1) 87%)'
                    }}
                />
                {/* Intersection points */}
                {/* Vertical line 1 (1/4 on lg) intersections */}
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:left-[25%] lg:left-[25%] hidden md:block"
                    style={{
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:left-[25%] lg:left-[25%] hidden md:block"
                    style={{
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:left-[25%] lg:left-[25%] hidden md:block"
                    style={{
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Vertical line 3 (3/4 on lg) intersections - only on large screens */}
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:right-[24.8%] lg:right-[24.7%] hidden md:block"
                    style={{
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:right-[24.8%] lg:right-[24.7%] hidden md:block"
                    style={{
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:right-[24.8%] lg:right-[24.7%] hidden md:block"
                    style={{
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Row 1 */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1 xl:hidden lg:block"></div>
                
                {/* Row 2 */}
                <div className="lg:col-span-1 xl:hidden"></div>
                <motion.div className="flex flex-col items-center justify-center xl:col-span-3 lg:col-span-2" variants={titleVariants}>
                   <p className="text-4xl font-light text-white mb-3 tracking-wide text-center leading-normal">Why We Built&nbsp;
                   <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">SOMATIQ</span>
                   </p>
                   <p className='text-muted text-lg'>This is not just a <label className='text-primary'>technology gap</label>. It is a <label className='text-primary'>healthcare problem.</label></p>
                </motion.div>
                <div className="col-span-1 xl:hidden lg:block"></div>
                
                {/* Row 3 - Center cell with title and subtitle */}
                <div className="xl:col-span-1"></div>
                <motion.div className="flex flex-col items-center justify-center xl:col-span-1 lg:col-span-2 " variants={subtitleVariants}>
                <p className="text-lg md:text-xl text-foreground/70 font-extralight leading-relaxed mb-6 text-center" style={{ opacity: 1, transform: 'none' }}>We built Somatiq because the imaging infrastructure in our country is <span className="text-foreground font-medium">fundamentally broken</span>. Dominated by legacy vendors, lacking innovation, and not built for the future.</p>
                </motion.div>
                <div className="col-span-1 hidden lg:block xl:hidden"></div>
                
                {/* Row 4 - Center cell with description */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1 xl:hidden lg:block"></div>
            </motion.div>
        </motion.section>
    );
}