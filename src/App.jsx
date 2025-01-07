import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Education_skills from './pages/Education_skills';
import Projects from './pages/Projects';
function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Education_skills" element={<Education_skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
