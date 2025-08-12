
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
let hammasi =document.getElementById("hammasi");

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

bajarilganlar.addEventListener("click", (event) =>{
    if(event.target.nodeName ==="I"){
        event.target.parentElement.remove();
    }
})

let done =document.getElementById("done");
let undone =document.getElementById("undone");
let all =document.getElementById("all");

done.addEventListener("click", ()=>{
   bajarilganlar.style.display ="flex";
   bajarmaganlar.style.display ="none";
   hammasi.style.display ="none";
   addbtn.style.display ="none"
})

undone.addEventListener("click", ()=>{
    bajarilganlar.style.display ="none";
    bajarmaganlar.style.display ="flex";
    hammasi.style.display ="none";
    addbtn.style.display ="none"
 })


 all.addEventListener("click", ()=>{
    bajarilganlar.style.display ="flex";
    bajarmaganlar.style.display ="flex";
    hammasi.style.display ="flex";
    addbtn.style.display ="flex"
 })
 let h2 =document.querySelector("h2");


 undone.addEventListener("click", (event) =>{
    if(event.target.nodeName ==="I"){
        event.target.parentElement.remove();
    }
})


all.addEventListener("click", (event) =>{
    if(event.target.nodeName ==="I"){
        event.target.parentElement.remove();
    }
})


done.addEventListener("click", ()=>{
    done.classList.toggle("unique")
    h2.textContent ='Bajarilganlar'
});

undone.addEventListener("click", ()=>{
    undone.classList.toggle("unique")
    h2.textContent ='Bajarilmaganlar'
})


all.addEventListener("click", ()=>{
    all.classList.toggle("unique")
    h2.textContent ='hammasi'
})


















// let btns =document.querySelectorAll(".delete");


// btns.forEach(value => {
//     value.addEventListener("click", ()=>{
//         value.parentElement.remove();
//     })
// })