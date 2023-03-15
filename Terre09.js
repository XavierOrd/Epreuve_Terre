let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let chiffre1 = 0;
let chiffre2 = 0;
let result = 0;

if ((numberOfArgs < 2) || (numberOfArgs > 2)) {
    console.log("2 arguments obligatoire");
} else {
    chiffre1 = listeArgs[0];
    chiffre2 = listeArgs[1];

    if (isNaN(chiffre1)) {
        console.log("L'argument 1 n'est pas un nombre")
    } else if (isNaN(chiffre2)) {
        console.log("L'argument 2 n'est pas un nombe")
    } else {
        result = (chiffre1 ** chiffre2)
        console.log(result)
    }
}
