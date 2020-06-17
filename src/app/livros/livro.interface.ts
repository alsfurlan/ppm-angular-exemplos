export interface Livro {
    titulo: string;
    autores: Autor[];
    disponivel: boolean;
}

interface Autor {
    nome: string;
}