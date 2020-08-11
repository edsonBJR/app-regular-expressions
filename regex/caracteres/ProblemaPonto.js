// Aqui temos o caso onde o metacaracter . não consegui resolver o \n que é a quebra de linha - dotall
const texto = 'Bom\ndia'
console.log(texto.match(/./g))
console.log(texto.match(/.../g))
console.log(texto.match(/..../g))

// dotall - algumas linguagens tem uma flag /expressão/s, mas o Javascritp não tem, o problema é resolvido de outra forma.