// chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// chiedere all'utente un numero tra 1 e 5
var numero = parseInt(prompt("inserisci un numero tra 1 e 5"));

// generare un numero random tra 1 e 5
// var numeroRandom = Math.floor(Math.random() * 5) + 1;

// ! se volessi generare un numero random fra due numeri casuali (inclusi)
var numeroRandom = generaRandom(1, 5);

// Chiedere all'utente se sceglie pari o dispari
var scelta = prompt("pari o dispari?");

// fare la somma dei due numeri
var somma = numero + numeroRandom;

// voglio vedere il numero dell'utente e quello del computer, la loro somma e la scelta dell'utente
console.log(`numero dell' utente: ${numero}`);
console.log(`numero generato dal computer: ${numeroRandom}`);
console.log(`la somma dei due numeri e': ${somma}`);
console.log(`l'utente pensa che la somma sara': ${scelta}`);

// valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno
if (isPari(somma) == scelta) {
    console.log("hai vinto");
} else {
    console.log("mi dispiace hai perso");
}

// FUNZIONI
// definisco una funzione per stabilire numeri pari e dispari
function isPari(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

// definisco una funzione per generare un numero random tra due intervalli (inclusi)
function generaRandom(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}
