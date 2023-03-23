"use strict";
let calcDivision = () => {
    let dividende;
    let diviseur;
    let quotient = 0;
    let reste = 0;

    dividende = parseInt(process.argv[2]);
    diviseur = parseInt(process.argv[3]);

    quotient = dividende / diviseur
    quotient = Math.floor(quotient)

    reste = dividende % diviseur
    reste = Math.floor(reste)

    if (isNaN(quotient) || !isFinite(quotient) || (quotient == 0)) {
        console.log('Erreur');
    } else {
        console.log("Résultat: " + quotient);
        console.log("Reste: " + reste);
    }
};

calcDivision();