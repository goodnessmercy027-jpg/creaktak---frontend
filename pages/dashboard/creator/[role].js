import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../../supabase/client'
import CreatorWidgets from '../../../components/CreatorWidgets'
import ProgressTracker from '../../../components/ProgressTracker'
import Avatar from '../../../components/Avatar'

export default function CreatorDashboard() {
  const router = useRouter()
  const { role } = router.query
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').eq('user_id', supabase.auth.user().id)
      setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#6C2BD9] mb-4">{role.toUpperCase()} Dashboard</h1>
      <CreatorWidgets role={role} projects={projects} />
    </div>
  )
    }
