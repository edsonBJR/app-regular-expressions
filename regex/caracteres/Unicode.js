// No ínicio o mapeamento dos caracteres era mais limitado
// Um byte (8bits) - 256 Caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Depois passamos a mapear com Dois Bytes (16bits) - mais de 65500 caracteres
// Agora maepamos mais Símbolos, Pontuação, A-Z, a-z, 0-9

// O Unicode
// Aceita uma Quantidade de Bytes Variável e é Expansível
// Suporta mais de 1 Milhão de Caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos na tabela UNICODE

// Endereço da tabela UNICODE - https://unicode-table.com/pt

const texto = 'aʬc௵d'

// Aqui estamos utilizando o \u como padrão para buscar um determinado codigo UNICODE dentro da nossa String
console.log(texto.match(/\u02AC|\u0BF5/g))