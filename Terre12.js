
let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let inputHour = '';
let result = 0;
let controleOK = false;

if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
    console.log("Un seul argument obligatoire");
} else {
  inputHour = listeArgs[0];
}

//console.log(inputHour)

let hours=inputHour.slice(0, 2);
let separator = inputHour.slice(2, 3);
let minutes=inputHour.slice(3);

if ( isNaN(hours) || isNaN(minutes) || separator != ':' ) {
  console.log("Format attendu : HH:MM");
}

let ampm = hours >= 12 ? 'PM' : 'AM'; //am ou pm

hours = hours % 12;
hours = hours ? hours : 12; // si 0 => 12 (minuit)

let strTime = hours + ':' + minutes + ' ' + ampm;

console.log(strTime);