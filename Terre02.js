"use strict";
const SLASH = '/';
let path = __filename;
let nameFile;

let ReturnFileName = () => {
    let indLastSlash;
    let nameFile;

    indLastSlash = path.lastIndexOf(SLASH);
    nameFile = path.substr(indLastSlash + 1);

    return nameFile;
};

nameFile = ReturnFileName();

console.log(nameFile);