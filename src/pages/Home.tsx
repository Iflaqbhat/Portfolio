import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import BountyProjects from '../components/sections/BountyProjects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Iflaq Dev Hub - MERN Stack Developer';
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <BountyProjects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;