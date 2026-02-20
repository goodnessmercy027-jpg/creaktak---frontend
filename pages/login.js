import { useState } from 'react'
import { supabase } from '../supabase/client'
import { useRouter } from 'next/router'

export default function Login() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    setError('')
    // Check if code exists and unused
    const { data, error } = await supabase
      .from('tester_invite_codes')
      .select('*')
      .eq('code', code)
      .eq('used', false)
      .single()

    if (error || !data) {
      setError('Invalid or used code')
      return
    }

    // Mark code as used (optional if single-use)
    await supabase
      .from('tester_invite_codes')
      .update({ used: true })
      .eq('code', code)

    // Redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="login-container">
      <h1>Login with Invitation Code</h1>
      <input
        type="text"
        placeholder="Enter code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}
