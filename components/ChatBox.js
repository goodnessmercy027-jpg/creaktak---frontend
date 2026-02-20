import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'

export default function ChatBox({ projectId }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(()=>{
    const fetchMessages = async ()=>{
      const { data } = await supabase.from('messages').select('*').eq('project_id', projectId).order('created_at')
      setMessages(data)
    }
    fetchMessages()

    const subscription = supabase.from(`messages:project_id=eq.${projectId}`).on('INSERT', payload=>{
      setMessages(prev=>[...prev, payload.new])
    }).subscribe()

    return ()=> supabase.removeSubscription(subscription)
  }, [projectId])

  const sendMessage = async ()=>{
    await supabase.from('messages').insert([{ project_id: projectId, sender_id: supabase.auth.user()?.id, content: input }])
    setInput('')
  }

  return (
    <div className="card">
      <h3>Chat</h3>
      <div style={{maxHeight:'200px', overflowY:'scroll'}}>
        {messages.map(m=><p key={m.id}>{m.content}</p>)}
      </div>
      <input value={input} onChange={e=>setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
          }
