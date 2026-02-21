import { supabase } from "../supabase/client"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) alert(error.message)
    else window.location.href = "/dashboard/client"
  }

  return (
    <div>
      <h2>Login to CreaTak</h2>

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={signIn}>Login</button>
    </div>
  )
}
