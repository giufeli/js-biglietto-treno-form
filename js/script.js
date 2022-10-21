//const btnNome = document.querySelector("Nome")

/*
function myFunction() {
    var result = document.getElementById("Nome").value;
    console.log(result)
  }
*/
/*
function myFunction() {
    const btnNome = document.querySelector("Nome").value;
    console.log(btnNome)
}
*/

const bottone = document.querySelector(".btn-primary")


bottone.addEventListener('click', function (){
    const resultNome = document.getElementById("Nome").value;    
    const resultKm = document.getElementById("Km").value;
    const prezzo_km = (0.21 * resultKm)
    const resultAge = document.getElementById("browsers").value;
    
    
    if (resultAge < 18)
    console.log (parseFloat(prezzo_km - (prezzo_km / 100 * 20)).toFixed(2) + " €");

    if (resultAge > 65)
    console.log (parseFloat(prezzo_km - (prezzo_km / 100 * 40)).toFixed(2) + " €");

    if (resultAge >= 18 && resultAge <= 65)
    console.log (parseFloat(prezzo_km).toFixed(2)  + " €");

    
    const ticketMenu = document.querySelector(".ticket");
    ticketMenu.className = ticketMenu.className + ".show"

});


