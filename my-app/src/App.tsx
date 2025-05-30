import { useState } from 'react'

import './App.css'
import Navbar from './layouts/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import About from './sections/About'
import ProjectsSection from './sections/ProjectsSection'
import ProjectDetailPage from './sections/ProjectDetailPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
     <About/>
    <Skills/>

    
    </>
  )
}

export default App
