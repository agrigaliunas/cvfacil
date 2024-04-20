import React from 'react'
import { PYWrapper } from '../components/Sections/PYWrapper'
import { SignUporInForm } from '../components/Modal/SignUpOrInForm'

const signUpForm = {
    isSignIn: false,
    title: 'Crea una cuenta',
    emailPlaceholder: 'Ingresa un email',
    pwdPlaceholder: 'Ingresa una contraseña',
    submitButton: 'Registrarse',
    oppositeAction: 'Iniciar sesión'
}

const page = () => {
    return (
        <PYWrapper>
            <SignUporInForm formType={signUpForm} />
        </PYWrapper>
    )
}

export default page