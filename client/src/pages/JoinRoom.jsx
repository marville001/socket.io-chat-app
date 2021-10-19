import { styled } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const JoinRoom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  
  const handleJoinRoom = ()=>{
      console.log({name, room});
  }

  return (
    <Container>
      <JoinForm>
        <h1>Join Room</h1>
        <TextInput onChange={e=>setName(e.target.value)} value={name} label="Enter your Name" />
        <TextInput onChange={e=>setRoom(e.target.value)} value={room} label="Enter room" />
        <Button
          style={{ width: "100%", marginTop: "20px" }}
          color="primary"
          variant="contained"
          onClick={handleJoinRoom}
        >
          Join Room
        </Button>
      </JoinForm>
    </Container>
  );
};

const Container = styled("div")((theme) => ({
  height: "calc(100vh - 65px)",
  display: "flex",
  justifyContent: "center",
}));

const JoinForm = styled("div")((theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const TextInput = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export default JoinRoom;
