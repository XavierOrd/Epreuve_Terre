let alphabet='';
let lettre='';

for (let i = 97; i <= 122; i++) { 
    lettre = (String.fromCharCode(i));
    alphabet += lettre;
  }

console.log(alphabet);