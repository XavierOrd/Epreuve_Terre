let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let shouldSkip = false;
let nombrePrec;
let trieOk=true;

listeArgs.forEach(transformeEnEntier);
if (shouldSkip) {
    console.log("Erreur");
} else {
    shouldSkip=false;
    listeArgs.forEach(controlTrie);
    if (!trieOk) {
        console.log("Pas triée !");
    } else {
        console.log("Triée !");
    }
}

function transformeEnEntier(item, index, array) {
    if (shouldSkip) {
        return;
    }
    let monNombre = Number(item)
    if (isNaN(monNombre)) {
        shouldSkip = true;
        return;
    }
    array[index] = monNombre;
}

function controlTrie(item, index, array) {
    if (!trieOk) {
        return;
    }
    if (nombrePrec==undefined) {
        nombrePrec=item;
        return;
    }
    
    if (nombrePrec>item) {
        trieOk=false;
        return;
    }
    nombrePrec=item;
}
