import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import ProgressTracker from '../../components/ProgressTracker'
import Avatar from '../../components/Avatar'

export default function ClientDashboard() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*')
      setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#6C2BD9] mb-4">Client Dashboard</h1>
      {projects.map(p => (
        <div key={p.id} className="bg-[#F8FAFC] p-4 rounded mb-4 shadow-sm">
          <h2 className="font-semibold">{p.name}</h2>
          <ProgressTracker progress={p.progress} />
        </div>
      ))}
    </div>
  )
        }
