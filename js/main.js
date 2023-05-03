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
setTimeout(hideNumbers, 30 * 1000);



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

        if(userNumbers.includes(newNumber) == false && numero > 0){
            userNumbers.push(newNumber);
        }

    }

    return userNumbers;
}