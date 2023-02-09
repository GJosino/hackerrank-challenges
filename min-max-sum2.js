let arr = [1, 3, 5, 7, 9]



let maior = Math.max(...arr)
let menor = Math.min(...arr)

let soma = 0;

for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i]   
}

let somaMaxima = soma - menor
let somaMinima = soma - maior
console.log(somaMinima, somaMaxima)
