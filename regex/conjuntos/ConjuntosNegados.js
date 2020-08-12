const texto = '1,2,3,a.b c!d?e[f'

// Aqui temos um shorthand - \D  - que retorna tudo que não é númerico
console.log(texto.match(/\D/g))

// Aqui temos um conjunto negado com o ^ que tem o mesmo efeito do shorthand \D
console.log(texto.match(/[^0-9]/g))

// Aqui temos um conjunto negado com o ^ que não retornará os numeros \d, !, \?, \[, s para espaço em branco, e o ponto literal \.
console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

// Aqui temos um conjunto negado que inclui do ! até a / e do : até @, e também inclui os espaços em branco.
console.log(texto2.match(/[^!-/:-@\s]/g))

// Aqui temos apenas os números retornados.
console.log(texto2.match(/\d/g))