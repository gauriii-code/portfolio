// src/components/Footer/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/gauri-sharma-a7157824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gaurii-code" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:gaurii769@gmail.com"
            className={styles.socialIcon}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Gauri Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;