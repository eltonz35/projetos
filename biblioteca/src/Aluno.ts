
class Aluno {
    turma: string;
    numeroMatricula: number;

    constructor(turma: string, numeroMatricula: number) {
        this.turma = turma;
        this.numeroMatricula = numeroMatricula;
    }
    getTurma(): string {
        return this.turma;
    }
    setTurma(turma: string) {
        this.turma = turma;
    }

    getNumeroMatricula(): number  {
        return this.numeroMatricula;
    }
    setNumeroMatricula(numeroMatricula: number) {
        this.numeroMatricula = numeroMatricula;
    }
}