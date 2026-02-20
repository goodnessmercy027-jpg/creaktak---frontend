import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../supabase/client'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) return alert(error.message)

    // Redirect based on role
    const { data: profile } = await supabase.from('users').select().eq('id', user.id).single()
    if (profile.role === 'client') router.push('/dashboard/client')
    else router.push(`/dashboard/creator/${profile.role}`)
  }

  return (
    <div className="p-6 max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold text-[#6C2BD9] mb-6">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="w-full bg-[#00C2A8] text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
    }
