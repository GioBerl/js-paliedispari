// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//chiedo parola all'utente
var parola = prompt(`inserisci una parola per vedere se e' palindroma`);

//voglio stabilire se e' una parola o una frase
var isWord = false;
var isPhrase = false;
var parolaOfrase = parola.split(" ");
if (parolaOfrase.length == 1) {
    var isWord = true;
    console.log(`e' una parola`);
} else {
    var isPhrase = true;
    console.log(`e' una frase`);
}

// utilizzo la funzione isPalidroma (parametrizzando la parola dell'utente) per sapere se la parola inserita è palindroma e stampo un messaggio appropriato
if (isPalindroma(parola) == true) {
    if (isWord == true) {
        console.log(`la parola [${parola}] e' palindroma`);
    } else if (isPhrase == true) {
        console.log(`la frase [${parola}] e' palindroma`);
    }
} else {
    if (isWord == true) {
        console.log(`la parola [${parola}] non e' palindroma`);
    } else if (isPhrase == true) {
        console.log(`la frase [${parola}] non e' palindroma`);
    }
}

function isPalindroma(stringa) {
    var stringaLower = stringa.toLowerCase();
    // HeLlo ---> hello

    var punctuationLess = stringaLower.replace(/[^\w\s]|_/g, "");
    // Detailed explanation:
    // \w is any digit, letter, or underscore.
    // \s is any whitespace.
    // [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
    // [^\w\s]|_ is the same as #3 except with the underscores added back in.
    // hello!@#$? ---> hello

    var spaceLess = punctuationLess.replace(/\s+/g, "");
    // hello lol ---> hellolol

    var arrayStringa = spaceLess.split("");
    // hello --->  [h,e,l,l,o]

    var arrayReversed = arrayStringa.reverse();
    // [h,e,l,l,o] ---> [o,l,l,e,h]

    var stringaReversed = arrayReversed.join("");
    // [o,l,l,e,h] ---> olleh

    if (spaceLess === stringaReversed) {
        return true;
    } else {
        return false;
    }
}
