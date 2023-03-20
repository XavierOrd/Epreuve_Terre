/* Créez un programme qui affiche l’alphabet en lettre minuscules suivi d’un retour à la ligne.

Exemples d’utilisation :
$> python exo.py
abcdefghijklmnopqrstuvwxyz
$>

Attention : votre programme devra utiliser une boucle.

 */
"use strict";
const ASCII_CHAR_A=97;
const ASCII_CHAR_Z=122;
let alphabet=''; //question à poser. Peut-on avoir une variable locale et globale de même nom ?

let ReturnAlphabet = () => {  
  let alphabet='';
  let letter='';
  for (let i = ASCII_CHAR_A; i <= ASCII_CHAR_Z; i++) { 
    letter = (String.fromCharCode(i));
    alphabet += letter;
  }
  return alphabet;
};

alphabet = ReturnAlphabet();

console.log(alphabet);

