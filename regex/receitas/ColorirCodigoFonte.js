const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i

// Informamos o Indice [0] porque o regex retorna no indice [0] o texto que foi extraido e nos demais indices outras informações relativos a extração.
let codigo = texto.match(codeRegex)[0]

// Vamos capturar as String do Código
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// Vamos capturar todas as palavras reservados do Java, que no caso é nosso código
codigo = aplicarCor(codigo, /\b(packge|pulic|class|static|if|else)\b/g, 'd857cf')

// Vamos capturar todas os tipos de variaveis do código Java
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

// Vamos capturar todos os comentários em Java de múltiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// Vamos capturar todos os comentários em Java de uma linha apenas
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)