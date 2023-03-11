let path = __filename;
const searchSlash = '/';
let indLastSlash = path.lastIndexOf(searchSlash)
let nomFichier = path.substr(indLastSlash+1)
console.log(nomFichier);