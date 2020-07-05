import { Component, OnInit } from '@angular/core';
import { EstagiarioService } from './../estagiario.service';


@Component({
  selector: 'app-estagiario-list',
  templateUrl: './estagiario-list.component.html',
  styleUrls: ['./estagiario-list.component.scss']
})
export class EstagiarioListComponent implements OnInit {

  estagiarios : any = []
  displayedColumns: any = ['nome', 'cpf', 'enderecos', 'telefones','inicio_vinculo', 'fim_vinculo','excluir']

  constructor(private estagiarioSrv: EstagiarioService) {}

  async ngOnInit(){
    this.estagiarios = await this.estagiarioSrv.listar()
    console.log(this.estagiarios)
  }
}