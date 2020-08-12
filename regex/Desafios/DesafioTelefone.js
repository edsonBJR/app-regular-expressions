const texto = `Lista  telefônica:
	- (11) 98765-1212
	-98765-4321 
	-34693695
	-3198108-6023
	-(41)12340987...`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-?\d{4}/g))