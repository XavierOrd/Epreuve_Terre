let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let tab1 =new Array();

if ((numberOfArgs < 3) || (numberOfArgs > 3)) {
    console.log("Saisir 3 chiffres");
} else {
    //boucler sur tous les arguments
    let triageComplet = false;
    let i=0
    
    for (i=0; i <  numberOfArgs; i++) {
        tab1.push(Number(listeArgs[i]));
    }
   
    let tab2 = tab1.slice()
    let trouveSuperieur = false;
    let tousEgaux=true;
    while (!triageComplet == true) {
        trouveSuperieur=false;
        for (i=0; i <  numberOfArgs; i++) {
          
          let val1=Number(tab1[i]);
          let val2=Number(tab1[i+1]);
          if (isNaN(val2)) { // en dehors des limites du tableau
            break;
          }
          if (val1>val2) {
            tab1[i] = val2
            tab1[i+1] = val1
            tab2 = tab1.slice()
            trouveSuperieur = true;
            tousEgaux=false;
            break;
          } else if (val1<val2) {
            tousEgaux=false;
          } 
        }
        triageComplet = trouveSuperieur ? false : true;
    }
    if (tousEgaux) {
        console.log("Erreur")
    } else {
        console.log(tab1);
        console.log(tab1[1]) //on affiche l'élément du milieu
    }
}


/* //debut
8 1 3
0 > 1 
    oui : 
        tab1{0} = tab2{1}
        tab1{1} = tab2{0}
        1 8 3
        copie tableau
1 8 3
0 > 1
    non : 
1 > 2 
    oui : 
    tab1{1} = tab2{2}
    tab1{2} = tab2{1}
    1 3 8
    copie tableau

1 3 8

0 > 1 
    non:
1 > 2 
    non:
2 > 3 
    impossible : */