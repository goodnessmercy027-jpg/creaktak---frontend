import React from 'react'

export default function ProgressTracker({ progress = 0 }) {
  return (
    <div className="bg-gray-200 rounded-full h-4 w-full mt-2">
      <div className="bg-[#6C2BD9] h-4 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  )
    }
