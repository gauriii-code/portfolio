// src/components/SkillsSection/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaTools, FaDatabase, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import styles from './SkillsSection.module.css';

const technicalSkills = {
  'Languages': ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'Java', 'C (basic)'],
  'Full-Stack Frameworks & Libraries': ['MERN stack', 'Django', 'React-Router', 'Redux'],
  'Databases': ['MongoDB', 'MySQL'],
  'Tools and Version Control': ['Git', 'GitHub', 'npm', 'pip', 'VS Code', 'Postman'],
};

const softSkills = [
  'Teamwork', 'Leadership', 'Communication', 'Problem-solving', 'Adaptability', 'Time Management'
];

const skillCategoryIcons = {
  'Languages': <FaLaptopCode />,
  'Full-Stack Frameworks & Libraries': <FaTools />,
  'Databases': <FaDatabase />,
};

function SkillsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="skills"
      className={`${styles.skillsSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${styles.container} container`}>
        <motion.h2
          className={`${styles.sectionTitle} section-heading`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className={styles.skillsContent}>
          <div className={styles.technicalSkills}>
            <h3>Technical Skills</h3>
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <motion.div key={index} className={styles.skillCategory} variants={itemVariants}>
                <div className={styles.categoryHeader}>
                  {skillCategoryIcons[category]}
                  <h4>{category}</h4>
                </div>
                <div className={styles.skillList}>
                  {skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className={styles.skillBadge}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.softSkills}>
            <h3>Soft Skills</h3>
            <div className={styles.softSkillsGrid}>
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.softSkillItem}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* You can add specific icons for soft skills if desired */}
                  {skill === 'Teamwork' && <FaUsers className={styles.softSkillIcon} />}
                  {skill === 'Problem-solving' && <FaLightbulb className={styles.softSkillIcon} />}
                  {skill === 'Adaptability' && <FaHandsHelping className={styles.softSkillIcon} />}
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SkillsSection;