// src/components/ContactSection/ContactSection.jsx
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

// You might want to import icons here if you're using them (e.g., from react-icons or custom SVGs)
// import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  // State for your form (if you have one)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'd send your form data to a backend or a form service
    console.log('Form submitted:', formData);
    alert('Message sent! (Note: This is just a demo. A backend is needed for actual sending.)');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.description}>
        Feel free to reach out to me for any questions, collaborations, or just to say hello!
      </p>

      <div className={styles.contactContent}>
        {/* New: Direct Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <span className={styles.icon}>✉️</span>
            <a href="mailto:gauriii769@gmail.com" className={styles.infoText}>gauriii769@gmail.com</a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📞</span>
            <a href="tel:+917696655897" className={styles.infoText}>+91 7696655897</a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <span className={styles.infoText}>Hoshiarpur, Punjab</span>
          </div>
        </div>

        {/* New: Social Media Links */}
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <span className={styles.socialIcon}>🔗</span> LinkedIn
          </a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <span className={styles.socialIcon}>🐙</span> GitHub
          </a>
          {/* Add more social links here if you have them (e.g., Twitter, Portfolio link) */}
        </div>

        {/* Existing: Contact Form */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h3>Send me a message</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;