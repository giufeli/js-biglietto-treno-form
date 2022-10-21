const bottone = document.querySelector(".genera")

bottone.addEventListener('click', function (){
    const resultNome = document.getElementById("Nome").value;    
    const resultKm = document.getElementById("Km").value;
    const prezzo_km = (0.21 * resultKm)
    const resultAge = document.getElementById("browsers").value;
    
    
    if (resultAge < 18)
    var finalPrice = (parseFloat(prezzo_km - (prezzo_km / 100 * 20)).toFixed(2) + " €");

    if (resultAge > 65)
    var finalPrice = (parseFloat(prezzo_km - (prezzo_km / 100 * 40)).toFixed(2) + " €");

    if (resultAge >= 18 && resultAge <= 65)
    var finalPrice = (parseFloat(prezzo_km).toFixed(2)  + " €");


    document.querySelector(".costo").innerHTML = finalPrice;

    document.querySelector(".codice-cp").innerHTML = Math.floor(Math.random() * 99999);

    document.querySelector(".carrozza").innerHTML = Math.floor(Math.random() * 10);

    document.querySelector(".nome-passeggero").innerHTML = resultNome;
    
    const ticketMenu = document.querySelector(".ticket");
    ticketMenu.className = ticketMenu.className + ".show"

});

function fun(){  
    document.getElementById("myForm").reset();  
}   

