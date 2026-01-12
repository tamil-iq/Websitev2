import { motion } from 'framer-motion';
import { useEffect } from 'react';
import HeroSection from './components/hero-section';
import FeatureSection from './components/feature-section';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | Somatiq - Building Imaging Infrastructure for a Billion People';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the team behind Somatiq. Founded by radiologists and technologists from Siemens Healthineers, we are building intelligent imaging infrastructure for healthcare.');
    }
  }, []);
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
