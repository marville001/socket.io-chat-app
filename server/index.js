const app  = require("express")();
const http = require('http')
const server = http.createServer(app)

const io = require('socket.io')(http)

io.on('connection', socket=>{
    socket.on('message', ({name, message})=>{
        io.emit('message', {name, message})
    })
})


const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})