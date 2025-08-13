// src/components/ProjectsSection/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard/ProjectCard'; // Import from its new nested path
import styles from './ProjectsSection.module.css';
import billingSystemImage from '../../assets/billing system.jpg'; // Correct relative path from ProjectsSection to assets folder
import virtualAssistant from '../../assets/virtual assistant.jpg'
import HospitalManagement from'../../assets/HospitalManagement.jpg'
import AutomateWhatsapp from '../../assets/AutomateWhatsapp.jpg'
import faceDetection from '../../assets/FaceDetection.jpg'
import InventorySystem from '../../assets/InventorySystem.jpg'

const projectsData = [
  {
    title: 'Python Billing & Invoice Management System',
    description: 'A robust system built with Python for managing billing and invoices, featuring a user-friendly Tkinter GUI and SQL database integration for efficient data handling.',
    image: billingSystemImage, // Use the imported image variable here
    technologies: ['Python', 'Tkinter', 'SQL'],
    githubLink: 'https://github.com/gaurii-code/invoice-system',
    liveDemoLink: null,
  },
  {
    title: 'Unified Digital Virtual Assistant with Memory & Automation',
    description: 'An intelligent Python-based virtual assistant featuring natural language processing, memory retention, and automation capabilities to streamline various tasks.',
    image: virtualAssistant, // Replace with actual image
    technologies: ['Python', 'NLP', 'Automation', 'Voice Recognition'],
    githubLink: 'https://github.com/gaurii-code/Virtual-Assistant/upload/main',
    liveDemoLink: null,
  },
  {
    title: 'Integrated Hospital Management System (HMS)',
    description: 'A comprehensive full-stack application for efficient hospital management, covering patient records, appointments, and administrative tasks built with MERN stack.',
    image: HospitalManagement,
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    githubLink: 'https://github.com/gaurii-code/hospital-management-ap',
    liveDemoLink: null,
  },
  {
    title: 'Automate Whatsapp',
    description: 'A Python script designed to automate sending WhatsApp messages, useful for quick notifications or group communications.',
    image: AutomateWhatsapp,
    technologies: ['Python', 'Selenium'], // <-- This was missing and caused the error
    githubLink: 'https://github.com/gauriii-code/Automate_Whatsapp',
    liveDemoLink: null,
  },
  {
    title: 'Face Detection',
    description: 'An application implementing face detection capabilities using computer vision techniques.',
    image: faceDetection,
    technologies: ['Python', 'OpenCV'],
    githubLink: 'https://github.com/gauriii-code/FaceDetection', 
    liveDemoLink: null,
  },
  {
    title: 'Real-time Inventory Management System',
    description: 'A system for managing inventory in real-time, providing updates on stock levels and transactions.',
    image: InventorySystem,
    technologies: ['Python', 'Database (e.g., SQLite/MySQL)'],
    githubLink: '#', // Add actual link
    liveDemoLink: null,
  },
];

function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className={`${styles.projectsSection} section-padding`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={`${styles.container} container`}>
        <motion.h2
          className={`${styles.sectionTitle} section-heading`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Featured Projects
        </motion.h2>
        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;