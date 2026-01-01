import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const benefits = [
    {
        title: "Culture of Excellence and Trust",
        description: "At Somatiq, radiologists lead. Our team culture values autonomy, quality, and mutual respect — no compromises on standards",
    },
    {
        title: "Technology that works for you",
        description: "Experience a unified, AI-powered RIS-PACS designed by radiologists, for radiologists. Zero lag. No clunky systems. Intelligent automation for reporting, transcription, and workflow efficiency.",
    },
    {
        title: "Work that matters",
        description: "Be part of a mission that’s improving access to quality diagnostics across India and beyond.",
    },
    {
        title: "Flexible, work anywhere",
        description: "Whether you prefer working from your home workstation or from one of our partner centers, we offer flexible models — full-time, or part-time — built around your lifestyle",
    },
    {
        title: "Collaborative Team & Continuous Growth",
        description: "Join a vibrant, multispecialty radiology team to collaborate, learn, and grow together through exclusive academic discussions, peer review, case-based learning, and research.",
    },
    {
        title: "Rewards That Recognize Your Expertise",
        description: "Competitive remuneration, performance-linked incentives, and transparent reporting metrics. Earn fairly for your time and skill, with reliable support and on-time payouts.",
    },
]

const looking = [
    {
        description: "Strong commitment to quality, communication, and ethical reporting"
    },
    {
        description: "Board-certified Radiologists (MD/DNB) with valid registration"
    },
    {
        description: "Familiarity with digital workflows or willingness to adapt to AI-enabled tools"
    },
    {
        description: "Subspecialty expertise (optional): Neuroradiology, MSK, Chest, Body Imaging, Emergency, or Women’s Imaging"
    }
]

const opportunities = [
    {
      title: "Engineering & AI Development:",
      description: "Build next-gen RIS-PACS and intelligent diagnostic tools."
    },
    {
      title: "Data Science & Research:",
      description: "Develop learning systems that power clinical insight."
    },
    {
      title: "Operations & Support:",
      description: "Ensure smooth global workflows with reliability and precision."
    },
    {
      title: "Product & Partnerships:",
      description: "Bridge clinical and technical excellence to drive adoption."
    },
    {
      title: "Design & Communication:",
      description: "Create intuitive, human-centered user experiences."
    }
  ];


function WhyJoinUsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const benefitVariants = {
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
            className="relative w-full overflow-hidden container max-w-6xl mx-auto h-auto md:h-[70vh]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className=" flex flex-col justify-between items-center gap-14">
                <motion.div variants={headerVariants}>
                    <h2 className="text-3xl font-light tracking-wide text-foreground mb-4 ">Why Join Somatiq?</h2>
                </motion.div>

                {/* benefits section */}
                <section className="relative w-full overflow-hidden flex items-center justify-center container max-w-full md:h-full ">

                    <motion.div 
                        className="grid grid-cols-3 grid-rows-2 relative w-full  z-10"
                        variants={containerVariants}
                    >
                        {/* Vertical gradient borders */}
                        <div
                            className="absolute top-0 bottom-0 left-1/3 w-px pointer-events-none opacity-30"
                            style={{
                                background: 'linear-gradient(to bottom, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 27%, rgb(70, 153, 248) 73%, rgb(70, 153, 248,0.1) 89%)'
                            }}
                        />
                        <div
                            className="absolute top-0 bottom-0 left-2/3 w-px pointer-events-none opacity-30"
                            style={{
                                background: 'linear-gradient(to bottom, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 27%, rgb(70, 153, 248) 73%, rgb(70, 153, 248,0.1) 89%)'
                            }}
                        />
                        {/* Horizontal gradient borders */}
                        <div
                            className="absolute left-0 right-0 top-2/4 h-px pointer-events-none opacity-30"
                            style={{
                                background: 'linear-gradient(to right, rgb(70, 153, 248,0.1) 13%, rgb(70, 153, 248,0.6) 21%, rgb(70, 153, 248) 79%, rgb(70, 153, 248,0.1) 87%)'
                            }}
                        />

                        <div
                            className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                            style={{
                                left: '33.33%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />

                        {/* dot points for the vertical lines */}
                        <div
                            className="absolute w-1 h-1 bg-foreground/90 pointer-events-none"
                            style={{
                                left: '66.66%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />


                        {/* Row 1 */}
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <motion.div 
                                key={index} 
                                className="flex flex-col items-start justify-start p-8 gap-2"
                                variants={benefitVariants}
                            >
                                <h3 className="text-xl font-normal text-foreground mb-3 text-left tracking-wide">{benefit.title}</h3>
                                <p className="text-sm font-light text-muted text-left leading-relaxed tracking-wider">{benefit.description}</p>
                            </motion.div>
                        ))}

                        {/* Row 2 */}
                        {benefits.slice(3, 6).map((benefit, index) => (
                            <motion.div 
                                key={index + 3} 
                                className="flex flex-col items-start justify-start p-8 gap-2"
                                variants={benefitVariants}
                            >
                                <h3 className="text-xl font-normal text-foreground mb-3 text-left tracking-wide max-w-2xs">{benefit.title}</h3>
                                <p className="text-sm font-extralight text-muted text-left leading-relaxed tracking-wider">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </motion.section>
    )
}

function LookingForSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15
            }
        }
    };

    const headerVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const featureVariants = {
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
            className="py-24 px-4 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className=" flex flex-col items-center gap-14">
                {/* header */}
                <motion.div className=" flex items-center justify-center" variants={headerVariants}>
                    <h2 className="text-3xl font-light tracking-wide text-foreground mb-4 ">Who we’re looking for?</h2>
                </motion.div>
                <motion.div className="relative grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto" variants={containerVariants}>
                    {/* Vertical gradient border */}
                    <div
                        className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none opacity-30"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgb(70, 153, 248) 0%, rgb(70, 153, 248, 0.6) 50%, rgb(70, 153, 248, 0.1) 100%)'
                        }}
                    />
                    {/* Horizontal gradient border */}
                    <div
                        className="absolute left-0 right-0 top-1/2 h-px pointer-events-none opacity-30"
                        style={{
                            background: 'linear-gradient(to right, rgb(70, 153, 248,0.5) 13%, rgb(70, 153, 248,0.6) 21%, rgb(70, 153, 248) 79%, rgb(70, 153, 248,0.1) 87%)'
                        }}
                    />
                    {/* Center intersection dot */}
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground/90 -translate-x-1/2 -translate-y-1/2 z-10" />

                    {looking.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className={cn("flex flex-col items-center justify-center gap-3 p-8",
                            index === 0 || index === 2 ? 'items-end' : 'items-start')}
                            variants={featureVariants}
                        >
                            <p className="text-base tracking-wide text-foreground/80 font-light leading-relaxed max-w-2xs">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

function OpportunitySection(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const opportunityVariants = {
        hidden: { 
            opacity: 0, 
            x: -30 
        },
        visible: { 
            opacity: 1, 
            x: 0
        }
    };

    return(
        <motion.div 
            className=" text-foreground flex items-center justify-center p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
      <motion.div className="max-w-4xl w-full" variants={containerVariants}>
        {/* Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h1 className="text-5xl font-light mb-4">
            Opportunities at Somatiq
          </h1>
          <p className="text-xl font-light text-gray-300">
            Let's Build The Future Of Radiology, Together
          </p>
        </motion.div>

        {/* Opportunities List */}
        <motion.div className="space-y-6" variants={containerVariants}>
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className={cn("border-t border-muted pt-6", index === 0 ? "border-t-0" : "")}
              variants={opportunityVariants}
            >
              <h2 className="text-lg font-light tracking-wide mb-2">
                {opportunity.title}
              </h2>
              <p className="text-muted font-extralight tracking-wide text-sm">
                {opportunity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    )
}

function JoinusSection() {
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

    const headerVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const quoteVariants = {
        hidden: { 
            opacity: 0, 
            y: 30 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    };

    const contactVariants = {
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
            className="py-20 px-4 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className="text-center mb-16" variants={headerVariants}>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                    Join us Today
                </h2>
            </motion.div>
            <motion.section 
                className="relative w-full overflow-hidden container max-w-full h-[50vh]"
                variants={containerVariants}
            >
                <div className="grid grid-cols-3 grid-rows-2 relative w-full h-full z-10">
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
                        className="absolute left-0 right-0 top-1/2 h-px pointer-events-none opacity-30"
                        style={{
                            background: 'linear-gradient(to right, rgba(70, 153, 248, 0) 25%, rgba(70, 153, 248, 1) 30%, rgba(70, 153, 248, 1) 70%, rgba(70, 153, 248, 0) 75%)'
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
                    <motion.div className="col-span-1 flex items-end justify-center pb-10" variants={quoteVariants}>
                        <p className="text-xl text-foreground leading-relaxed font-extralight text-center tracking-wide p-2 max-w-sm">
                            "If you're a radiologist who values precision, efficiency, and purpose - Somatiq is your next home"</p>
                    </motion.div>
                    <div className="col-span-1"></div>

                    {/* Row 2 */}
                    <div className="col-span-1"></div>
                    <motion.div className="max-w-4xl mx-auto text-center space-y-4" variants={contactVariants}>
                        {/* Apply Now Line */}
                           <div className="flex items-center justify-center gap-2 text-sm pt-8">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center justify-start gap-2">
                                    <svg
                                        className="w-4 h-4 text-[#4699F8]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className='text-foreground font-extralight'> Apply Now:</span>
                                </div>
                                <div className="flex items-center justify-end">
                                    <a href="mailto:info@somatiq.ai" className="font-medium tracking-wide text-[#4699F8] hover:underline transition-all">info@somatiq.ai</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center justify-start gap-2">
                                    <svg
                                        className="w-4 h-4 text-[#4699F8]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <span className='text-foreground font-extralight'>Learn more:</span>
                                </div>
                                <div className="flex items-center justify-end">
                                    <a href="https://www.somatiq.ai" target="_blank" rel="noopener noreferrer" className="font-medium tracking-wide text-[#4699F8] hover:underline transition-all">www.somatiq.ai</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="col-span-1"></div>
                </div>
            </motion.section>
        </motion.section>
    )
}

export default function FeatureSection() {
    return (
        <div>
            <WhyJoinUsSection />
            <LookingForSection />
            <OpportunitySection/>
            <JoinusSection/>
        </div>
    )
}