let amigo = {
    nome: 'Ari',
    idade: 33,
    aniversário(a){
        console.log('Fez aniversário!')
        this.idade += a
    }
}

amigo.aniversário(1)
console.log(`${amigo.nome} fez aniversário e tem ${amigo.idade}`)
