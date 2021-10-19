const http = require('http')
const cors = require('cors')
const express  = require("express");
const {Server} = require('socket.io')


const app = express()
app.use(cors())

const server = http.createServer(app)




const io = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods:['GET', "POST"]
    }
})

io.on('connection', socket=>{
    console.log(socket.id);
    socket.on('message', ({name, message})=>{
        io.emit('message', {name, message})
    })

    socket.on('user-joined', ({name, room}, callback)=>{
              
    })

    socket.on('disconnect', ()=>{
        console.log('User has left!!!');
    })
})


const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))