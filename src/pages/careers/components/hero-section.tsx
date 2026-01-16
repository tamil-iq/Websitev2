import { motion } from 'framer-motion';
import heroimage from "@/assets/careers/careers-hero.png";
import bgimage1 from "@/assets/about-us/about-us-left.png";
import bgimage2 from "@/assets/about-us/about-us-right.png";


export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.1
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

    // const subtitleVariants = {
    //     hidden: { 
    //         opacity: 0, 
    //         y: 30 
    //     },
    //     visible: { 
    //         opacity: 1, 
    //         y: 0
    //     }
    // };

    const descriptionVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    // const missionVariants = {
    //     hidden: { 
    //         opacity: 0, 
    //         y: 30 
    //     },
    //     visible: { 
    //         opacity: 1, 
    //         y: 0
    //     }
    // };

    return (

        <section className="relative w-full overflow-hidden flex items-center justify-center container max-w-full h-[90vh] -mt-16">
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
                className=" flex flex-col items-center justify-center gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                    <div className=" flex flex-col items-center">
                        <img src={heroimage} alt="Hero Image" className="w-1/3 h-fullobject-cover" />
                    </div>

                    <motion.div 
                        className=" flex flex-col items-center justify-center gap-6"
                        variants={containerVariants}
                    >
                        <motion.h1 className="text-5xl font-normal tracking-wide text-foreground" variants={titleVariants}>
                            <label className='text-gradient'>Build the Future of Radiology</label>
                        </motion.h1>
                        {/* <motion.p className="text-xl text-foreground font-extralight tracking-wide" variants={subtitleVariants}>
                            For Radiologists — Shape the Future of Radiology & AI
                        </motion.p> */}
                        <motion.span className="text-sm text-muted font-light tracking-wider max-w-xl" variants={descriptionVariants}>
                        Join engineers, designers, and operators shaping how diagnostics work. We're building intelligent software that makes radiology more accessible and efficient.                        </motion.span>
                        {/* <motion.span className="text-sm text-foreground font-light tracking-wide" variants={missionVariants}>
                            Our mission: faster, smarter, and more fulfilling reporting.
                        </motion.span> */}
                    </motion.div>
                </motion.div>


        </section>
    )
}