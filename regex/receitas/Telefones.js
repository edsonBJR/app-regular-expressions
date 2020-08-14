const texto = `
Lista Telefônica:
	- (21) 12345-6789
	- (11) 62300-2234
	- 5684-2345
	- (85)3333-4444
	- (1) 4321-1234 
`
    // Aqui estamos procurando por telefones no
    // Primeiro precisamos buscar o dd - Regex para essa busca --> /(\(\d{2}\)\s?)?/g
    // Depois precisamos buscar o segundo grupo de números - Regex para essa busca --> /\d{4,5}/g
    // Por ultimo precisamos buscar pelo ultimo grupo de números - Regex para essa busca --> -\d{4}

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))