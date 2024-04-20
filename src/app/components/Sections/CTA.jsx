import Link from 'next/link'
import React from 'react'

export const CTA = () => {
  return (
    <div className="flex flex-row lg:gap-6 gap-3 w-full justify-center">
        <Link href='/registrarse' className="text-white text-center px-2 py-1 lg:px-4 lg:py-2 bg-orange-500 rounded-full transition hover:bg-opacity-85">Empezar ahora <span className='font-semibold'>gratis</span>.</Link>
        <button className="text-[#8000ff] px-6 py-1 lg:px-4 lg:py-2 bg-[#8000ff] bg-opacity-10 rounded-full transition hover:bg-opacity-5">¿Cómo funciona?</button>
    </div>
  )
}
