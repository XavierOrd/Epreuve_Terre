"use strict";
let reverseSentence = (listeArgs) => {
    let numberOfArgs = listeArgs.length;
    let sentenceLength = 0;
    let inputSentence = '';
    let outputSentence = '';

    if (numberOfArgs > 0) {
        inputSentence = listeArgs[0];
        sentenceLength = inputSentence.length - 1;
        if (sentenceLength > 0) {
            for (let i = sentenceLength; i >= 0; i--) {
                outputSentence += inputSentence[i];
            }
        }
    }
    return outputSentence
};

console.log(reverseSentence(process.argv.slice(2)));