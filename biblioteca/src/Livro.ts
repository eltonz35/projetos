
class Livro {
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;
    qntExemplaresDisponiveis: number;
    constructor(id: number, titulo: string, autor: string,
        anoPublicacao: number, genero: string, qntExemplaresDisponiveis: number) {
            this.id = id;
            this.titulo = titulo;
            this.autor = autor;
            this.anoPublicacao = anoPublicacao;
            this.genero = genero;
            this.qntExemplaresDisponiveis = qntExemplaresDisponiveis;
        }
    getId(): number {
        return this.id;
    }    
    setId(id: number) {
        this.id = id;
    }

    getTitulo(): string {
        return this.titulo;
    }
    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    getAutor(): string {
        return this.autor;
    }
    setAutor(autor: string) {
        this.autor = autor;
    }

    getAnoPublicacao(): number {
        return this.anoPublicacao;
    }
    setAnoPublicacao(anoPublicacao: number) {
        this.anoPublicacao = anoPublicacao;
    }

    getGenero(): string {
        return this.genero;
    }
    setGenero(genero: string) {
        this.genero = genero;
    }

    getQntExemplaresDisponiveis(): number {
        return this.qntExemplaresDisponiveis;
    }
    setQntExemplaresDisponiveis(qntExemplaresDisponiveis: number) {
        this.qntExemplaresDisponiveis = qntExemplaresDisponiveis;
    }
}