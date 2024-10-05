
const decreaseBTN = document.getElementById("decreseBtn");
const resetBTN = document.getElementById("resetBtn");
const increaseBTN = document.getElementById("increseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBTN.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBTN.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBTN.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}