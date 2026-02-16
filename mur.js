const h1 =document.querySelector("#head");
window.onscroll =()=>{
  h1.style.color ="blue";
 h1.style.transform = " translateY(30px   ) "
 h1.style.transformTiming ="1.5s"
 
}
h1.onclick=()=>{
    h1.style.transform ="scale(90%)";
    h1.style.color="black"
}
