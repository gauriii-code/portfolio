// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import ProjectsSection from './components/ProjectSection/ProjectsSection'; // <--- THIS LINE IS THE FIX
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;