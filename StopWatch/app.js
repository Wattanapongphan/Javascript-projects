const timeEl = document.querySelector('.time')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')

//เวลา 1000 ms => 1s, 60s => 1m, 60m => 1hr
let [milliseconds,second,minutes,hours,] = [0,0,0,0]
let timer = null

startBtn.addEventListener('click',startTimer)
pauseBtn.addEventListener('click',pauseTimer)
resetBtn.addEventListener('click',resetTimer)

function resetTimer(){
    clearInterval(timer)
    hours = 0
    minutes = 0
    second = 0
    milliseconds = 0
    timeEl.innerHTML = '00:00:00:00'
}

function pauseTimer(){
    clearInterval(timer)
}

function startTimer() {
    if(timer!=null) {
        clearInterval(timer)
    }
    timer = setInterval(displayTime,10)
}
function displayTime() {
    milliseconds+=10
    if(milliseconds === 1000){
        milliseconds = 0
        second++
        if(second === 60){
            second = 0
            minutes++
            if(minutes === 60){
                minutes = 0
                hours++
            }
        }
    }
    // ternary operator
    let h = hours<10?"0"+hours: hours
    let m = minutes<10?"0"+minutes:minutes
    let s = second<10?"0"+second:second
    let ms = milliseconds<10?"0"+milliseconds:milliseconds
    timeEl.innerHTML = `${h}:${m}:${s}:${ms}`
}