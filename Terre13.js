"use strict";
let hours,minutes,amPm;

let inputControl = (listeArgs) => {
    let numberOfArgs = listeArgs.length;
    let inputHour = '';
    let indOfSeparator;
    let minutesAndMeridian;

    if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
        console.log("Enter a hour (12h) like 3:30pm");
        return false;
    } else {
        inputHour = listeArgs[0];
    }
    
    indOfSeparator = inputHour.indexOf(":");
    
    hours = Number(inputHour.slice(0, indOfSeparator));
    minutesAndMeridian = inputHour.slice(indOfSeparator + 1);
    minutes = Number(minutesAndMeridian.slice(0, 2));
    amPm = minutesAndMeridian.slice(2);
    amPm = amPm.toUpperCase();
    
    if (isNaN(hours) || isNaN(minutes) || indOfSeparator < 0 || (amPm != 'AM' && amPm != 'PM')) {
        console.log("You have to input 12h format (HH:MMAM)");
        return false;
    }
    return true;
 };

 let convert12To24 = () => {
    let hoursConvert;
    let strTime;
    hoursConvert = hours;

    switch (amPm) {
        case 'AM':
            //12:15 AM -> 0:15
            if (hoursConvert == 12) {
                hoursConvert = 0 // 12:20AM -> 00:20
            }
            hoursConvert = hoursConvert < 10 ? '0' + hoursConvert : hoursConvert; // 5:00AM -> 05:00
            break;
        case 'PM':
            if (hours != 12) {
                hoursConvert = hours + 12
            }
            break;     
    }
    strTime = hoursConvert + ':' + minutes;
    return strTime
 };

 if ( inputControl( process.argv.slice(2)) ) {
    console.log(convert12To24());
 };

