// JS 1
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10

var palla = {
   "nome": 'palla',
   "peso": 10
}

console.log("Dati di default: " , palla);

// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var modifica = parseInt(prompt("Inserisci il peso da dare alla palla"));
palla["peso"] = modifica;

console.log("Dati modificati: " , palla);
