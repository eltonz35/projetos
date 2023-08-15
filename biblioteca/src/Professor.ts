
class Professor {
    alunos: string;

    constructor(alunos: string) {
        this.alunos = alunos;
    }
    getAlunos(): string {
        return this.alunos;
    }
    setAluno(alunos: string) {
        this.alunos = alunos;
    }
}