import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Avatar from '../components/Avatar'
import { supabase } from '../supabase/client'

export default function Onboarding() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('client') // default

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { user, error } = await supabase.auth.signUp({
      email,
      password: 'temporary123!', // temp password for demo
    })
    if (error) return alert(error.message)
    await supabase.from('users').insert([{ id: user.id, name, role }])
    router.push('/login')
  }

  return (
    <div className="p-6 max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold text-[#6C2BD9] mb-6">Welcome to CreaTak</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <select className="w-full p-2 border rounded" value={role} onChange={e => setRole(e.target.value)}>
          <option value="client">Client</option>
          <option value="va">VA</option>
          <option value="smm">SMM</option>
          <option value="writer">Writer</option>
          <option value="designer">Designer</option>
          <option value="video">Video Editor</option>
          <option value="uiux">UI/UX</option>
        </select>
        <button className="w-full bg-[#00C2A8] text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  )
    }
