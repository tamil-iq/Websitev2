import { motion } from 'framer-motion';
import HeroSection from './components/hero-section';
import FeatureSection from './components/feature-section';

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
