//Encontrar quantas ocorrencias de .mp3 temos dentro da String
const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'


// Aqui procuramos por ocorrências que tenha o literal . junto com a string mp3
// e não utilizamos o ponto como metacaractere e sim como literal graças ao "\", "escape"
console.log(texto.match(/\.mp3/g))

// No futuro...
// Aqui passamos um padrão como w e o sinal de + onde conseguimos encontrar o .mp3 e a string que vem antes dele
// o que nos dá um resultado melhor sobre quais os arquivos temos em nossa lista de arquivos.
console.log(texto.match(/\w+\.mp3/g))