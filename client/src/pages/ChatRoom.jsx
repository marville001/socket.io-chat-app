import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import {io} from "socket.io-client";

import ChatArea from "../components/ChatArea";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

let socket;

const ChatRoom = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:4000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT)

    setName(name);
    setRoom(room);

    socket.emit('join', {name, room}, ()=>{
      
    })

    return ()=>{
        socket.emit('disconnect');
        socket.off()
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message)=>{
      setMessages([...messages, message])
    })
  },[messages])


  const sendMessage = (message)=>{
    if(message){
      socket.emit('sendMessage', message, ()=>{
        setMessage('')
      })
    }
  }
  return (
    <Grid container spacing={0}>
      <LeftSidebar />
      <ChatArea 
      message={message} 
      name={name} 
      messages={messages} 
      setMessage={setMessage} 
      sendMessage={sendMessage} />
      <RightSidebar />
    </Grid>
  );
};

export default ChatRoom;
