import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home" className="pt-24">
          <Hero />
        </section>
        <section id="about" className="pt-20">
          <About />
        </section>
        <section id="skills" className="pt-20">
          <Skills />
        </section>
        <section id="services" className="pt-20">
          <Services />
        </section>
        <section id="projects" className="pt-20">
          <Projects />
        </section>
        <section id="education" className="pt-20">
          <Education />
        </section>
        <section id="contact" className="pt-20 pb-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
