"use strict";
const ASCII_CHAR_A = 97;
const ASCII_CHAR_Z = 122;
let alphabet = '';
let alphabetFromLetter = '';
let inputLetter = process.argv[2]; //on récupère les paramètres en entrée

let returnAlphabet = () => {
    let alphabet = '';
    let letter = '';
    for (let i = ASCII_CHAR_A; i <= ASCII_CHAR_Z; i++) {
        letter = (String.fromCharCode(i));
        alphabet += letter;
    }
    return alphabet;
};

let returnAlphabetFromLetter = (alphabet,inputLetter) => {
    let numberOfLetter = 0;
    let pos = 0;
    let result=alphabet; //si on ne trouve pas la lettre, on retourne tout l'alphabet

    numberOfLetter=alphabet.length;

    if (inputLetter != undefined) {
        pos = alphabet.lastIndexOf(inputLetter);
        if (pos > -1) {
            result='';
            for (let i = pos; i < numberOfLetter; ++i) {
                result += alphabet[i];
            }
        }
    }
    return result;
};

alphabet = returnAlphabet();
alphabetFromLetter = returnAlphabetFromLetter(alphabet,inputLetter);

console.log(alphabetFromLetter);