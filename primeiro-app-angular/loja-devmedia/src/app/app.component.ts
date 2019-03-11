import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Produto[] = [];
  title = 'Loja Devmedia - Alan Miranda';

  constructor() {
    let p = new Produto();
    p.id = 1;
    p.nome = 'Arroz';
    this.produtos.push(p);
  }
}


