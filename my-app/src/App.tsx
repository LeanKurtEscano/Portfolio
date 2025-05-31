import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import About from './sections/About';
import Projects from './sections/Projects';
import ProjectDetails from './sections/ProjectDetails';

import './App.css';
import WorkExperience from './sections/WorkExperience';

function App() {
  return (
   <>
  <Navbar />
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <WorkExperience/>
        </>
      }
    />
    <Route path="/project/:id" element={<ProjectDetails />} />
  </Routes>
</>

  );
}

export default App;
