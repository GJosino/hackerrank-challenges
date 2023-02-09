let nums = [1, 2, 3, 4, 3, 2, 1]

function lonely(a) {
    let numeros = a
    let lista = {}

for(i = 0; i < numeros.length; i++){

    if(lista[numeros[i]] == undefined) {
        lista[numeros[i]] = 1
    } else {
        lista[numeros[i]]++
    }


}
for (let i in lista) {
    if(lista[i] == 1) {
        return i
    }
}
}

console.log(lonely(nums))