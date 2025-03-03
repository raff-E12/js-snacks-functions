/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function Username_con(user) {
    return console.log('Ciao', user);
}

Username_con(userName);

// Invoca la funzione qui e stampa il risultato in console

const User_Hello = (user)=>{
   return console.log('Ciao', user);
}

User_Hello(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario
