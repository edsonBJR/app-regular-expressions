const texto = `
ca	r
r	o s!
`
    // Aqui temos uma String que tem quebra de linhas, tabulaçoes e espaços em branco
    // com metacaractres como \t buscamos por tabulações, \n buscamos por quebra de linhas e \s buscamos por espaços em branco
console.log(texto.match(/ca\tr\nr\to\ss!/))