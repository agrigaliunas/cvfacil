import React from 'react'

export const PYWrapper = ({children}) => {
  return (
    <div className="flex min-h-screen flex-col items-center px-5 lg:gap-32 gap-16 py-24 lg:py-32">
        {children}
    </div>
  )
}
