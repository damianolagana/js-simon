// creiamo un array

const arrayNumbers =[];

while(arrayNumbers.length < 5){
    const randomNumber = getRandomNumber(1,100);

    // condizione che controlla se ci sono doppioni nell'array
    if(arrayNumbers.includes(randomNumber) == false){
        arrayNumbers.push(randomNumber);
    }
}

console.log("numeri casuali:",arrayNumbers);

// scriviamo i numeri casuali dell'array nella pagina
newInnerText("numbers",arrayNumbers);

// nascondiamo i numeri generati dopo 30 secondi
setTimeout(hideNumbers, 3 * 1000);

// chiediamo i numeri all'utente dopo i 30 secondi quindi creiamo un altro setTimeout
setTimeout(function(){
    const userNumbers = askNumbers();
    console.log("numeri utente:", userNumbers)

    const guessedNumbers = compareNumbers(arrayNumbers,userNumbers);
    console.log("numeri indovinati;", guessedNumbers);

    newInnerText("message", "Hai indovinato i seguenti numeri");
    newInnerText("numbers", guessedNumbers);

}, 4 * 1000)



/************ FUNCTIONS ***************/

// creiamo una funzione che genera e restituisce numeri casuali

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min);
}

// creiamo una funzione che cambia l innerText di un elemento "elemId" con il valore "contenuto"
function newInnerText(elemId, contenuto){
    document.getElementById(elemId).innerText = contenuto
};


// creiamo una funzione che nasconda i nostir numeri
function hideNumbers(){
    newInnerText("message", "inserisci i 5 numeri che hai appena visto");
    newInnerText("numbers", "");
}

// creiamo una funzione che chiede all'utente di inserire i numeri
function askNumbers(){
    const userNumbers = [];

    while(userNumbers.length < 5){
        const newNumber = parseInt(prompt("Inserisci un numero"));

        if(userNumbers.includes(newNumber) == false && newNumber > 0){
            userNumbers.push(newNumber);
        }

    }

    return userNumbers;
}

// creiamo una funziona che confronta i due array e restituisce quanti numeri sono uguali
function compareNumbers(randomNumber,userNumbers){
    const guessNumbers = [];

    for (let i = 0; i < randomNumber.length; i++) {
        const currentNumber = randomNumber[i];

        if(userNumbers.includes(currentNumber)){
            guessNumbers.push(currentNumber);
        }
        
    }

    return guessNumbers;
}