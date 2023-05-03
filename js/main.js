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



/************ FUNCTIONS ***************/

// creiamo una funzione che genera e restituisce numeri casuali

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min);
}

// creiamo una funzione che cambia l innerText di un elemento "elemId" con il valore "contenuto"
function newInnerText(elemId, contenuto){
    document.getElementById(elemId).innerText = contenuto
};