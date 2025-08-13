// src/components/ProjectsSection/ProjectCard/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }} /* Framer Motion hover */
    >
      <img src={project.image} alt={project.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.techStack}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.linkGroup}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <FaGithub className={styles.linkIcon} /> GitHub
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <FaExternalLinkAlt className={styles.linkIcon} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;