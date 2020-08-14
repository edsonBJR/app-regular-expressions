const texto = `
Inválidos: 
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`

// Em primeiro lugar criamos a constante que irá receber nossa expressao regular com o padrão de cada octeto de ipv4
const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])'

// Agora passamos essa constante para a função RegExp que irá buscar pelo padrão dentro de cada octeto
const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')

// Agora vamos procurar pelos ip's v4 que se encaixam no padrão com a função .match
console.log(texto.match(ipv4))