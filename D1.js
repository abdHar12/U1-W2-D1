/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// 1. String: Una frase, una parola o qualsiasi tipo che non sia finalizzato ad essere un numero o un boolean. Si riconoscono le stringhe perche si trovano tra "", ''.
// 2. Number: Un qualsiasi numero, sia con la virgola che senza. Attenzione non vanno messi tra "", ''
// 4. Boolean: Può essere true o false. L'equivalente dell'acceso/spento oppure dello 0/1 servono a far prendere delle decisioni al nostro codice.
// 5. Undefined: Una variabile che non ha un valore assegnato. Solitamente viene fuori nella console quando logghiamo una variabile a cui non abbiamo dato nessun valore
// 6. Null: Possiamo attribuire questo valore a qualsiasi datatype. Indica l'assenza intenzionale di un oggetto all'interno di una variabile. Nei bool dichiarare che una variabile è null significa che è false
// 7. Symbol: Symbol è un tipo primitivo per definire identificatori univoci. I symbol vengono creati con una chiamata a Symbol()

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Abderrahmane";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 20;
let somma = a + b;
console.log("Esercizio 3: ");
console.log("La somma: ", a, " + ", b, " = ", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5: ");
console.log("Il valore prima della riassegnazione e': ", name);
name = "Harouane";
console.log("Il valore dopo della riassegnazione e': ", name);
const esempio = 5;
console.log("Il valore della costante e': ", esempio);
// console.log(
//   "Dopo aver provato a cambiare il valore della costante, vediamo con l'errore seguente che non è possibile"
// );
//esempio = 10;

/* ESERCIZIO 6
  Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12). 
  */

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6: ");
let ris = 4 - x;
console.log("Il risultato dell' operazione 4 - ", x, " e': ", ris);

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function myFunc(difference) {
  if (difference === true) {
    console.log("I due nomi sono diversi");
  } else {
    console.log("I due nomi sono uguali");
  }
}
console.log("Esercizio 7: ");
let name1 = "john";
let name2 = "John";
let verifyDifference = name1 !== name2;
myFunc(verifyDifference);
name2 = name2.toLowerCase();
verifyDifference = name1 !== name2;
console.log("DOPO AVER APPLICATO IL METODO PER RENDERE ANCHE NAME2 LOWERCASE:");
myFunc(verifyDifference);
