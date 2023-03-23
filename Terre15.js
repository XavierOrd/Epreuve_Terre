"use strict";
let listeArgs = process.argv.slice(2);
let shouldSkip = false;
let previousNumber;
let isSorted = true;

function stringToInteger(item, index, array) {
    let numberConvert;
    if (shouldSkip) {
        return;
    }
    numberConvert = parseInt(item);
    if (isNaN(numberConvert)) {
        shouldSkip = true;
        return;
    }
    array[index] = numberConvert;
};

function sortControl(item) {
    if (!isSorted) {
        return;
    }
    if (previousNumber == undefined) {
        previousNumber = item;
        return;
    }

    if (previousNumber > item) {
        isSorted = false;
        return;
    }
    previousNumber = item;
};

function sortedOrNotSorted() {
    listeArgs.forEach(stringToInteger);
    if (shouldSkip) {
        console.log("Erreur");
    } else {
        listeArgs.forEach(sortControl);
        if (!isSorted) {
            console.log("Pas trié !");
        } else {
            console.log("Trié !");
        }
    }
};

sortedOrNotSorted();





