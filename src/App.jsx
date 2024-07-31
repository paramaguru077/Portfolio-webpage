import React from 'react'
import Hero from './sections/Hero/Hero'
import './App.css'
import Project from './sections/project/Project'
import Skills from './sections/Skills/Skill'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

const App = () => {
  return (
    <>
    <Hero/>
    <Project />
    <Skills />
    <Contact />
    <Footer/>
    </>
  )
}

export default App