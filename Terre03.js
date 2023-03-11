let listeArgs = process.argv.slice(2);
numberOfArgs = listeArgs.length;
if ( numberOfArgs > 0 ) {

    for(let i = 0 ; i < numberOfArgs; ++i) {
        console.log(listeArgs[i]);
    }

}

