const texto = 'Pedrinho (filho de Pedro Silva) é doutor do ABC!'

// Dentro de um conjunto o grupo não existe
console.log(texto.match(/[(abc)]/gi))
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)/gi))