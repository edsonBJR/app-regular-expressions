// . é um caractere Coringa apenas para um caractere dentro da expressão

const texto = '1,2,3,4,5,6,7,8,9,0'

// Aqui estamos utilizando o ponto como caracter coringa para encontrar o 1 e o 2 dentro da string
// Nesse caso ele encontra porque entre o 1 e o 2 temos uma virgula, e confirma o padrão de qualquer caractere
// Não funciona quando tem mais de um caractere dentro do padrão procurado.
console.log(texto.match(/1.2/g))

// Nesse caso não encontrar nada porque não existe nenhuma parte do texto que tenha dois caracteres entre o 1 e o 2
console.log(texto.match(/1..2/g))

// Nesse caso ele encontra o padrão informando porque temos a virgula e o caractere 2 dentro do padrão informado
console.log(texto.match(/1..,/g))

// O ponto informado como caractere coringa tambem encontra o literal do ponto dentro de um padrão
const notas = '8.3,7.3,8.8,10.0'
console.log(notas.match(/8../g))

// Nesse caso estamos procurando por qualquer caractere, um ponto literal e qualquer caractere na sequência
// Note que ele não retorno a nota 10, porque fica fora do padrão já que estamos passando apenas um caractere antes
// e outro depois do ponto literal
console.log(notas.match(/.\../g))