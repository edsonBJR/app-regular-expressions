const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'
    // Aqui selecionamos padrões com acento, isso porque o shorthand \w não busca na tabela UNICODE os caracteres com acento.
console.log(texto.match(/[Á-ü]/g))