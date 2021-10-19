const app  = require("express")();
const http = require('http')
const server = http.createServer(app)

const io = require('socket.io')(server)

io.on('connection', socket=>{
    console.log("New connection!!!!");
    // socket.on('message', ({name, message})=>{
    //     io.emit('message', {name, message})
    // })

    socket.on('disconnect', ()=>{
        console.log('User has left!!!');
    })
})


const PORT = process.env.PORT || 4000
server.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))