import bgimage1 from "@/assets/teleradiology/hero-left.png";
import bgimage2 from "@/assets/teleradiology/hero-section.png";
import { motion } from "framer-motion";
import { HeroSectionMobile } from "@/pages/teleradiology/components/hero-section-mobile";


export default function HeroSection() {
    return (
        <motion.section 
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="relative w-full overflow-hidden hidden md:flex items-center justify-center container max-w-full h-[90vh] -mt-16">
            {/* Background images with blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                {/* Top gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(92, 53, 106, ), transparent)',
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
                        filter: 'blur(60px) brightness(1.5) drop-shadow(0 0 40px rgba(255, 123, 229, 0.5))'
                    }}
                />
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-4 md:grid-rows-4 relative w-full h-full z-10 ">
                {/* Vertical gradient borders */}
                <div 
                    className="absolute top-0 bottom-0 xl:left-[30%] lg:left-1/4 w-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 229, 1) 27%, rgba(255, 123, 229, 1) 73%, rgba(255, 123, 229, 0) 89%)'
                    }}
                />
                <div 
                    className="absolute top-0 bottom-0 xl:right-[30%] lg:right-1/4  w-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 229, 1) 27%, rgba(255, 123, 229, 1) 73%, rgba(255, 123, 229, 0) 89%)'
                    }}
                />
                {/* Horizontal gradient borders */}
                <div 
                    className="absolute left-0 right-0 top-1/4 h-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 255, 1) 21%, rgba(255, 123, 229, 1) 79%, rgba(255, 123, 229, 0) 87%)'
                    }}
                />
                <div 
                    className="absolute left-0 right-0 top-2/4 h-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 255, 1) 21%, rgba(255, 123, 229, 1) 79%, rgba(255, 123, 229, 0) 87%)'
                    }}
                />
                <div 
                    className="absolute left-0 right-0 top-3/4 h-px pointer-events-none opacity-30 hidden md:block"
                    style={{
                        background: 'linear-gradient(to right, rgba(255, 123, 229, 0) 13%, rgba(255, 123, 255, 1) 21%, rgba(255, 123, 229, 1) 79%, rgba(255, 123, 229, 0) 87%)'
                    }}
                />
                {/* Intersection points */}
                {/* Vertical line 1 (1/4 on lg) intersections */}
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:left-[30%] lg:left-[25%] hidden md:block"
                    style={{
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:left-[30%] lg:left-[25%] hidden md:block"
                    style={{
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:left-[30%] lg:left-[25%] hidden md:block"
                    style={{
                        top: '75%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {/* Vertical line 3 (3/4 on lg) intersections - only on large screens */}
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:right-[29.8%] lg:right-[24.7%] hidden md:block"
                    style={{
                        top: '25%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:right-[29.8%] lg:right-[24.7%] hidden md:block"
                    style={{
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div 
                    className="absolute w-1 h-1 bg-foreground/90 pointer-events-none xl:right-[29.8%] lg:right-[24.7%] hidden md:block"
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
                <motion.div 
                    className="flex flex-col items-center justify-center xl:col-span-3 lg:col-span-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                   <motion.h1 
                       className=" text-4xl font-light text-white mb-3 tracking-wide text-center leading-normal"
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1, delay: 0.3 }}
                   >
                    <label className="text-gradient md:text-[50px] text-3xl">24/7 Expert Teleradiology</label>
                   </motion.h1>
                   <motion.p 
                       className="text-xl text-white/80 uppercase tracking-wider font-light"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1, delay: 0.4 }}
                   >
                    <label className="text-gradient text-base">TRUSTED. FAST. UNIFIED.</label>
                   </motion.p>
                </motion.div>
                <div className="col-span-1 xl:hidden lg:block"></div>
                
                {/* Row 3 - Center cell with title and subtitle */}
                <div className="xl:col-span-1"></div>
                <motion.div 
                    className="flex items-center justify-center xl:col-span-1 lg:col-span-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p className="text-xl leading-relaxed font-extralight text-center tracking-wide p-2 ">
                        Comprehensive emergency and subspecialty reporting for hospitals and diagnostic networks — delivered through a unified, secure AI enabled platform.
                    </p>
                </motion.div>
                <div className="col-span-1 hidden lg:block xl:hidden"></div>
                
                {/* Row 4 - Center cell with description */}
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1 xl:hidden lg:block"></div>
            </div>
            </div>
            <HeroSectionMobile />
           
        </motion.section>
    );
}