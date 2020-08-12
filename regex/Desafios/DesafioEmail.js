const texto = `Os e-mails dos convidados são:
	- fulando@cod3r.com.br
	- xico@gmail.com
	- joao@empresa.info.br
	- maria_silva@registro.br
	- rafa.sampaio@yahoo.com
`

console.log(texto.match(/\w.*@.*/g)) //  Minha Resolução do problema.

// Resolução do problema de outras maneiras

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// No futuro
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))