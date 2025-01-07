import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
