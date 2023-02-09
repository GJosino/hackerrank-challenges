let arr = [5, 5, 5 ,5 ,5]



let maior = Math.max(...arr)
let menor = Math.min(...arr)

let somaMinima = 0
let somaMaxima = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < maior) {
        somaMinima = somaMinima + arr[i]
    }
    if (arr[i] > menor) {
        somaMaxima = somaMaxima + arr[i]
    }
    if(maior == menor) {
        somaMaxima = somaMaxima + arr[i]
        somaMinima = somaMinima + arr[i]

    }
}
console.log(somaMinima, somaMaxima)
