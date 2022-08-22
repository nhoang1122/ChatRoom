import React, {useState, useEffect,useRef} from 'react'

import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'
import { db } from '../FireBase';

import Message from './Message';
import SendMessage from './SendMessage';

import './Styles/Chat.css'

const Chat = () => {

    const scroll = useRef();
    const [messages, setMessages] = useState([])

    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id:doc.id})
        })
        setMessages(messages)
      })
      return () => unsubscribe()
    }, [])
    

  return (
   <>
    <main>

        {messages && messages.map((message) => (
            <Message key={message.id} message={message}/>
        ))}

        <SendMessage scroll={scroll}/>
    </main> 
    <span ref={scroll}></span>
   </>
  )
}

export default Chat