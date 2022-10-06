// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 22,
    endereco: {
        logradouro: 'Rua Top',
        numero: 87
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(nome, idade)

const {sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//const { conta: {agencia, num} } = pessoa
//console.log(agencia, num)