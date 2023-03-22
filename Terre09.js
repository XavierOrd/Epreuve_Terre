"use strict";
let inputNumber = 0;
let inputExponent = 0;

let inputControl = (listeArgs) => {
    let numberOfArgs = listeArgs.length;
    if ((numberOfArgs < 2) || (numberOfArgs > 2)) {
        console.log("You have to input 2 Numbers.\nFor example : 2 3");
        return false;
    } else {
        inputNumber = Number(listeArgs[0]);
        inputExponent = Number(listeArgs[1]);
        if (isNaN(inputNumber)) {
            console.log("<parameter n°1> is not a Number");
            return false;
        } else if (isNaN(inputExponent)) {
            console.log("<parameter n°2> is not a Number");
            return false;
        }
    }
    return true;
};

let calculPower = (inputNumber, inputExponent) => {
    let result = 1;
    for (let i = 0; i < inputExponent; ++i) {
        result = result * inputNumber;
    }
    return result;
};

if (inputControl(process.argv.slice(2))) {
    console.log(calculPower(inputNumber, inputExponent)); //QUESTION A POSER : variables globale ou paramètres comme si on allait réutiliser la fonction ailleurs
};