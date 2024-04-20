import React from 'react'
import { PYWrapper } from '../components/Sections/PYWrapper'
import { SignUporInForm } from '../components/Modal/SignUpOrInForm'


const signInForm = {
    isSignIn: true,
    title: 'Ingresar a tu cuenta',
    emailPlaceholder: 'Ingresa tu email',
    pwdPlaceholder: 'Ingresa tu contraseña',
    submitButton: 'Ingresar',
    oppositeAction: 'Registrarse'

}

const page = () => {
    return (
        <PYWrapper>
            <SignUporInForm formType={signInForm} />
        </PYWrapper>
    )
}

export default page