import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Avatar from '../components/Avatar'
import { supabase } from '../supabase/client'
export default function Onboarding() {
  return (
    <div>
      <h2>Welcome to CreaTak</h2>
      <p>Phase 1 → Setup Profile</p>
      <p>Phase 2 → Select Role</p>
      <p>Phase 3 → Dashboard Setup</p>

      <a href="/login">Continue</a>
    </div>
  )
}
