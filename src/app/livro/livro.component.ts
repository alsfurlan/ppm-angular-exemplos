import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livros/livro.interface';

@Component({
  selector: 'livro-info',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  @Input()
  livro: Livro;

  constructor() { }

  ngOnInit(): void {
  }

}
