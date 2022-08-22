import React from "react";

import { auth } from "./FireBase";
import {useAuthState} from "react-firebase-hooks/auth";

import './App.css'
import NavBar from "./Components/NavBar";
import Chat from "./Components/Chat";

function App() {

  const [user] = useAuthState(auth);
  console.log("WHO IS LOGGED IN : ",user);

  return (
    <div className="container">
      <section className="box">
        <NavBar/> 
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
