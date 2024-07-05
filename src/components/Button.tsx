import React from 'react'

function Button({ children, onClick, className="" }: { children: React.ReactNode, onClick: () => void, className: string}) {
  return (
    <button className={`${className} flex`} onClick={onClick}>{children}</button>
  )
}

export default Button