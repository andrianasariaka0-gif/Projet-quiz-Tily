const menu =document.querySelector("#button");
const list = document.querySelector("#lien");
const img =document.querySelector("#image img");
// menu.addEventListener ("mouseleave",()=>{
//  list.style.display ="none";
// })
menu.addEventListener ("click", ()=>{
    list.style.display ="block";
    img.style.display ="block";

})