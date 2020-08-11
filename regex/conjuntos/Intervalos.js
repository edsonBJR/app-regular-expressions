const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Aqui trabalhamos com conjuntos como padrão e alguns intervalos, a-z, b-d, 2-4 e A-Z1-3.
console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[b-d]/g))
console.log(texto.match(/[2-4]/g))
console.log(texto.match(/[A-Z1-3]/gi))