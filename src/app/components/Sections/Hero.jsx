import React from 'react'

export const Hero = () => {
  return (
    <section className="flex flex-col lg:gap-16 gap-12 select-none">
      <div className='flex flex-col items-center gap-6'>
          <h1 className="text-7xl lg:text-9xl text-center font-bold text-[#8000ff]">Tu CV digital</h1>
          <h2 className="text-xl text-centerlg:text-2xl font-medium">de manera rápida y <span className='font-semibold text-orange-500'>fácil</span>.</h2>
      </div>
      <h3 className='bg-violet-100 p-2 font-light lg:text-left text-center'>Creá tu CV siguiendo las mejores prácticas y encontrá el trabajo que tanto soñás.</h3>
    </section>
  )
}
