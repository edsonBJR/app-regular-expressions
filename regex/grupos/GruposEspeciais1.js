const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Aqui temos o uso do Positive lookahead
// O sinal do ?= dentro do conjunto quer dizer que tenha uma virgula logo após o fim da palavra
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

// Aqui temos o uso do Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) // --> A borda considera os caracteres acentuados como sendo uma borda, por isso essa expressão não retorna o é

console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))