import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact';
function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
