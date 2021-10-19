const http = require('http')
const cors = require('cors')
const express  = require("express");
const {Server} = require('socket.io')

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')


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
    
    socket.on('user-joined', ({name, room}, callback)=>{
        const {error, user} = addUser({id: socket.id, name, room})  
        
        if(error) return callback(error); 

        socket.emit('message', {user:'admin', text: `${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', {user:"admin", text: `${user.name}, has joined`})

        socket.join(user.room);
        callback()
    })

    socket.on('disconnect', ()=>{
        console.log('User has left!!!');
    })
})


const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))