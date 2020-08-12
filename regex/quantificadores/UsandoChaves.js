const texto = 'O João recebeu 120 milhões apostando 6 9 21 23  45 46'

// Usamos {} para definir um quantificador de determinado padrão de busca

// Aqui estamos especificando os números como padrão de busca, que tenha 1 ou dois digitos de acordo com o quantificador {1,2}
console.log(texto.match(/\d{1,2}/g))

// Aqui estamos especificando os números mas que tenham apenas 2 digitos como quantificador
console.log(texto.match(/\d{2}/g))

// Aqui estamos especificando os números apartir de 1 quantificador até quantos mais existirem.
console.log(texto.match(/\d{1,}/g))

// Aqui estamos especificando grupos de palavras, letras ou números que contenham 7 caracteres ou mais
// Um observação a palavra milhões não aparece porque não esta dentro do grupo do shorthand \w que foi especificado.
console.log(texto.match(/\w{7}/g))

// Agora especificamos o õ como padrão de busca mais o grupo de caracteres que tenha 7 caracteres, shorthand utilizado \w
console.log(texto.match(/[\wõ]{7,}/g))

// Agora um pouco de padrão de busca com o uso de bordas - naõ teremos o 120 porque ele tem tres caracteres
console.log(texto.match(/\b\d{1,2}\b/g))

// Agora outra borda de padrão de busca onde procuramos por palavras com 7 caracteres que e que tenha o õ incluso
console.log(texto.match(/\b[\wõ]{7}\b/g))