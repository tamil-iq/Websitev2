import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const benefits = [
    {
        title: "Mission-Driven Work",
        description: "We're improving access to quality diagnostics across India and beyond. Your work directly impacts healthcare outcomes for millions.",
    },
    {
        title: "Modern Tech Stack",
        description: "AI-powered systems, React, cloud-native architecture. We build with the best tools and stay current with industry standards.",
    },
    {
        title: "Remote-Friendly",
        description: "Work from anywhere. We value output over presence and trust our team to deliver regardless of location.",
    },
    {
        title: "Small Team, Big Impact",
        description: "Autonomy and ownership from day one. Every contribution matters and shapes the product direction.",
    },
];

const opportunities = [
    {
        title: "Engineering & AI Development",
        description: "Build next-gen RIS-PACS and intelligent diagnostic tools that radiologists actually want to use.",
    },
    {
        title: "Data Science & Research",
        description: "Develop learning systems that power clinical insight and improve diagnostic accuracy.",
    },
    {
        title: "Operations & Support",
        description: "Ensure smooth workflows with reliability and precision across our growing network.",
    },
    {
        title: "Product & Partnerships",
        description: "Bridge clinical and technical excellence to drive adoption and strategic growth.",
    },
    {
        title: "Design & Communication",
        description: "Create intuitive, human-centered experiences that make complex workflows feel simple.",
    },
];

function WhySomatiqSection() {
    return (
        <motion.section
            className="py-20 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                        Why Join Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Why Somatiq?
                    </h2>
                    <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
                        We're a small team solving big problems in healthcare technology.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-medium text-foreground mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-foreground/60 font-light leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function OpportunitySection() {
    return (
        <motion.section
            className="py-20 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                        Opportunities
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Open Roles
                    </h2>
                    <p className="text-lg text-foreground/60 font-light">
                        Let's build the future of radiology, together.
                    </p>
                </motion.div>

                {/* Opportunities List */}
                <div className="space-y-0">
                    {opportunities.map((opportunity, index) => (
                        <motion.div
                            key={index}
                            className="py-6 border-b border-white/[0.08] last:border-b-0"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                {opportunity.title}
                            </h3>
                            <p className="text-sm text-foreground/60 font-light">
                                {opportunity.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function CTASection() {
    return (
        <motion.section
            className="py-24 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                        Get Started
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                        Ready to Build Something Meaningful?
                    </h2>
                </motion.div>

                <motion.p
                    className="text-lg text-foreground/60 font-light mb-10 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    If you're excited about solving hard problems in healthcare technology, we'd love to hear from you.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a
                        href="mailto:careers@somatiq.ai"
                        className="inline-flex items-center gap-2 bg-primary text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        careers@somatiq.ai
                    </a>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-foreground/70 font-medium text-sm px-6 py-3 rounded-lg border border-white/[0.1] hover:border-white/[0.2] hover:text-foreground transition-all"
                    >
                        Contact Us
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default function FeatureSection() {
    return (
        <div>
            <WhySomatiqSection />
            <OpportunitySection />
            <CTASection />
        </div>
    );
}
