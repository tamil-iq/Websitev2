import { motion } from 'framer-motion';
import HeroSection from './components/hero-section';
import FeatureSection from './components/feature-section';
import { SEO } from '@/components/common/seo';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEO
        title="About Us | Somatiq"
        description="Meet the team behind Somatiq. Founded by radiologists and technologists, we're building intelligent imaging infrastructure for healthcare."
        canonical="/about"
      />
      <motion.div variants={childVariants}>
        <HeroSection />
      </motion.div>
      <motion.div variants={childVariants}>
        <FeatureSection />
      </motion.div>
      {/* <motion.div variants={childVariants}>
        <TeamSection />
      </motion.div> */}
    </motion.div>
  );
};

export default AboutUs;
