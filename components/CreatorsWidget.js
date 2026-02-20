import React from 'react'
import ProgressTracker from './ProgressTracker'
import Avatar from './Avatar'

export default function CreatorWidgets({ role, projects }) {
  return (
    <div className="space-y-4">
      {projects.map(p => (
        <div key={p.id} className="bg-[#F8FAFC] p-4 rounded shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">{p.name}</h2>
            <Avatar src={p.avatar_url} />
          </div>
          <ProgressTracker progress={p.progress} />
        </div>
      ))}
    </div>
  )
    }
