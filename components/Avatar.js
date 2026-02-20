import React from 'react'

export default function Avatar({ src, size = 40 }) {
  return (
    <img
      src={src || '/default-avatar.png'}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  )
}
