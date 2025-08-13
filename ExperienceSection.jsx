// src/components/ExperienceSection/ExperienceSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';
import styles from './ExperienceSection.module.css';

const experiences = [
  {
    type: 'Professional',
    title: 'Industrial Training (MERN Stack Full-Stack Web Development)',
    company: '6 weeks Industrial Training',
    date: 'June 2025 - July 2025',
    description: [
      'Gained end-to-end practical experience in MERN stack development, building dynamic and responsive full-stack web applications.',
      'Engineered robust RESTful APIs with Node.js and Express.js, integrating seamlessly with MongoDB for efficient data management.',
      'Developed interactive user interfaces using React.js, focusing on component-based architecture and advanced state management.',
      'Actively participated in the full software development lifecycle of MERN applications, from design to deployment, applying agile principles.',
      'Utilized Git/GitHub for version control, collaborating effectively and contributing to clean, organized codebases.',
      'Applied problem-solving skills to debug and optimize application performance, delivering high-quality, scalable web solutions.',
    ],
    icon: <FaBriefcase />,
  },
  {
    type: 'Professional',
    title: 'Industrial Training (Python Programming)',
    company: '6 weeks Industrial Training',
    date: 'May 2024 - July 2024',
    description: [
      'Developed proficiency in Python programming, including object-oriented programming, data structures, algorithms, or specific libraries like NumPy, Pandas, or Django.',
      'Gained hands-on experience with Python libraries for data analysis, web development, or machine learning.',
      'Gained practical experience in applying Python to real-world industry challenges.',
      'Enhanced my problem-solving and analytical skills through hands-on Python projects.',
    ],
    icon: <FaBriefcase />,
  },
  {
    type: 'Professional',
    title: 'Member of Training and Placement Cell',
    company: 'Panjab University RC , Hsp', // Assuming this is tied to your education institution
    date: 'November 2023 - Present',
    description: [
      'Responsible for coordinating with companies, organizing recruitment drives, conducting various aptitude test, coding rounds and group discussions, managing student data, or handling logistics with lead to develop strong communication, interpersonal, and organizational skills through my involvement in the TPC.',
    ],
    icon: <FaUsers />,
  },
];

const education = [
  {
    degree: 'Bachelor of Engineering (Information Technology)',
    institution: 'University Institute of Engineering and Technology',
    date: 'November 2022 - Present',
    details: ['Major in Information Technology.'],
    icon: <FaGraduationCap />,
  },
  {
    degree: '12th (Science background)',
    institution: 'Punjab School Education Board',
    date: 'April 2021 - April 2022',
    details: ['With 95.2%.'],
    icon: <FaGraduationCap />,
  },
  {
    degree: '10th (with overall A+ grade)',
    institution: 'Punjab School Education Board',
    date: 'April 2019 - April 2020',
    details: ['With overall A+ grade.'],
    icon: <FaGraduationCap />,
  },
];

function ExperienceSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="experience"
      className={`${styles.experienceSection} section-padding`}
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
          Experience & Education
        </motion.h2>

        <div className={styles.timeline}>
          <h3>Professional Experience</h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${styles.left}`}
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={styles.timelineIcon}>
                {exp.icon}
              </div>
              <div className={styles.timelineContent}>
                <h4>{exp.title}</h4>
                <h5>{exp.company} - <span>{exp.date}</span></h5>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          <h3>Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${styles.right}`}
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={styles.timelineIcon}>
                {edu.icon}
              </div>
              <div className={styles.timelineContent}>
                <h4>{edu.degree}</h4>
                <h5>{edu.institution} - <span>{edu.date}</span></h5>
                <ul>
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;