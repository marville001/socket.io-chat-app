import { Grid } from '@mui/material'
import React from 'react'
import ChatArea from '../components/ChatArea'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

const ChatRoom = () => {
    return (
        <Grid container spacing={0}>
        <LeftSidebar />
        <ChatArea />
        <RightSidebar />
      </Grid>
    )
}

export default ChatRoom
