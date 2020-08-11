const texto = 'Você precisa responder sim, não ou não sei!'

// Uso do PIPE para buscar na String um padrão ou outro padrão
console.log(texto.match(/sim|não|sei/g))
console.log(texto.match(/sim|não|não sei/g))
console.log(texto.match(/sim|não sei|não/g))