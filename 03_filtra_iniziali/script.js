/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function Name_Append() {
    let list_letter_primary = [];
    for (let index = 0; index < names.length; index++) {
        if (!names[index].indexOf('A')) {
            list_letter_primary.push(names[index]);
        }
    }
    console.log(list_letter_primary);
}

// Invoca la funzione qui e stampa il risultato in console

Name_Append()

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]