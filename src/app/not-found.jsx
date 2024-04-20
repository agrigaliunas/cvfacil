import Link from 'next/link';
import React from 'react'

const notFound = () => {
  return (
    <section className='flex justify-center items-center flex-col py-32 px-5 gap-32'>
      <h2 className='lg:text-4xl text-3xl text-center font-bold text-[#8000ff]'>
        La página que estás buscando no existe u ocurrió otro error.<br /><span className='text-orange-500'>(404)</span>
      </h2>
      <Link href='/' className='font-medium underline underline-offset-2'>Ir al inicio</Link>
    </section>
  )
}

export default notFound;