async function loadMessages(){

const res = await fetch("/api/slack/messages")
const data = await res.json()

const container = document.getElementById("messagesList")
container.innerHTML = ""

data.forEach(msg => {

const div = document.createElement("div")
div.className = "message"

div.innerHTML = `
<div class="message-avatar"></div>
<div>
<div class="message-user">${msg.user || "User"}</div>
<div class="message-text">${msg.text}</div>
</div>
`

container.appendChild(div)

})

}

async function sendMessage(){

const text = document.getElementById("messageInput").value

await fetch("/api/slack/send",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({text})
})

document.getElementById("messageInput").value=""

loadMessages()

}

loadMessages()