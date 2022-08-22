import React, { useState } from "react";

import { auth,db } from "../FireBase";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

import "./Styles/SendMessage.css";

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState("");

  const send = async (e) => {
    e.preventDefault(); 

    if(input === '') {
        alert('Please Enter a Valid Message')
        return;
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('');
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={send}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Message"
      />
      <button className="sendBtn" type="submit">SEND</button>
    </form>
  );
};

export default SendMessage;
