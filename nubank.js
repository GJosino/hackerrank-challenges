// Lista de Débitos
let debts = ["Alex Blake 2", "Blake Alex 2", "Casey Alex 5", "Blake Casey 7", "Alex Blake 4", "Alex Casey 4"];

let lista = [];
//Lista de débitos (array dentro de array separados por espaço)
for(let i = 0; i < debts.length; i++) {
    lista.push(debts[i].split(" "))
}
console.log(lista);

//Criação de lista de usuários
let novalista = {};
//Criação de lista de números
let numeros = [];
for(let i = 0; i < lista.length; i++) {
    for(let j = 0; j < 2; j++) {
        if(novalista[lista[i][j]] == undefined) {
        novalista[lista[i][j]] = 0
        }
    }
    numeros.push(parseInt(lista[i][2]))
}
// Operação financeira sobre os usuários através dos números
for(let i = 0; i < lista.length; i++) {
        novalista[lista[i][0]] = novalista[lista[i][0]]  - numeros[i]
        novalista[lista[i][1]] = novalista[lista[i][1]]  + numeros[i]
}


//Criação de lista de resultados
let novonumeros = []

for(i in novalista) {
    console.log(novalista[i])
    novonumeros.push(novalista[i])
}
//Verificação do menor número dos resultados
let menornumero = Math.min(...novonumeros)

//Criação da lista de usuários com menores números
let menorlista = []
for(i in novalista) {
    if(novalista[i] <= menornumero) {
        menorlista.push(i)
    }
}

console.log(novalista)
console.log(numeros)
console.log(novonumeros)
console.log(menornumero)
console.log(menorlista)