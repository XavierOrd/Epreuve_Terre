/* Un nombre premier possède 2 diviseurs différents: 1 et lui-même.
Pour déterminer si un nombre est premier, tu dois donc dresser la liste de tous ses diviseurs.
Un diviseur est un nombre par lequel tu peux effectuer une division et obtenir un nombre entier (sans virgule). */

let inputNumber = 0;

let inputControl = (listeArgs) => {
    let numberOfArgs = listeArgs.length;
    if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
        console.log("Enter a Number like 25");
        return false;
    } else {
        inputNumber = parseInt(listeArgs[0]);
        if (isNaN(inputNumber)) {
            console.log(`${listeArgs[0]} is not a number`);
            return false;
        } else if (inputNumber < 0) {
            console.log("You have to input positive number");
            return false;
        } else if ((inputNumber == 0) || (inputNumber == 1)) {
            console.log(`${inputNumber} is not a primary number`);
            return false;
        }
    }
    return true;
};

let isDividableByItselfAndOne = (inputNumber) => {
    //le chiffre est divisible par 1 et lui-même
    let result;
    result = inputNumber / 1;
    if (Number.isInteger(result)) {
        result = inputNumber / inputNumber;
        if (Number.isInteger(result)) {
            return true;
        }
    }
    return false;
};

let isPrimaryNumber = (inputNumber) => {
    let result;
    let i;

    if (!isDividableByItselfAndOne(inputNumber)) {
        return false;
    }

    i = inputNumber - 1
    while (i > 1) {
        result = inputNumber / i;
        if (Number.isInteger(result)) {
            //on peut le diviser par un autre nombre que lui même et 1 donc ce n'est PAS un nombre entier
            //inutile de contrôler le reste
            return false;
        }
        i--;
    }
    return true;
};

if ( inputControl(process.argv.slice(2)) ) {
    if ( isPrimaryNumber(inputNumber) ) {
        console.log("C'est un nombre premier");
    } else {
        console.log("Ce n'est pas un nombre premier");
    }
}




