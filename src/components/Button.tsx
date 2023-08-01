import { type } from 'os'
import React from 'react'

type Props = {
  children: React.ReactNode
  style: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  onClick: () => void
}

export function Button({children, style, type = 'button', onClick}: Props) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}
