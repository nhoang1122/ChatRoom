import React from 'react'
import GoogleButton from 'react-google-button'

import { auth } from '../FireBase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

import './Styles/SignIn.css'

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)

    console.log("PROVIDER : ",provider)
    console.log("AUTH : ",auth)
    console.log("SIGN ON : ",signInWithRedirect(auth,provider))
}

const SignIn = () => {

  return (
    <div>
        <GoogleButton className='wrapper' onClick={googleSignIn} />
    </div>
  )
}

export default SignIn