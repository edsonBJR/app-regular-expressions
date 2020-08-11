// Alguns Metacaracteres
// . ? * + - ^ $ | [ ] { } ( ) \ :
// Para buscar os metacaracteres dentro de uma String o caractere "\" ou "escape" deve ser utilizado antes de informar qual meta caractere será buscado
const texto = '1,2,3,4,5,6,a.b c!d?e'

// Expressão regular para encontrar pontos dentro de uma String
const regexPonto = /\./g

// Aqui o método split utilizou a expressão regular definida na const regexPonto para separa a string quando o ponto for encontrado.
console.log(texto.split(regexPonto))

// Expressão regular para encontrar metacaracteres dentro de um String, necessário incluir o \ "escape" quando o padrão a ser buscado for um metacaracter.
const regexSimbolos = /,|\.|\?|!| /g

// Aqui o método split utilizou o padrão de expressão regular definido para quebrar a string 
console.log(texto.split(regexSimbolos))