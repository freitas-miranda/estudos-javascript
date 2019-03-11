import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-por-especialidade',
  templateUrl: './consulta-por-especialidade.component.html',
  styleUrls: ['./consulta-por-especialidade.component.css']
})
export class ConsultaPorEspecialidadeComponent implements OnInit {

  @Input() consultas;
  @Input() titulo;
  @Input() erro;

  constructor() { }

  ngOnInit() {
  }

}
