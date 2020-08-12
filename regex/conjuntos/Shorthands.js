// Atalhos para conjuntos de caracteres e números

const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

// Aqui estamos utilizando o shorthand - \d - para retornar todos os números -> Conjunto de [0-9]
console.log(texto.match(/\d/g))

// Aqui estamos utilizando o shorthand - \D \ - para retornar todo caractere que não é número -> Conjunto Negado [^0-9]
console.log(texto.match(/\D/g))

// Aqui estamos utilizando o shorthand - \w -  para retornar todos os caracteres inclusive _ "underline" -> Conjunto [A-Zz-Z0-9_]
console.log(texto.match(/\w/g))

// Aqui estamos utlizando o shorthand - \W - para retornar todos os caracteres diferentes desse conjunto -> [^A-Za-Z0-9_]
console.log(texto.match(/\W/g))

// Aqui estamos utilizando o shorthand - \s - para retornar todos os espaços em branco , o que inclui espaços, tabulações. quebra de linhas, \r "o famoso retorno de carro", \f forme feed.
console.log(texto.match(/\s/g))

// Aqui estamos utilizando o shorthand - \S - para retornar o que não for espaço em branco.
console.log(texto.match(/\S/g))