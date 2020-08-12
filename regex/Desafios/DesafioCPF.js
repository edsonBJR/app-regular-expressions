const texto = `CPF dos aprovados:
	- 600.567.890-12
	- 765.998.345-23 
	- 068.890.606-01
	- 048.282.126-47...`

console.log(texto.match(/\b\d{0,14}.*[^A-Za-z\n\t\s\.:-]/g))
console.log(texto.match(/\d{3}.\d{3}.\d{3}-\d{2}/g))