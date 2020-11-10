// JS 3
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre =
  [
   {   //bici 1
      "nome" : 'Atalanta',
      "punti fatti" : 0,
      "falli subiti" : 0
   },
   {   //bici 2
      "nome" : 'Benevento',
      "punti fatti" : 0,
      "falli subiti" : 0
   },
   {   //bici 3
      "nome" : 'Bologna',
      "punti fatti" : 0,
      "falli subiti" : 0
   },
   {   //bici 4
      "nome" : 'Cagliari',
      "punti fatti" : 0,
      "falli subiti" : 0
   },
   {   //bici 5
      "nome" : 'Inter',
      "punti fatti" : 0,
      "falli subiti" : 0
   }
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
// consegna 12.25
for (var i = 0; i < squadre.length; i++) {
   squadre[i]["punti fatti"] = randomNum(10);
   squadre[i]["falli subiti"] = randomNum(10);
}

console.log(squadre);


// random Num
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max);
} else { //sennò 0
      return 0;
   }
}
