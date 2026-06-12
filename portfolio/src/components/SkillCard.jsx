import React from 'react'

export default function SkillCard({title, level, children}){
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">{title}</h4>
        <span className="text-sm text-gray-500">{level}</span>
      </div>
      <div className="mt-3">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="h-2 bg-primary" style={{width:children}} />
        </div>
      </div>
    </div>
  )
}
