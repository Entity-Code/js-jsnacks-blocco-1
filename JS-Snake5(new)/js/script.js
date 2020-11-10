// JS 5 (NEW)
// dato questo array di obj iniziale, creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// iniziale
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

console.log(arrayObj);

//copia
var arrayObj2 = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

for (var i = 0; i < arrayObj2.length; i++) {
   arrayObj2[i].position = randomWord();
}

console.log(arrayObj2);










// random Word

function randomWord() {
   var randomPosition = Math.floor(Math.random() * 26);
   var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   return alphabet[randomPosition];
}
