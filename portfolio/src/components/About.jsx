import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="container mx-auto">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-3 text-gray-700">I am currently pursuing a National Diploma in Technology (NDT) in Information Technology at the Institute of Technology, University of Moratuwa (ITUM). I am passionate about technology, problem-solving, and continuously developing my skills in programming, systems, and digital innovation.</p>
        <h3 className="mt-4 font-medium">Education</h3>
        <p className="text-gray-700">Institute of Technology, University of Moratuwa — National Diploma in Technology (NDT) in Information Technology</p>
        <h3 className="mt-4 font-medium">Career Objectives</h3>
        <p className="text-gray-700">Gain hands-on experience in software development, systems administration, and technology-driven solutions.</p>
        <h3 className="mt-4 font-medium">Technology Interests</h3>
        <p className="text-gray-700">Web development, backend services, automation, and scalable systems.</p>
      </motion.div>
    </div>
  )
}
