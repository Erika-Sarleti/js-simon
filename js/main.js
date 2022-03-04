/*

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
// genera array random
let simonNumber;
let randomArr = [];
for (i = 0; i < 5; i++){
    simonNumber = Math.random() * (50);
    randomArr.push(parseInt(simonNumber));
}
console.log(randomArr);

// seleziona un elemento html dove passare il risultato dell'array
let stringaSimon = document.querySelector('.simon-says');
stringaSimon.innerHTML = randomArr;


//
setTimeout(none, 30000)
function none(){
    stringaSimon.style.display = 'none';
}

setTimeout(game, 30100)
function game(){
    let userArray = [];
    for (i = 0; i < 5; i++){
        const userNum = prompt('che numero?');
        userArray.push(userNum);
    }
    console.log(userArray)
    console.log(randomArr)
    let result =[];
    for (i = 0; i < 5; i++ ){
        if(userArray[i] == randomArr[i]){
            result.push(userArray[i]);
        }
    }
    const container = document.querySelector('body');
    let strRisultato = document.createElement('div');
    container.append(strRisultato);
    strRisultato.innerHTML = `numeri azzeccati: ${result }<br> risultato=${result.length}`;

}


