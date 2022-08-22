import React from 'react'
import { auth } from '../FireBase'

import './Styles/Message.css'

const Message = ({message}) => {

    const messageClass = message.uid === 
    auth.currentUser.uid
    ? 'sent'
    : 'received'

    const senderClass = message.uid === auth.currentUser.uid
    ? 'user'
    : 'sender'

  return (
    <div>
        <p className={`${senderClass}`}>{message.name}</p>
        <div className={`message ${messageClass}`}>
            {/* <p className='name'>{message.name}</p> */}
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message