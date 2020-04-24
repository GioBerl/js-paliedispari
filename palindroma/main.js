// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//chiedo parola all'utente
var parola = prompt(`inserisci una parola per vedere se e' palindroma`);

// utilizzo la funzione isPalidroma (parametrizzando la parola dell'utente) per sapere se la parola inserita è palindroma e stampo un messaggio appropriato
if (isPalindroma(parola) == true) {
    console.log(`la parola ${parola} e' palindroma`);
} else {
    console.log(`la parola "${parola}" non e' palindroma`);
}

function isPalindroma(stringa) {
    var stringaLower = stringa.toLowerCase();
    // HeLlo ---> hello
    var arrayStringa = stringaLower.split("");
    // hello --->  [h,e,l,l,o]
    var arrayReversed = arrayStringa.reverse();
    // [h,e,l,l,o] ---> [o,l,l,e,h]
    var stringaReversed = arrayReversed.join("");
    // [o,l,l,e,h] ---> olleh

    if (stringaLower === stringaReversed) {
        return true;
    } else {
        return false;
    }
}
