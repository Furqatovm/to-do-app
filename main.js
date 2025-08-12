
let listswrap =document.querySelector(".lists");
let addbtn =document.getElementById("added");


addbtn.addEventListener("click", ()=>{
    let text =prompt("matni kiriting");
    let list =document.createElement("div");
    list.classList.add("list")
    list.innerHTML =`<div>
                        <input type="checkbox" name="checkbox">
                        <label for="checkbox">${text}</label>
                    </div>
                    <i class="fa-solid fa-trash"></i>`
    listswrap.append(list);
})


listswrap.addEventListener("click", (event) =>{
    if(event.target.nodeName ==="I"){
        event.target.parentElement.remove();
    }
})


let bajarilganlar =document.getElementById("Bajarilganlar");
let bajarmaganlar =document.getElementById("bajarmaganlar");

let inputlar =document.querySelectorAll("input");
inputlar.forEach(input => {
    input.addEventListener("click", () => {
        let lis =input.parentElement.parentElement;
        if (input.checked){
           bajarilganlar.append(lis)
        } else {
            bajarmaganlar.append(lis)
        }
    })
});


let done =document.getElementById("done");
let undone =document.getElementById("undone");
let all =document.getElementById("all");

done.addEventListener("click", ()=>{
   
})




















// let btns =document.querySelectorAll(".delete");


// btns.forEach(value => {
//     value.addEventListener("click", ()=>{
//         value.parentElement.remove();
//     })
// })