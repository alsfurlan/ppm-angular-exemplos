import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'botao-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  @Input('disponibilidade')
  disponivel: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
