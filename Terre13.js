
let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let inputHour = '';
let result = 0;
let controleOK = false;
let hoursConvert = 0
if ((numberOfArgs < 1) || (numberOfArgs > 1)) {
    console.log("Un seul argument obligatoire");
} else {
    inputHour = listeArgs[0];
}

let indOfSeparator = inputHour.indexOf(":");

let hours = Number(inputHour.slice(0, indOfSeparator));
let minutesAndMeridian = inputHour.slice(indOfSeparator + 1);
let minutes = Number(minutesAndMeridian.slice(0, 2));
let amPm = minutesAndMeridian.slice(2);
amPm = amPm.toUpperCase();



if (isNaN(hours) || isNaN(minutes) || indOfSeparator < 0 || (amPm != 'AM' && amPm != 'PM')) {
    console.log("Format attendu : HH:MMAM");
} else {

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
        default:
            alert('you have to specify AM or PM');
    }

    let strTime = hoursConvert + ':' + minutes;

    console.log(strTime);
}