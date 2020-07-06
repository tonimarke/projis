import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estagiario-form',
  templateUrl: './estagiario-form.component.html',
  styleUrls: ['./estagiario-form.component.scss']
})
export class EstagiarioFormComponent implements OnInit {

  titulo : string = 'Novo Estagiário'

  estagiario : any = {} // objeto vazio

  constructor() { }

  ngOnInit(): void {
  }

}
