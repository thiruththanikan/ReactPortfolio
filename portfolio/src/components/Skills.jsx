import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

const skills = [
  {title:'Python Programming', level:'Intermediate', pct:'75%'},
  {title:'Problem Solving', level:'Strong', pct:'80%'},
  {title:'Website Development', level:'Intermediate', pct:'70%'},
  {title:'Basic Software Development', level:'Intermediate', pct:'70%'},
  {title:'IT Systems Knowledge', level:'Familiar', pct:'65%'},
]

export default function Skills(){
  return (
    <div className="container mx-auto">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <p className="mt-2 text-gray-700">Technical competencies and strengths.</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {skills.map(s=> (
              <SkillCard key={s.title} title={s.title} level={s.level}>{s.pct}</SkillCard>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold">Highlights</h3>
          <ul className="mt-3 text-gray-700 list-disc list-inside">
            <li>Responsive Web Design</li>
            <li>Frontend Development</li>
            <li>Student Project Development</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
