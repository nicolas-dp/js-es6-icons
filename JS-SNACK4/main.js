/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, 
in base all’età. */

const team = [
  {
    nome: "Nicolas",
    cognome: "Rossi",
    eta: 25,
  },

  {
    nome: "Marco",
    cognome: "Gialli",
    eta: 18,
  },

  {
    nome: "Franco",
    cognome: "Verdi",
    eta: 15,
  },

  {
    nome: "Federico",
    cognome: "Grande",
    eta: 30,
  },

  {
    nome: "Pino",
    cognome: "La lavatrice",
    eta: 54,
  },

  {
    nome: "Enzo",
    cognome: "Ferrari",
    eta: 10,
  },

  {
    nome: "Mago",
    cognome: "Forest",
    eta: 16,
  },

  {
    nome: "Array",
    cognome: "Potter",
    eta: 17,
  },
]

const elementoDomOver = document.querySelector(".over_18")
const elementoDomUnder = document.querySelector(".under_18")

team.forEach(elementoTeam => {
  if (elementoTeam.eta >= 18) {
    const elementMarkup = `
        <div class="row">
        Il signor ${elementoTeam.nome} ${elementoTeam.cognome}, può guidare l'auto, in quanto ha ${elementoTeam.eta} anni
        </div>
    `
    elementoDomOver.insertAdjacentHTML("beforebegin", elementMarkup)

  } else {
    const elementMarkup = ` 
    <div class="row">
    Il signor ${elementoTeam.nome} ${elementoTeam.cognome}, NON può guidare l'auto in quanto minorenne. Età:${elementoTeam.eta}
    </div>
      `
    elementoDomUnder.insertAdjacentHTML("beforebegin", elementMarkup)   
  }
});