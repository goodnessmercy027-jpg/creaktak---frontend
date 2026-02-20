import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../supabase/client'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect logged in users to dashboard
    const session = supabase.auth.session()
    if (session) {
      router.push('/dashboard/client')
    } else {
      router.push('/onboarding')
    }
  }, [])

  return <div className="text-center mt-20">Loading...</div>
}
