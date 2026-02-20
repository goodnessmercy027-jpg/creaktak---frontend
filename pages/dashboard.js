import { supabase } from '../supabase/client'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  const createProject = async () => {
    await supabase.from('projects').insert({
      title: "My First Project",
      user_id: user.id
    })
    alert("Project created!")
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={createProject}>Create Project</button>
    </div>
  )
}
