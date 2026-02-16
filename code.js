const image = document.querySelector(".image2 img");
const image1 = document.querySelector("#image img");
// const image2 = document.querySelector(".image3 img");
const valiny = document.querySelector("#valiny");
const valiny2 = document.querySelector("#valiny2");
const btnQuitter = document.querySelector(".button");
const btnEnvoyer = document.querySelector(".btn");
const btnEnvoyer2 = document.querySelector(".btn2");

 
  valiny1 = valiny.value
  valinyMarina = 
  btnEnvoyer.addEventListener("click",()=>{
    if(valiny1.innerText = valinyMarina ,true){
        alert("MArina valiteninao")
     image.style.display = "flex";
    image1.style.display = "none";
    valiny2.style.display ="flex";
    valiny.style.display ="none"
    btnEnvoyer.style.display="none";
    btnEnvoyer2.style.display="block"
    valiny.value =""
    }
    else{
        alert("Tsy izay ilay valiny marina")
        valiny.value =""
    }
  })
 valinyFaharoa = valiny2.value
  valinyMarina2 ="Misaotra"
  btnEnvoyer2.addEventListener("click",()=>{
    if(valinyFaharoa.innerText = valinyMarina2){
        alert("Marina")
          image.style.display = "none";
           image2.style.display = "block";
           valiny2.value =""
          
        
    }
    else{
        alert("Diso")
        valiny2.value=""
    }

  })
  








