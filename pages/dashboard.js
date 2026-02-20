import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import Navbar from '../components/Navbar'
import TaskCard from '../components/TaskCard'
import ProjectCard from '../components/ProjectCard'

export default function Dashboard() {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    const fetchProjects = async ()=>{
      const { data } = await supabase.from('projects').select('*')
      setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <div className="container">
      <Navbar />
      <h1>Dashboard</h1>
      {projects.map(p=> <ProjectCard key={p.id} project={p} />)}
    </div>
  )
  }
