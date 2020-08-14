const texto = '0 1 10 99 192 199 201 249 255 256 312 1010 1512'

// Criar uma regex que busque por números entre 0 e 255
// Para esse tipo de busca vamos difinir bordas com \b no inicio e \b no final
// Para buscar grupos com 1 caracte de 0 a 99--> \d{1,2}
// Para buscar grupos com 2 caracteres de 100 a 199 --> 1\d{2}
// Para buscar grupos com 3 caracteres de 200 a 249 --> 2[0-4]\d
// Para buscar grupos com 3 caracteres de 250 a 255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))