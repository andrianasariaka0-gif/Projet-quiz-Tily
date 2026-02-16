const btnSubmit = document.querySelector(".button");
const fiv = document.querySelector("#fivondronana");
const anarana = document.querySelector("#username");
const name =document.querySelector("#username");
const fiv2 =document.querySelector("#fivondronana");

window.onload =()=>{

    const anarana = prompt("ANARANA:")
    const fiv =prompt("FIVONDRONANA:")
    localStorage.anarana =anarana
    localStorage.fiv= fiv

    // document.querySelector("p").innerText =anarana
}
btnSubmit.addEventListener("click", () => { 
      fiv2.value="";
    name.value ="";

})





