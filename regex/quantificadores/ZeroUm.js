const texto1 = 'De longe eu avistei o fogo  e uma pessoa gritando: FOGOOOOO0!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (Opcional)
const regex = /fogo?/gi

// Aqui podemos ter uma ou zero ocorrencias do caractere que está logo a esquerda do metacaractere ?, um tipo de quantificador
console.log(texto1.match(regex))
console.log(texto2.match(regex))