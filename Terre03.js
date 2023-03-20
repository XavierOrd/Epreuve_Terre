"use strict";

let showArgument = (listofArgs) => {
    let numberOfArgs = listofArgs.length;
    if (numberOfArgs > 0 ) {
        for(let i = 0 ; i < numberOfArgs; ++i) {
            console.log(listofArgs[i]);
        }
    } else {
        console.log("No argument to display.")
    }
};

showArgument(process.argv.slice(2));



