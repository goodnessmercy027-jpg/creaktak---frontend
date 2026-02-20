import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import TaskCard from '../../components/TaskCard'
import ChatBox from '../../components/ChatBox'
import FileUpload from '../../components/FileUpload'

export default function ProjectPage() {
  const router = useRouter()
  const { id } = router.query
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    if(!id) return
    const fetchTasks = async ()=>{
      const { data } = await supabase.from('tasks').select('*').eq('project_id', id)
      setTasks(data)
    }
    fetchTasks()
  }, [id])

  return (
    <div className="container">
      <h1>Project {id}</h1>
      {tasks.map(t=> <TaskCard key={t.id} task={t} />)}
      <FileUpload projectId={id} />
      <ChatBox projectId={id} />
    </div>
  )
}
