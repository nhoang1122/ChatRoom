import React from 'react'
import SignIn from './SignIn'
import LogOut from './LogOut'
import './Styles/NavBar.css'

import { auth } from '../FireBase'
import { useAuthState } from 'react-firebase-hooks/auth'

const NavBar = () => {

    const [user] = useAuthState(auth);
    console.log("SIGNNED IN : ", user)

  return (
    <div className='nav'>
        <h1 className='heading'>AIM CHAT</h1>
        {user ? <LogOut/> : <SignIn/>}
    </div>
  )
}

export default NavBar