let dividende = Number(process.argv[2]); //on récupère les paramètres en entrée
let diviseur = Number(process.argv[3]); //on récupère les paramètres en entrée
let quotient = 0;
let reste = 0;


quotient = dividende/diviseur
quotient = Math.floor(quotient)

reste = dividende % diviseur
reste = Math.floor(reste)

if (isNaN(quotient) || !isFinite(quotient) || (quotient == 0) ) {
    console.log('Erreur');
} else {
    console.log("Résultat: "+quotient);
    console.log("Reste: "+reste);
}