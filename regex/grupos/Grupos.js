const texto = 'O José simão é muito engraçado... hehehehehe'

// Aqui estamos usando um grupo com um padrão e junto temos o quantificador + para que buscamos o total do padrão informando no grupo
console.log(texto.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

// Aqui estamos utilizando um grupo para buscar padrões de URL, que pode ter http://, www., ou apenas dominio.alguma coisa na URL
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))