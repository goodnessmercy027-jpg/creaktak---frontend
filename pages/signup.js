import { useState } from 'react'
import { supabase } from '../supabase/client'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invite, setInvite] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async () => {
    if(invite !== 'CREATAKV1'){
      setError('Invalid invitation code')
      return
    }
    const { data, error } = await supabase.auth.signUp({ email, password })
    if(error) setError(error.message)
    else router.push('/')
  }

  return (
    <div className="container">
      <h1>CreaTak Signup</h1>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <input placeholder="Invitation Code" value={invite} onChange={e=>setInvite(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
    }
