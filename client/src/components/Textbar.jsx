import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

const Textbar = ({message}) => {
    if(message.user === "admin") return <AdminMessage>{message.text}<hr/></AdminMessage>
    return (
        <ChatMessage>
            <img className="avatar" src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="Avatar" />
            <div className="text-dets">
                <h3>{message.user}</h3>
                <p>{message.text}</p>
            </div>
        </ChatMessage>
    )
}

const AdminMessage = styled('div')(({theme})=>({
    textAlign:"center",
    margin: "10px 0px",
    fontsize:"16px",
    color:"#555"
}))

const ChatMessage = styled(Box)(({theme})=>({
    margin: "10px 0px",
    padding:"5px 20px",
    display:"flex"
}))

export default Textbar
