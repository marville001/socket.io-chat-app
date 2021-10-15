import { Grid } from '@mui/material'

import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import ChatArea from './components/ChatArea'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Grid container spacing={0}>
        <LeftSidebar />
        <ChatArea/>
        <RightSidebar/>
      </Grid>
    </div>
  )
}

export default App
