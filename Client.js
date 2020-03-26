import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import Axios from 'axios';


function SocketIOPage() {
  const [text, setText] = useState("");
  const endpoint = "http://127.0.0.1:5000/";
  let socket;
  useEffect(() => {
        socket = socketIOClient(endpoint);
        socket.on("message", data => console.log(data));
  },  []);

  return (
    <div>
        <h1>Socket IO POC</h1>
        <input type="text" id="textBox" onChange={(e) => setText(e.target.value)}></input>
        <button type="button" onClick={() => {Axios.post(endpoint + "send-message", {message: text})}}>Send</button>
    </div>
  );
}

export default SocketIOPage;
