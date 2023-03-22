/* 
Nous soustrayons les nombres impairs consécutifs du nombre dont nous cherchons la racine carrée, jusqu'à ce que nous atteignions 0. Le nombre de fois que nous soustrayons est la racine carrée du nombre donné. Cette méthode ne fonctionne que pour les nombres carrés parfaits. Trouvons la racine carrée de 16 en utilisant cette méthode.
16 - 1 = 15
15 - 3 =12
12 - 5 = 7
7- 7 = 0
Vous pouvez observer que nous avons soustrait 4 fois. Ainsi, √16 = 4
*/
let inputNumber;

let inputControl = (listeArgs) => {

    let numberOfArgs = listeArgs.length;
    
    if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
        console.log("Enter a Number like 25");
        return false;
    } else {
        inputNumber = parseInt(listeArgs[0]);
        if ( isNaN(inputNumber) ) {
            console.log(`${listeArgs[0]} is not a valid Integer`);
            return false;
        }
    }
    return true;
};

let calculSquareRoot = (inputInteger) => {
    let sumOdd=0;
    let sumCount=0;
    let calc=0;
   
    sumOdd = inputInteger;

    for (let index = 0; index < inputInteger; index++) {
        calc = index % 2
        if (calc != 0) {
            sumOdd=sumOdd-index
            if ( (sumOdd)==0 ) {
                sumCount++;
                break;
            } else {
                sumCount++;
            }
        }
    }
   return sumCount;
};

if ( inputControl(process.argv.slice(2)) ) {
    console.log(calculSquareRoot(inputNumber))
}
