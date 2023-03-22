"use strict";
let hours, separator, minutes;

let inputControl = (listeArgs) => {
  let inputHour='';
  let numberOfArgs = listeArgs.length;

  if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
    console.log("Enter a hour (24h) like 23:30");
    return false;
  } else {
    inputHour = listeArgs[0];
    hours=inputHour.slice(0, 2);
    separator = inputHour.slice(2, 3);
    minutes=inputHour.slice(3);

    if ( isNaN(hours) || isNaN(minutes) || separator != ':' ) {
      console.log("You have to input 24h format (HH:MM)");
      return false;
    }
  }
  return true;
};

let convert24To12 = () => {
  let ampm;
  let strTime;

  ampm = hours >= 12 ? 'PM' : 'AM'; //am ou pm
  hours = hours % 12;
  hours = hours ? hours : 12; // si 0 => 12 (minuit)
  strTime = hours + ':' + minutes + ' ' + ampm;

  return strTime;
};

if ( inputControl(process.argv.slice(2)) ) {
  console.log(convert24To12());
};
