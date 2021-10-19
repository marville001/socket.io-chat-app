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

  const ENDPOINT = 'http://localhost:4000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT)

    setName(name);
    setRoom(room);

    socket.emit('user-joined', {name, room})

  }, [ENDPOINT, location.search]);

  return (
    <Grid container spacing={0}>
      <LeftSidebar />
      <ChatArea />
      <RightSidebar />
    </Grid>
  );
};

export default ChatRoom;
