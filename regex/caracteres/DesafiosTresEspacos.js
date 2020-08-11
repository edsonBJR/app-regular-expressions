// Encontrar uma padrão que contenha três espaços em branco
const texto = 'a   b'

console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))

// No futuro
// Nesse caso utilizamos o metacaractere + para informar encontre o padrão de espaços em brando dentro da string
// independente da quantidade de espaços em branco que exista dentro da String
console.log(texto.match(/a\s+b/))

// Aqui estamos especificando que o padrão dentro da String é espaços em branco junto com o quantificador {3}, 
// abrir chaves colocar um numero inteiro e fechar chaves, estamos informando um quantificador que irá determinar
// a quantidade do padrão a procurar que informamos antes.
console.log(texto.match(/a {3}b/))

// Aqui temos especificado do padrão "\s" com o quantificador "{3}"
console.log(texto.match(/a\s{3}b/))