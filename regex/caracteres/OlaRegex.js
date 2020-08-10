const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'

// Com as flags g e i, g para global retornar todas as ocorrências e i para ignorar maiusculas e minusculas
const regex = /casa/gi
console.log(texto.match(regex))

const regexA = /a b/g
console.log(texto.match(regexA))

const regexB = /a c/i
console.log(texto.match(regexB))

const regexC = /a d/
console.log(texto.match(regexC))