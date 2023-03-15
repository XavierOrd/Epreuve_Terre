let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let monArgument = '';
let monTest;


if (( numberOfArgs > 1 ) || (numberOfArgs==0)) {
    console.log("erreur");
} else {
    monArgument = listeArgs[0];
    monTest = parseInt(monArgument)
    if (isNaN(monTest)) {
        console.log(monArgument.length);
    } else {
        console.log("erreur");
    }
}
