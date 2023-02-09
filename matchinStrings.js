let strings = ['ab', 'ab', 'abc']
let queries = ['ab', 'abc', 'bc']

function matchingStrings(strings, queries) {
    let resultado = []

    let contador = [];
    for (let i = 0; i < queries.length; i++) {
        for(let j = 0; j < strings.length; j++) {
            if(strings[j] == queries[i]) {
                contador.push(strings[j])
            }
        }
        resultado.push(contador.length)
        contador = []
    }
    console.log(contador)
    return resultado
}

console.log(matchingStrings(strings, queries))