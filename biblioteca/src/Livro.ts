
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

        

}