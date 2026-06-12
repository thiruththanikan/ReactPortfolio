import React from 'react'
import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile_photo.jpeg'

export default function Hero(){
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 py-20">
      <motion.div
        initial={{ opacity:0, x:-30 }}
        animate={{ opacity:1, x:0 }}
        transition={{ duration:0.6 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Sivaneswaran Thiruththanikan</h1>
        <p className="mt-3 text-lg text-gray-700">Information Technology Student — Institute of Technology, University of Moratuwa (ITUM)</p>
        <p className="mt-4 text-gray-700 max-w-xl">I am pursuing a National Diploma in Technology (NDT) in Information Technology. Passionate about technology, problem-solving, and building web and systems solutions. Seeking hands-on experience in software development and IT projects.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#projects" className="inline-block bg-primary text-black px-5 py-3 rounded-md font-medium shadow-sm">View Projects</a>
          <a href="/cv/thiruththanikan-cv-2.pdf" target="_blank" rel="noopener noreferrer" className="inline-block border border-gray-300 text-gray-800 px-5 py-3 rounded-md">Download CV</a>
          <a href="#contact" className="inline-block border border-gray-300 text-gray-800 px-5 py-3 rounded-md">Contact Me</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity:0, scale:0.95 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:0.6 }}
        className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 shadow-lg"
      >
        <img
          src={profilePhoto}
          alt="Sivaneswaran Thiruththanikan"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}
