const texto = '<div>Conteúdo 01</div><div>Conteúdo 02</div>'

// Aqui temos o exemplo de um operador +, ele tem um comportamento guloso (greedy) e retorna todo o conteúdo da String
console.log(texto.match(/<div>.+<\/div>/g))

// Aqui temos o exemplo de um operador *, ele tem um comportamento guloso (greedy) e retorna todo o conteúdo da String
console.log(texto.match(/<div>.*<\/div>/g))

// Aqui temos o exemplo de um quantificador {1,100}, ele tem um comportamento guloso (greedy) e retorna todo o conteúdo da String
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// Aquite temos o exemplo de um operador + junto de um metacaractere ? que não é guloso ou (greedy)
console.log(texto.match(/<div>.+?<\/div>/g))

console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))