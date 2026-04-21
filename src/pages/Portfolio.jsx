import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Mysterious from '../components/Mysterious'
import Articles from '../components/Articles'
import News from '../components/News'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
function Portfolio() {
  return (
    <div className='scroll-smooth '>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Mysterious />
      <Articles />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio
