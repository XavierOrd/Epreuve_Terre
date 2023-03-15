let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let chiffre1 = 0;
let chiffre2 = 0;
let result = 0;

if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
    console.log("1 argument obligatoire");
} else {
    chiffre1 = listeArgs[0];

    if (isNaN(chiffre1)) {
        console.log("L'argument 1 n'est pas un nombre")
    } else if (chiffre1<0) {
        console.log("L'argument 1 doit être positif")
    } else {
        result = chiffre1 ** (1/2)
        console.log(result)
    }
}
