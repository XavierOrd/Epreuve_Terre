"use strict";
let returnLengthOfString = (listeArgs) => {
    let numberOfArgs = listeArgs.length;
    let inputString = '';
    let outputResult;
    let numberConvert;

    if (( numberOfArgs > 1 ) || (numberOfArgs==0)) {
        outputResult="erreur";
    } else {
        inputString = listeArgs[0];
        numberConvert = parseInt(inputString)
        if (isNaN(numberConvert)) {
            outputResult=inputString.length;
        } else {
            outputResult="erreur";
        }
    }
    return outputResult;
}

console.log(returnLengthOfString(process.argv.slice(2)));