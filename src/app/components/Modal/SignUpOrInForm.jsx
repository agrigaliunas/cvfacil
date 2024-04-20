'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { PasswordInput } from '../Input/PasswordInput'

export const SignUporInForm = ({formType}) => {

  const [showPassword, setShowPassword] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState('password')

  const handleShowPassword = () => {
      setShowPassword(!showPassword)
      passwordInputType === 'password' ? setPasswordInputType('text') : setPasswordInputType('password')
  }

  return (
      <div className='flex flex-col gap-5'>
        <h2 className='font-bold text-3xl lg:text-4xl text-center'>{formType.title}</h2>
        <form className='flex flex-col gap-5 lg:w-[30vw] w-full'>
            <input placeholder={formType.emailPlaceholder} className='bg-slate-100 py-3 px-2 rounded-lg outline-orange-500'/>
            <PasswordInput 
                handleShowPassword={handleShowPassword} 
                type={passwordInputType} 
                showPassword={showPassword}
                placeHolder={formType.pwdPlaceholder}/>
            {!formType.isSignIn && 
              <span className='text-xs'>Al registrarte, aceptas los <Link href='terminos-y-condiciones' className='underline underline-offset-2'>términos y condiciones</Link> y las <Link href='politicas-privacidad' className='underline underline-offset-2'>políticas de privacidad</Link>.</span>}
            <div className='w-full flex flex-col gap-0 items-center'>
                <button type='submit' className='my-2 py-2 px-4 bg-orange-500 text-white rounded-lg w-full transition hover:bg-opacity-80'>{formType.submitButton}</button>
                <span className='text-center'>O</span>
                <Link href={`${formType.isSignIn ? '/registrarse' : '/ingresar'}`} className='my-2 py-2 px-4 lg:w-[25vw] w-[70vw] bg-white text-[#8000ff] border border-[#8000ff] rounded-lg text-center transition hover:bg-[#8000ff] hover:bg-opacity-5'>{formType.oppositeAction}</Link>
            </div>
        </form>
        {/* <div className='text-center'>
            <span className='text-slate-800'>
                O
                <br />
                Ingresa con Google
            </span>
        </div> */}
        {/* <span className='lg:my-12 my-14 text-center text-sm text-slate-800'>¿Ya estás registrado? Ingresa <Link href='/ingresar' className='underline underline-offset-2'>aqui</Link>.</span> */}
      </div>
  )
}
