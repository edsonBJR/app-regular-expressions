const texto = 'supermercado hipermercado minimercado mercado'

console.log(texto.match(/(super|hiper|mini)?mercado/g))

// Aqui temos o uso de Grupos Aninhados o que pode facilitar na hora de buscar por padrões que se repentem dentro do grupo
console.log(texto.match(/((su|hi)per|mini)?mercado/g))