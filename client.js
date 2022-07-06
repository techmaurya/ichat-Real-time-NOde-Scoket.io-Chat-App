const socket=io('http://localhost:8000')

const form = document.getElementById('send-container')
const messageInput=document.getElementById('messageInp')
const messageContainer =document.querySelector('.container')

var audio =new Audio('Tone.mp3')
const append=(message,position)=>
{
    const messageElement=document.createElement('div')
    messageElement.innerText=message
    messageElement.classList.add('message')
    messageElement.classList.add(position)
    messageContainer.append(messageElement)
    if(position=='left')
    {audio.play()}
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value 
    append(`You :${message}`)
    socket.emit('send',message)
    messageInput.value=''
})
const name=prompt('Enter Your name to join')
socket.emit('new-user-joined',name)

socket.on('user-joined',data =>{
append(`${name}  joined the chat`,'right')

})
socket.on('receive',data =>{
    append(`${data.name}:${data.message}  joined the chat`,'left')
    
    })
    socket.on('left',danameta =>{
        append(`${data.name} left the chat`,'right')
        
        })
