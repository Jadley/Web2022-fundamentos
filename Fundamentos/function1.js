// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(7, 3)
imprimirSoma(7)
imprimirSoma(7, 3, 5 , 3, 2 ,5)
imprimirSoma()

// função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(9, 6))
console.log(soma(9))
console.log(soma())

