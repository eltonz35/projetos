
class Emprestimo {
    id: number;
    livro: string;
    usuario: string;
    dataEmprestimo: number;
    dataDevolucao: number;

    constructor(id: number, livro: string, usuario: string,
        dataEmprestimo: number, dataDevoucao: number) {
            this.id = id;
            this.livro = livro;
            this.usuario = usuario;
            this.dataEmprestimo = dataEmprestimo;
            this.dataDevolucao = dataDevoucao;
    }
    getId(): number {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
    
    getLivro(): string {
        return this.livro;
    }
    setLivro(livro: string) {
        this.livro = livro;
    }

    getUsuario(): string {
        return this.usuario;
    }
    setUsuario(usuario: string) {
        this.usuario = usuario;
    }

    getDataEmprestimo(): number {
        return this.dataEmprestimo;
    }
    setDataEmprestimo(dataEmprestimo: number) {
        this.dataEmprestimo = dataEmprestimo;
    }

    getDataDevolucao(): number {
        return this.dataDevolucao;
    }
    setDataDevolucao(dataDevolucao: number) {
        this.dataDevolucao = dataDevolucao;
    }
}