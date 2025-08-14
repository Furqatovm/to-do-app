
let start =document.getElementById("Boshlash");
let tugatish =document.getElementById("tugatish");

let soat =document.getElementById("second");
let count =0;
let timerId;
let minut;
let vaqtkiritish;
start.addEventListener("click", () => {
    let ask =+prompt("vaqtni kiriting");
    vaqtkiritish=ask;
    clearInterval(timerId)
    timerId =setInterval(() => {
    vaqtkiritish++;
    soat.textContent =vaqtkiritish;
   }, 1000);
});

tugatish.addEventListener("click", () => {
    clearInterval(timerId);
    console.log("Timer to‘xtatildi");
    vaqtkiritish = 0;
    soat.textContent =vaqtkiritish;
});