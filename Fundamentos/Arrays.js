const valores  = [6.5, 3.3, 34.5, 1.2]
console.log(valores[0], valores[2])

valores[4] = 77
console.log(valores)
console.log(valores.length)

//array é heterogenio e aceita varios tipos de dados.
valores.push({id: 3}, false, null, 'test')
console.log(valores)

//remoção de valores em array

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)


