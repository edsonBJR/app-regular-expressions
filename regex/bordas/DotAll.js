const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

//Aqui estamos resolvendo o problema do dotall
console.log(texto.match(/^r.*r$/gi))

console.log(texto.match(/^r[\s\S]*r$/gi)) // aqui resolvemos o problema do dotall em Javascript, outras linguagens pode ser que existam flags para isso