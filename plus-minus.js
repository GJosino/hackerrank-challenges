let numeros = [1 , 2 , -3, -4, 0, 6]


function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let neutro = 0;

    for(i = 0; i < numeros.length; i++) {
        if(numeros[i] > 0) {
            positivo++
        } else if(numeros[i] < 0) {
            negativo++
        } else {
            neutro++
        }
    }
    console.log(positivo/ numeros.length)
    console.log(negativo/ numeros.length)
    console.log(neutro/ numeros.length)
}

plusMinus(numeros)