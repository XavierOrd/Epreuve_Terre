/* Un nombre premier possède 2 diviseurs différents: 1 et lui-même.
Pour déterminer si un nombre est premier, tu dois donc dresser la liste de tous ses diviseurs.
Un diviseur est un nombre par lequel tu peux effectuer une division et obtenir un nombre entier (sans virgule). */

let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let chiffre1 = 0;
let result = 0;
let controleOK = false;

if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
    console.log("Un seul argument obligatoire");
} else {
    chiffre1 = listeArgs[0];

    if (isNaN(chiffre1)) {
        console.log("L'argument n'est pas un nombre")
    } else if (chiffre1 < 0) {
        console.log("L'argument doit être positif")
    } else if ((chiffre1 == 0) || (chiffre1 == 1)) {
        console.log(chiffre1 + " n'est pas un nombre entier")
    } else {

        //on le divise dabord par 1 et lui même
        result = chiffre1 / 1
        if (Number.isInteger(result)) {
            result = chiffre1 / chiffre1
            if (Number.isInteger(result)) {
                controleOK = true;
            }
        }

        //ensuite on contrôle si on peut le diviser par un autre nombre que 1 et lui-même
        if (controleOK == true) {
            i = chiffre1 - 1
            while (i > 1) { 
                result = chiffre1 / i
                if (Number.isInteger(result)) {
                    //on peut le diviser par un autre nombre que lui même et 1 donc ce n'est PAS un nombre entier
                    //inutile de contrôler le reste
                    controleOK = false;
                    //console.log(chiffre1 + "divisé par " + i + " = " + result)
                    break;
                } else {
                    //console.log("ok : " + chiffre1 + "divisé par " + i + " = " + result)
                }
                i--;
            }
        }
        if (controleOK == true) {
            console.log(chiffre1 + " est un nombre entier");
        } else {
            console.log(chiffre1 + " n'est pas un nombre entier");
        }
    }
}
