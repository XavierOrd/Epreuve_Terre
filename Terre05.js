"use strict";
let oddOrEven = () => {
    let inputNumber; //on récupère les paramètres en entrée
    let calcul = 0;
    inputNumber = process.argv[2]; //on récupère les paramètres en entrée
    inputNumber = parseInt(inputNumber);
    
    if (isNaN(inputNumber)) {
        console.log('Tu ne me la mettras pas à l’envers.');
    } else {
        calcul = inputNumber % 2

        if (calcul == 0) {
            console.log("Pair");
        }
        else {
            console.log("Impair");
        }
    }
};

oddOrEven();