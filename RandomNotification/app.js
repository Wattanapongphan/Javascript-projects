const btn =document.querySelector(".btn")
const container = document.querySelector(".container")
const messages = [
    "สวัสดีตอนเช้า",
    "Good Morning",
    "สวัสดีตอนเย็น",
    "Good Afternoon",
    "ราตรีสวัสดิ์",
    "Good Night",
    "Hello World"
]

btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}

console.log(randomMessage())