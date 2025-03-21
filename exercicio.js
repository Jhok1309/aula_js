function Alunos(nome,nota){
    this.nome = nome
    this.nota = nota
}

const aluno1 = new Alunos("Jhonathan",3)
const aluno2 = new Alunos("Aline",7)

var alunos = []

alunos.push(aluno1,aluno2)

console.log(alunos)

