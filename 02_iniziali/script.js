/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function List_Append() {
    let name_list = [];
    for (let index = 0; index < names.length; index++) {
        name_list.push(names[index].slice(0, 1));
    }
    console.log(name_list);
}

// Invoca la funzione qui e stampa il risultato in console

List_Append()

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]