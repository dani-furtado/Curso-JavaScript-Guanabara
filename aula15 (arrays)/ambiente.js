let num = [5, 8, 2, 9, 3]
num.sort() //vai ordenar os elementos
num.push(1) //vai adicionar o valor 1 no vetor, porém somente depois de ordenar. a ordem importa. 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) //mostra a posição do vetor
if (pos == -1){ //-1 é quando não encontra o valor
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}