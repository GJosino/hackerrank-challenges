let matriz = new Array(3)

matriz[0] = [11, 2, 4]
matriz[1] = [4, 5, 6]
matriz[2] = [10, 8, -12]

let tamanhoMatriz = matriz.length
let somaEsquerda = 0;
let somaDireita = 0;


for(let i = 0; i < tamanhoMatriz; i++) {
    for(let j = 0; j < tamanhoMatriz; j++) {
        if(i == j) {
            somaEsquerda = somaEsquerda + matriz[i][j]
        }
    }
}
let j = tamanhoMatriz - 1
for(let i = 0; i < tamanhoMatriz; i++) {
    somaDireita = somaDireita + matriz[i][j]
    j--
}

console.log(somaEsquerda, somaDireita)
let diferenca = Math.abs(somaEsquerda - somaDireita)
console.log(diferenca)
