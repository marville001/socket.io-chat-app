import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router'
import ChatRoom from './pages/ChatRoom'
import JoinRoom from './pages/JoinRoom'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={JoinRoom} />
        <Route exact path="/chat" component={ChatRoom} />
      </Switch>
      
    </div>
  )
}

export default App
