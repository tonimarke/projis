import { AcaoService } from './../acao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-acao-list',
  templateUrl: './acao-list.component.html',
  styleUrls: ['./acao-list.component.scss']
})
export class AcaoListComponent implements OnInit {

  acoes : any = [] // vetor vazio
  displayedColumns: any = ['nomeAcao', 'tipoacao', 'usuario', 'pcontraria', 'data_atendimento', 'supervisor', 'estagiario','providencias']
 
  constructor(private acaoSrv: AcaoService) { }

  async ngOnInit() {
    this.acoes = await this.acaoSrv.listar()
    console.log(this.acoes)
  }

}
