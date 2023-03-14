let listeArgs = process.argv.slice(2);
let numberOfArgs = listeArgs.length;
let tailleCh = 0;
let maPhrase = '';
let maPhraseInverse = '';
if ( numberOfArgs > 0 ) {

    maPhrase = listeArgs[0];
    tailleCh = maPhrase.length-1;
    
    if (tailleCh > 0) {
        for(let i = tailleCh; i>=0; i--) {
            maPhraseInverse+=maPhrase[i];
        }
        console.log(maPhraseInverse);
    }
}
