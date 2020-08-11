// Conjuntos ou Classes de Caracteres

const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Para definir uma classe (ou um Conjunto) de caracteres usa o []

// Aqui estamos utilizando um conjunto de números pares como padrão para busca
// nesse caso ele retorna os pares que encontrar em toda a string por causa da flag g.
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

// Aqui estamos procurando pelo conjunto do a e a com ~.
const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]./g
console.log(texto2.match(regexComESemAcento))