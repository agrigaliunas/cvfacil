import React from 'react'
import InstagramColored from '../ui/Icons/instagram-colored'
import Facebook from '../ui/Icons/facebook'
import Linkedin from '../ui/Icons/linkedin'
import Tiktok from '../ui/Icons/tiktok'
import Twitter from '../ui/Icons/twitter'
import Github from '../ui/github'
import Youtube from '../ui/Icons/youtube'

const page = () => {
  return (
    <main className='py-12'>
      <div className='bg-slate-50 w-[90vw] lg:h-[80vh] h-[70vh] shadow-lg rounded-xl border border-slate-200 overflow-hidden'>
        <div className='border h-[20vh] m-2 border-slate-200 rounded-xl overflow-hidden'>
          <span className='font-semibold text-2xl'>Agustín Grigaliunas</span>
        </div>
        <div className='grid grid-cols-7 grid-rows-1 gap-0 w-[20vw]'>
          <InstagramColored />
          <Facebook />
          <Linkedin />
          <Tiktok />
          <Twitter />
          <Youtube />
          <Github />

        </div>
      </div>
    </main>
  )
}

export default page