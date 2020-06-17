import { Injectable } from '@angular/core';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[];

  constructor() {
    this.livros = [
      {
        titulo: 'JavaScript: O guia definitivo',
        autores: [
          { nome: 'David Flanagan'}
        ],
        disponivel: true
      },
      {
        titulo: 'O melhor do JavaScript',
        autores: [
          { nome: 'Douglas Cockford' },
          { nome: 'David Flanagan'}
        ],
        disponivel: true
      },
      {
        titulo: 'JavaScript Design Patterns',
        autores: [
          { nome: 'Addy Osmani' }
        ],
        disponivel: false
      }
    ];
  }

  getLivros() {
    return this.livros;
  }

}
