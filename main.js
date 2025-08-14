
let listswrap =document.querySelector(".lists");
let addbtn =document.getElementById("added");
let white =document.querySelector(".white");


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


white.addEventListener("click", (event) =>{
    if(event.target.nodeName ==="I"){
        event.target.parentElement.remove();
    }
})


let bajarilganlar = document.getElementById("Bajarilganlar");
let bajarmaganlar = document.getElementById("bajarmaganlar");
let hammasi = document.getElementById("hammasi");

white.addEventListener("click", (event) => {
    if (event.target.nodeName === "INPUT") {
        let lis = event.target.parentElement.parentElement;
        if (event.target.checked) {
            bajarilganlar.prepend(lis);
        } else {
            bajarmaganlar.prepend(lis);
        }
    }
});


let done =document.getElementById("done");
let undone =document.getElementById("undone");
let all =document.getElementById("all");
let h2 =document.querySelector("h2");


done.addEventListener("click", ()=>{
   bajarilganlar.style.display ="flex";
   bajarmaganlar.style.display ="none";
   hammasi.style.display ="none";
   addbtn.style.display ="none";
   done.classList.toggle("unique");
   undone.classList.remove("unique");
   all.classList.remove("unique");
   h2.textContent ="Bajarilganlar";
})

undone.addEventListener("click", ()=>{
    bajarilganlar.style.display ="none";
    bajarmaganlar.style.display ="flex";
    hammasi.style.display ="none";
    addbtn.style.display ="none";
    undone.classList.toggle("unique")
    h2.textContent ='Bajarilmaganlar';
    done.classList.remove("unique");
    all.classList.remove("unique");
 })


 all.addEventListener("click", ()=>{
    bajarilganlar.style.display ="none";
    bajarmaganlar.style.display ="flex";
    hammasi.style.display ="flex";
    addbtn.style.display ="flex";
    all.classList.toggle("unique")
    h2.textContent ='hammasi';
    done.classList.remove("unique");
    undone.classList.remove("unique");
    let h3 =document.querySelector("h3");
    h3.style.display ="none";
 })



