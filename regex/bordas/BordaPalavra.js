const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

// Aqui estamos utilizando uma borda que começe com a palavra dia
console.log(texto1.match(/\bdia\w+/gi))

// Aqui estamos utilizando uma borda que termine com a palavra dia
console.log(texto1.match(/\w+dia\b/gi))

console.log(texto1.match(/\w+dia+\w/gi))

console.log(texto1.match(/\bdia\b/gi))

// borda é não \w, que é [^A-Za-z0-9_]... temos problemas com caracteres com acento.

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))

console.log(texto2.match(/(\S*)?dia(\S*)?/gi))

console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))