import React from 'react'
import { auth } from '../FireBase'

import './Styles/LogOut.css'

const LogOut = () => {

    const signOut = () => {
        signOut(auth);
    }

  return (
  <button className='logout' onClick={() => auth.signOut()}>
    LOGOUT
  </button>
  )
}

export default LogOut