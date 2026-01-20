import { motion } from "framer-motion";
import { Shield, Lock, Award, Users, Headphones, CheckCircle2, Sparkles } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Full compliance with healthcare data protection standards",
    badge: "Certified",
    color: "primary" as const,
  },
  {
    icon: Lock,
    title: "ISO 27001",
    description: "Certified information security management",
    badge: "Verified",
    color: "emerald" as const,
  },
  {
    icon: Award,
    title: "NABH Ready",
    description: "Meeting national healthcare accreditation standards",
    badge: "Accredited",
    color: "gold" as const,
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permission controls for your team",
    badge: "Enterprise",
    color: "violet" as const,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock dedicated assistance",
    badge: "Premium",
    color: "primary" as const,
  },
];

const colorVariants = {
  primary: {
    bg: "bg-blue-500/10",
    bgHover: "group-hover:bg-blue-500/20",
    text: "text-blue-500",
    glow: "bg-blue-500/30",
    border: "border-blue-500/30",
    badgeBg: "bg-blue-500/20",
    badgeText: "text-blue-500",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    bgHover: "group-hover:bg-emerald-500/20",
    text: "text-emerald-500",
    glow: "bg-emerald-500/30",
    border: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-500",
  },
  gold: {
    bg: "bg-yellow-500/10",
    bgHover: "group-hover:bg-yellow-500/20",
    text: "text-yellow-500",
    glow: "bg-yellow-500/30",
    border: "border-yellow-500/30",
    badgeBg: "bg-yellow-500/20",
    badgeText: "text-yellow-500",
  },
  violet: {
    bg: "bg-violet-500/10",
    bgHover: "group-hover:bg-violet-500/20",
    text: "text-violet-500",
    glow: "bg-violet-500/30",
    border: "border-violet-500/30",
    badgeBg: "bg-violet-500/20",
    badgeText: "text-violet-500",
  },
};

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

const FloatingOrb = ({ delay, size, color }: { delay: number; size: string; color: string }) => (
  <motion.div
    className={`absolute rounded-full blur-2xl opacity-20 ${size} ${color}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const CertificationsSection = () => {
  return (
    <section className="relative py-8 px-6 overflow-hidden">
      {/* Animated background orbs */}
      {/* <FloatingOrb delay={0} size="w-96 h-96" color="bg-blue-500" />
      <FloatingOrb delay={2} size="w-64 h-64" color="bg-violet-500" />
      <FloatingOrb delay={4} size="w-80 h-80" color="bg-emerald-500" /> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-white/80">Enterprise-Grade Security</span>
            {/* <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> */}
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Certifications That
            <br />
            <span className="text-blue-500">Build Trust</span>
          </h2>
        </motion.div>

        {/* Certifications Grid - Creative Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* First row - 3 cards */}
          <div className="w-full flex justify-center gap-6 mb-6 flex-wrap">
          {certifications.slice(0, 3).map((cert) => {
            const colors = colorVariants[cert.color];
            
            return (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative max-w-sm flex-1 min-w-[280px]"
              >
                <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 overflow-hidden`}>
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  {/* Top badge - FIXED */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.badgeBg} ${colors.badgeText}`}>
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.badge}
                    </span>
                    
                    {/* Decorative corner */}
                    <div className={`w-8 h-8 rounded-full ${colors.bg} opacity-50 blur-sm`} />
                  </div>

                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.bgHover} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                      <cert.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Glow behind icon */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl ${colors.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-semibold text-white mb-3 transition-colors duration-300 text-left`}>
                    {cert.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-left">
                    {cert.description}
                  </p>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`h-full ${colors.bg} blur-sm`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
          
          {/* Second row - 2 cards */}
          <div className="w-full flex justify-center gap-6 flex-wrap">
            {certifications.slice(3).map((cert) => {
              const colors = colorVariants[cert.color];
              
              return (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative max-w-sm flex-1 min-w-[280px]"
                >
                  <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 overflow-hidden`}>
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    
                    {/* Top badge - FIXED */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.badgeBg} ${colors.badgeText}`}>
                        <CheckCircle2 className="w-3 h-3" />
                        {cert.badge}
                      </span>
                      
                      {/* Decorative corner */}
                      <div className={`w-8 h-8 rounded-full ${colors.bg} opacity-50 blur-sm`} />
                    </div>

                    {/* Icon with glow */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.bgHover} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                        <cert.icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      
                      {/* Glow behind icon */}
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl ${colors.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-semibold text-white mb-3 transition-colors duration-300 text-left`}>
                      {cert.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-left">
                      {cert.description}
                    </p>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`h-full ${colors.bg} blur-sm`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;