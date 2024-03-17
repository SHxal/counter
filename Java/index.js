let countEl = document.getElementById("count-e")
let saveEL = document.getElementById("save-el")
let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}
function save(){
    let countSAV = " " + count + " - "
    saveEL.textContent += countSAV
    countEl.innerText = 0
    count= 0
    console.log("saved")
}
