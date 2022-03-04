/*
- Visualizzare in pagina 5 numeri casuali.{
    - genero un array per i numeri casuali
    - genero un ciclo da 1 a 5
    - ad ogni giro del ciclo Math.random() * (max - min) + min;
    - ad ogni ciclo, aggiungo il numero random all'array
}
- Attiva il timer di 30 secondi
- quando il timer arriva a zero, nascondi i numeri E chiedi i 5 numeri in ordine tramite un prompt{
    - nascondi i numeri
    - crea un array con i numeri che l'utente inserisce
    - crea la variabile prompt (x5)
    - aggiungi ogni numero all'array
}
- confronta gli array{
    - crea risultato
    - for ( i=0; i < array.length; i++){
        if (array1[i] == array2[i])
            push.risultato(array1[i])
        }
    - console.log(risultato)
    - console.log(risultato.length)
}
 
*/

let simonNumber;
let randomArr = [];
for (i = 0; i < 5; i++){
    simonNumber = Math.random() * (50);
    randomArr.push(parseInt(simonNumber));
}
console.log(randomArr);
let stringaSimon = document.createElement('div');
document.innerHTML='ciao';


