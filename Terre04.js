let alphabet='';
let letter='';
let pos=0.
let numberOfArgs=0;
let result='';
let inputLetter = process.argv[2]; //on récupère les paramètres en entrée

//on alimente une chaine contenant tout l'alphabet
for (let i = 97; i <= 122; i++) { 
    letter = (String.fromCharCode(i));
    alphabet += letter;
  }

numberOfArgs=alphabet.length;

if ( inputLetter != undefined ) {

    //on recherche la position de la lettre dans l'alphabet
    pos = alphabet.lastIndexOf(inputLetter)
    //Si on trouve la lettre, on affiche le reste de l'alphabet à partir de sa position
    if ( pos > -1 )  {
        for(let i = pos ; i < numberOfArgs; ++i) {
            result+=alphabet[i];
        }
        console.log(result);
    }
} else {
    //si aucun paramètre en entrée, on affiche l'alphabet en entier
    console.log(alphabet);
}
