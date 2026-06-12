import React from 'react'
import { motion } from 'framer-motion'
import erpProjectImage from '../assets/ERP Project Management.png'
import ecommerceImage from '../assets/E-Commerce Website.jpeg'
import eventImage from '../assets/Event Management Website.png'

const projects = [
  {
    title:'ERP Project Management',
    desc:'A project management solution for tracking tasks, team collaboration, and workflow efficiency.',
    tech:['React','Tailwind','Node.js'],
    image: erpProjectImage
  },
  {
    title:'E-Commerce Website',
    desc:'Responsive online shopping platform with product management and cart.',
    tech:['React','Tailwind','Firebase'],
    image: ecommerceImage
  },
  {
    title:'Event Management Website',
    desc:'Manage events, registrations, and event information.',
    tech:['React','Node.js','MongoDB'],
    image: eventImage
  }
]

export default function Projects(){
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p=> (
          <motion.div key={p.title} whileHover={{y:-4}} className="bg-white rounded-lg shadow p-6 overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <div className="flex justify-between items-start">
              <h4 className="font-semibold">{p.title}</h4>
              <div className="text-sm text-gray-500">Student Project</div>
            </div>
            <p className="mt-3 text-gray-700">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map(t=> <span key={t} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-3">
              <a href="https://github.com/thiruththanikan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-primary font-medium">GitHub</a>
              <a href="#" className="text-gray-600">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
