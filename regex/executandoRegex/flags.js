// Flags do Mundo Regex
// g - global - procurar por todas as letras informandas em um texto, por exemplo.
// i - ignore case - ignora se a letra é maiúscula ou minúscula

const texto = 'Carlos assinou o abaixo-assinado.';
// Exemplo abaixo sem o uso de flags
console.log(texto.match(/C|ab/));
// Exemplo abaixo utilizando a flag i que ignora as letras maiúsculas e minúsculas
console.log(texto.match(/c|ab/i));
// Exemplo abaixo utilizando as flags g e i juntas
console.log(texto.match(/c|ab/gi));