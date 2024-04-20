import Eye from '@/app/ui/Icons/eye'
import EyeSlash from '@/app/ui/Icons/eye-slash'
import React from 'react'

export const PasswordInput = (props) => {
  return (
    <div className='flex w-full'>
        <input type={props.type} placeholder={props.placeHolder} className='bg-slate-100 py-3 px-2 rounded-lg outline-orange-500 w-full' />
        <span class="flex items-center justify-end" onClick={props.handleShowPassword}>
            {props.showPassword 
                ? 
                <EyeSlash style='absolute mr-2 text-slate-500 cursor-pointer'/> 
                : 
                <Eye style='absolute mr-2 text-slate-500 cursor-pointer'/>}
        </span>
    </div>
  )
}
