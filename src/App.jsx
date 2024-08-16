import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <TechSkills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );

}

export default App
