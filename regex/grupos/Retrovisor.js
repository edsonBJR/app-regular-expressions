// Retrovisor é uma forma de referênciar o que foi armazenado em determinado grupo

const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>'

// Aqui temos o uso do retrovisor, primeiro informamos um grupo a ser buscado e reutilizamos esses grupo por referência informando seu número, como \1.
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'

// Aqui estamos utilizando o retrovisor para buscar pelo padrão informado nos grupos anteriores.
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

// Aqui estamos fazendo com que o grupo 1 não fique gravado, com isso o grupo 2 será agora o grupo 1 e pode ser acessado pelo retrovisor \1
// O ?: dentro do grupo faz com que o valor do grupo não seja guardado
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

// Aqui estamos buscando dois grupos sendo que o segundo é opcional isso faz com que ele retorne a palavra lenta depois de retornar lentamente
console.log(texto2.match(/(lenta)(mente)?/gi))

// Aqui estamos buscando dois grupos e substituindo pelo conteúdo do retrovisor número 2
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))


// Aqui estamos buscando 12 grupos e como temos 13 caracteres na string estamos utilizando o retrovisor do elemente número 12
const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))