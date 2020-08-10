const textoUmaLinha = '...' // pode ser delimitado com aspas simples ou aspas duplas.

const textoMultiplasLinha = `
    linha1
    linha2
`

// cuidado com o tab! -  a IDE deve está configurada para os tabs gerarem o espaço.
console.log('   '.match(/\s/g))
console.log(''.match(/\s/g))
console.log('	'.match(/\s/g))