/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function Name_Append(list, letter) {
    let list_letter_primary = [];
    for (let index = 0; index < list.length; index++) {
        if (list[index].indexOf(letter) === 0) {
            list_letter_primary.push(list[index]);
        }
    }
    return list_letter_primary;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(Name_Append(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]