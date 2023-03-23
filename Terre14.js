"use strict";
let listNumber = new Array();

let inputControl = (listeArgs) => {
    let numberOfArgs = listeArgs.length;
    let inputNumber;
    if ((numberOfArgs < 3) || (numberOfArgs > 3)) {
        console.log("Input 3 numbers");
        return false;
    } else {
        for (let i=0; i <  numberOfArgs; i++) {
            inputNumber = parseInt(listeArgs[i]);
            if (isNaN(inputNumber)) {
                console.log("You have to input only number")
                return false;
            } else {
                listNumber.push(inputNumber);
            }
        }
    }
    return true;
}

let sortNumber = () => {
    let numberOfArgs = listNumber.length;
    let isSortComplete = false;
    let isHigher = false;
    
    while (!isSortComplete) {
        isHigher=false;
        for (let i=0; i <  numberOfArgs; i++) {
          
          let currentNumber=Number(listNumber[i]);
          let nextNumber=Number(listNumber[i+1]);

          if (isNaN(nextNumber)) { // en dehors des limites du tableau
            break;
          }
          if (currentNumber>nextNumber) {
            listNumber[i] = nextNumber
            listNumber[i+1] = currentNumber
            isHigher = true;
            break;
          } 
        }
        isSortComplete = isHigher ? false : true;
    }
}

let displayMidle = () => {
    //triage des nombres
    sortNumber();
    //Affiche la valeur du milieu
    console.log(listNumber[1]);
};

if ( inputControl(process.argv.slice(2)) ){
    displayMidle();
};
        
