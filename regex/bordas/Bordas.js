const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// Aqui estamos buscando todas as ocorrências da letra r dentro da string
console.log(texto.match(/r/gi))

// Aqui estamos buscando apenas a letra r no início da string
console.log(texto.match(/^r/gi)) // acento ^ fora do conjunto ou grupo quer dizer início da linha ou string

// Aqui estamos buscando apenas a letra r que está no final da string
console.log(texto.match(/r$/gi)) // $ carectere usado para procurar no fim da linha ou da String

//Aqui estamos resolvendo o problema do dotall