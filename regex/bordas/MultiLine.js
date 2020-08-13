const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/g))

// Aqui estamos utilizando a flag m depois da flags global e ignore sensitive, essa flag significa multiline.
console.log(texto.match(/^(\w).+\1$/gim))