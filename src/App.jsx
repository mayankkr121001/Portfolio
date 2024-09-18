import React, { useState } from 'react'
import 'normalize.css'
import "./App.css"
import Navbar from './component/Navbar.jsx'
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Projects from './component/Projects.jsx'
import Education from './component/Education.jsx'
import Contact from './component/Contact.jsx'

function App() {
  return (
      <div  className="bg-black text-white w-screen min-h-screen h-fit tracking-widest scroll-smooth">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
  )
}

export default App