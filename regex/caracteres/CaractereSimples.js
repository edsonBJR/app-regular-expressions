const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
    // Vai quebar o texto passando o padrão de expressão regular passado e colocando dentro de um array
console.log(texto.split(regexVirgula))

// Vai mostrar a primeira ocorrencia do padrão de expressão regular passado
console.log(texto.match(regexVirgula))

console.log(texto.match(/,/g))
console.log(texto.match(/A/))

// Com a flag i ele não faz distinção de Maiusculas e Minusculas
console.log(texto.match(/A/gi))

console.log(texto.match(/2/g))
console.log(texto.match(/b c!d/))