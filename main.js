function Pessoa (nome,idade){
    this.nome=nome;
    this.idade=idade;  
}

const p = new Pessoa('afonso',30);
const y = new Pessoa('Abner',50)

console.log(p,y)


function Carro(ano,modelo,cor,valor,popular){
    this.ano= ano
    this.modelo = modelo
    this.cor = cor
    this.valor = valor
    this.popular = Boolean(popular)
}

const c = new Carro(2006,"Astra",'preto,',12000,false)

console.log(c)

var lista = ["afonso","cezinha","Aline","Tanakão"]

console.log(lista)
console.log(lista[0])

lista.push("felipe")
console.log(lista)

lista.pop()

console.log(lista.length)

test = [
    {nome:"Afonso",idade:31},
    {nome:"Teste",idade:30}
]