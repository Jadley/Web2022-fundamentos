// par nome/valor
const  saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'eai' //contexto léxico 2
    return saudacao
}

// Objetos são gupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 22,
    peso: 73.2,
    endereco: {
        logradouro: 'Rua vinte e dois',
        numero: 87
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)