import { motion } from "framer-motion";
import { Shield, Lock, Award, Users, Headphones } from "lucide-react";

// Ocean blue color palette
// deep-twilight: #03045e, bright-teal-blue: #0077b6, turquoise-surf: #00b4d8, frosted-blue: #90e0ef, light-cyan: #caf0f8

const certifications = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Full compliance with healthcare data protection standards",
  },
  {
    icon: Lock,
    title: "ISO 27001",
    description: "Certified information security management",
  },
  {
    icon: Award,
    title: "NABH Ready",
    description: "Meeting national healthcare accreditation standards",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permission controls for your team",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock dedicated assistance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const CertificationsSection = () => {
  return (
    <section className="relative pt-16 pb-24 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header - Left aligned like other sections */}
        <div className="text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-foreground/70 font-light tracking-wide">For CSOs</span>
            <svg className="w-4 h-4 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="inline-block text-foreground mr-[0.3em]"
            >
              Security
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
              className="inline-block text-foreground mr-[0.3em]"
            >
              they
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="inline-block text-primary"
            >
              trust.
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl"
          >
            Enterprise-grade compliance, encryption, and access controls that meet the highest healthcare standards.
          </motion.p>
        </div>

        {/* Certifications Grid - Clean 5-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-xl p-5 h-full transition-all duration-300 hover:bg-white/[0.04] hover:border-[#00b4d8]/30">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#00b4d8]/10 flex items-center justify-center mb-4 group-hover:bg-[#00b4d8]/20 transition-colors duration-300">
                  <cert.icon className="w-5 h-5 text-[#00b4d8]" />
                </div>

                {/* Title - prominent */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h3>

                {/* Description - subtle */}
                <p className="text-sm text-white/50 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;