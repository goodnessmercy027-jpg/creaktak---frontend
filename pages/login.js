import { supabase } from "../supabase/client"

export default function Login() {

  async function signIn(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    await supabase.auth.signInWithPassword({ email, password })
    alert("Check email or dashboard")
  }

  return (
    <form onSubmit={signIn} className="card">
      <h2>Login / Signup</h2>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Continue</button>
    </form>
  )
    }
