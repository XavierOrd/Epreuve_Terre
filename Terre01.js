/* Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.

Exemples d’utilisation :
$> python exo.py
abcdefghijklmnopqrstuvwxyz
$>

Attention : votre programme devra utiliser une boucle.

 */
let alphabet='';
let lettre='';

for (let i = 97; i <= 122; i++) { 
    lettre = (String.fromCharCode(i));
    alphabet += lettre;
  }

console.log(alphabet);