// JS 2
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var listaBici =
  [
   {   //bici 1
      "nome" : 'bici1',
      "peso" : 8
   },
   {   //bici 2
      "nome" : 'bici4',
      "peso" : 4
   },
   {   //bici 3
      "nome" : 'bici2',
      "peso" : 9
   },
   {   //bici 4
      "nome" : 'bici3',
      "peso" : 12
   },
   {   //bici 5
      "nome" : 'bici5',
      "peso" : 5
   }
];

var menoPesante = listaBici[0];
for (var i = 0; i < listaBici.length; i++) {
   if (menoPesante.peso > listaBici[i].peso) {
      menoPesante = listaBici[i];
   }
}

console.log("La bici meno pesante è: " , menoPesante);
