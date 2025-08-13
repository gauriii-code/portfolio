// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className={styles.heroContainer}>
      {/* Background shapes for visual appeal */}
      <div className={`${styles.blob} ${styles.blobOne}`}></div>
      <div className={`${styles.blob} ${styles.blobTwo}`}></div>
      <div className={`${styles.blob} ${styles.blobThree}`}></div>

      <motion.div
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className={styles.heroTitle}
          variants={itemVariants}
        >
          Hi, I'm <span className={styles.highlightText}>Gauri Sharma</span>
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          variants={itemVariants}
        >
          A <span className={styles.highlightSubText}>Full Stack Software Engineer</span> building robust and scalable solutions with a passion for innovation.
        </motion.p>
        <motion.div
          className={styles.buttonGroup}
          variants={itemVariants}
        >
          <motion.a
            href="#projects" // Link to projects section
            className={`${styles.button} ${styles.primaryButton}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="/assets/Gauri_Sharma_Resume.pdf" // IMPORTANT: Place your resume PDF in the 'public' folder
            download="Gauri_Sharma_Resume.pdf"
            className={`${styles.button} ${styles.secondaryButton}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;