const texto = 'ABC [abc] a-c 1234'

// Aqui temos um intervalo dentro de um conjunto
console.log(texto.match(/[a-c]/g))

// Aqui não temos um conjunto, temos apenas um padrão de expressão regular que queremos buscar.
console.log(texto.match(/a-c/g))

// Aqui temos um intervalo que vai do A até o z dentro da tabela UNICODE, que retorna pra nós os [ ] que estão dentro do range
console.log(texto.match(/[A-z]/g))

// Aqui não estamos repeitando a ordem da tabela UNICODE por isso temos um erro na expressão regular
// Mensagem de erro do Javascript: " Invalid regular expression: /[a-Z]/: Range out of order in character class "
//console.log(texto.match(/[a-Z]/g))

// O mesmo acontece com o números
//console.log(texto.match(/[4-1]/g))

// Para termos somente as letras e não os símbolos
console.log(texto.match(/[a-zA-Z]/g))