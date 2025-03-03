/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const Vocals_Fun = (words)=>{
    let result = '';
    let vocals = ['a', 'e', 'i', 'o', 'u'];
    let vocals_number = 0;
    for (let index = 0; index < words.length; index++) {
        if (vocals.indexOf(words[index]) !== -1) { //indice di stringa in base alla ricerca
            vocals_number++;
        } 
    }
   return result = 'Comprendono ' + vocals_number + ' vocali in tutto.';
}

// Invoca la funzione qui e stampa il risultato in console

console.log(Vocals_Fun(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)