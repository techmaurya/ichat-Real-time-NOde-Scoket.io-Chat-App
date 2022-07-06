const io= require('socket.io')(8000)

const users={}

io.on('connection',socket =>
{
    socket.on('user-Joined', name =>{
        users[socket.id]=name
        console.log('New user',name)
        socket.broadcast.emit('user-joined',name)
    })
    socket.on('send',message =>{
        socket.broadcast.emit('receive',{message:message,name:user[socketid]})
    })
})