

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minuates = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minuates}:${seconds}`
    document.getElementById("clock").textContent = timeString
}

updateClock();
setInterval(updateClock, 1000);

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let isBreak = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
 if(isRunning) {
    clearInterval(timer);
    elapsedTime =  Date.now() - startTime;
    isRunning = false;
 }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currTime = Date.now();
    elapsedTime = currTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minuates =  Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds =  Math.floor(elapsedTime /1000 % 60);
    let miniseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minuates = String(minuates).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miniseconds = String(miniseconds).padStart(2, "0");

    display.textContent = `${hours}:${minuates}:${seconds}:${miniseconds}`;

}