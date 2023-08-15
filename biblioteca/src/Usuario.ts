
class Usuario {
    nome: string;
    id: number;
    
    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }
    getNome(): string {
        return this.nome;
    }
    setNome(nome: string) {
        this.nome = nome;
    }
    getId(): number {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
}