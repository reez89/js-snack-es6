/*Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10, Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. */


// let oggetto = {
//      name : "palla",
//      peso : 10
//  }

//  oggetto.peso = Number(prompt("Inserisci un valore di peso"));
//  console.log(oggetto);

/*Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.*/


// let biciDaCorsa = [
//     {
//         nome : "bici rossa",
//         peso : 10
//     },
//     {
//         nome : "bici fucsia",
//         peso: 8
//     },
//     {
//         nome : "bici blu",
//         peso: 15
//     },
//     {
//         nome : "bici arancione",
//         peso: 25
//     }
// ];

// let pesoProva = biciDaCorsa[0].peso;
// let pesoMinore = biciDaCorsa.filter (item => item.peso < pesoProva);

// console.log(pesoMinore);

/*Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza. Calcolare perimetro e area*/

// let triangolo = {
//     base : 5,
//     altezza : 3
// }

// let area = () => ((triangolo.base * triangolo.altezza) / 2);
// let quadratoCateti = () => (Math.pow(triangolo.base,2) + Math.pow(triangolo.altezza,2));
// let ipotenusa = () => Math.floor(Math.sqrt(quadratoCateti()));
// let perimetro = () => (ipotenusa() + triangolo.base + triangolo.altezza);

// triangolo.area = area();
// triangolo.perimetro = perimetro();

// console.log(triangolo);

/* Scrivi una funzione che fonda due array (con lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

// const letters = ["d","f","g","h","l"];
// const numbers = [1,2,3,4,5];

// const fusion = letters.flatMap((element,i) => {
//     return [element, numbers[i]];
// });


// console.log(fusion);

/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

// function myFunction(array,a,b) {
//     return array.filter((element, x) => x>=0 && x >= a && x <=b);
// }

// let newStorage = ["cars", "bike",2,"mobile","websites","calendar", "days"];

// let range = myFunction(newStorage, 0, 10);
// console.log(range);
