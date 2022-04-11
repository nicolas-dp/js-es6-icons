/* Snack 2
A partire da un array di stringhe, crea un secondo array formattando 
le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const nomi_fantasy = ["grogu","MANDO","Luke"]

/* crea un secondo array formattando 
le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke'] */


let nomi_corretti = [];

for (let i = 0; i < nomi_fantasy.length; i++) {
    let elementFirstArray = nomi_fantasy[i].toLowerCase();
    nomi_corretti.push(elementFirstArray.charAt(0).toUpperCase() + elementFirstArray.slice(1))
    
}

console.log(nomi_corretti);







