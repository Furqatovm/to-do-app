
let start =document.getElementById("Boshlash");
let tugatish =document.getElementById("tugatish");

let soat =document.getElementById("second");

start.addEventListener("click", ()=>{
    let date =new Date();
    soat.textContent =date.getSeconds();
})

