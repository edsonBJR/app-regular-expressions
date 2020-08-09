const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'


const regexNove = RegExp('9')
console.log('Metodo da RegExp...')

// Metodo .test() - utilizado para retornar true or false sobre a existência de um padrão de regex procurado.
console.log(regexNove.test(texto))

// Método .exec() - utilizado para executar a expressão regular dentro do texto e retornar a expressão, possiçao e qual foi a entrada de dados
console.log(regexNove.exec(texto))

// Agora utilizando texto como padrão para a expressão regular

const regexLetras = /[a-f]/g
console.log('Métodos da String...')

// Método utilizado na string é o .match() que recebe como parametro o padrão da expressão regular a ser buscado
console.log(texto.match(regexLetras))

// Método utilizado é o .search() que indica o primeiro indice onde começa o padrão informado na expressão regular
console.log(texto.search(regexLetras))

// Método utilizado é o .replace() que substitui o tudo que foi informado conforme o padrão passado na expressão regular, pelo que deve ser substituido
console.log(texto.replace(regexLetras, 'Achei'))

// Método utilizado é o .split() que separa o que foi passado no padrão do regex criando um array com os elementos.
console.log(texto.split(regexLetras))