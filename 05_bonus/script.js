/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function Time_Salut(names){
    const date_now = new Date().getDate();
    let phrase_result = '';

    if (date_now === 13) {
        phrase_result = 'Buongiorno ' + names + '.';
    } else if(date_now === 17) {
        phrase_result = 'Buonpomeriggio ' + names + '.';
    } else{
        phrase_result = 'Buonasera ' + names + '.';
    }

    return phrase_result;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(Time_Salut(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.