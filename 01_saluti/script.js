/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function Username_con(user) {
    let phrase_form = 'Ciao ' + user;
    return phrase_form;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(Username_con(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario
