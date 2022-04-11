/* Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti 
proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
*/

const automobili = [
    {   
        marca: "fiat",
        modello: "panda",
        alimentazione: "benzina",
    },

    {   
        marca: "fiat",
        modello: "tipo",
        alimentazione: "diesel",
    },

    {   
        marca: "fiat",
        modello: "bravo",
        alimentazione: "diesel",
    },

    {   
        marca: "fiat",
        modello: "panda",
        alimentazione: "benzina",
    },

    {   
        marca: "audi",
        modello: "a3",
        alimentazione: "metano",
    },

    {   
        marca: "audi",
        modello: "a4",
        alimentazione: "diesel",
    },

    {   
        marca: "fiat",
        modello: "panda",
        alimentazione: "benzina",
    },

    {   
        marca: "fiat",
        modello: "panda",
        alimentazione: "gpl",
    },

    {   
        marca: "bmw",
        modello: "serie 1",
        alimentazione: "benzina",
    },

    {   
        marca: "tesla",
        modello: "model s",
        alimentazione: "elettrico",
    }
]

/* Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


const auto_benzina = automobili.filter(auto => auto.alimentazione == "benzina")

console.log(auto_benzina);

const auto_diesel = automobili.filter(auto => auto.alimentazione == "diesel")

console.log(auto_diesel);

const auto_restanti = automobili.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel")

console.log(auto_restanti);



