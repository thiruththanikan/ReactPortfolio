import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {title:'Website Development', desc:'Responsive and modern websites.'},
  {title:'Frontend Development', desc:'Component-driven UI development.'},
  {title:'Student Project Development', desc:'Support for academic IT projects.'}
]

export default function Services(){
  return (
    <div className="container mx-auto">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="grid md:grid-cols-3 gap-6">
        {services.map(s=> (
          <div key={s.title} className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="mt-2 text-gray-700">{s.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
