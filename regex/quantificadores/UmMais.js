const texto1 = 'De longe eu avistei o fogo  e uma pessoa gritando: FOGOOOOO0!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi

// Aqui podemos ter uma ou mais ocorrencias do caractere que está logo a esquerda do metacaractere ?, um tipo de quantificador
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789'

// Aqui temos um conjunto de 0 a 9 como padrão de busca que também poderiamos utilizar o shorthand \d
console.log(texto3.match(/[0-9]/g))

// Aqui temos um conjunto de 0 a 9 com um quantificador que determinar uma ou mais ocorrencias após o conjunto especificado
console.log(texto3.match(/[0-9]+/g))

// Abaixo o mesmo resultado
console.log(texto3.match(/\d+/g))