// Metacaracteres dentro de um conjunto se comportam de maneira literal de modo que não precisa utilizar o escape \.

const texto = '.$+*?-'
console.log(texto.match(/[.]/g))
console.log(texto.match(/[+.?*$]./g))

// Agora trabalhando com um intervalo válido
console.log(texto.match(/[$-?]/g))

// Não é um intervalo
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// Metacaracteres que podem precisar de um escape dentro do conjunto: - [ ] ^