import { AcaoService } from './../acao.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';


@Component({
  selector: 'app-acao-list',
  templateUrl: './acao-list.component.html',
  styleUrls: ['./acao-list.component.scss']
})
export class AcaoListComponent implements OnInit {

  acoes : any = [] // vetor vazio
  // display com todas as colunas para referencia
  // ['nomeAcao', 'tipoacao', 'usuario', 'pcontraria', 'data_atendimento', 'supervisor', 'estagiario', 'providencias']
  displayedColumns: any = ['nomeAcao', 'tipoacao', 'usuario', 'pcontraria', 'data_atendimento', 'supervisor', 'estagiario','providencias', 'editar', 'excluir']
  
  constructor(
    private acaoSrv: AcaoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  async ngOnInit() {
    this.acoes = await this.acaoSrv.listar()
    console.log(this.acoes)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: { question: 'Deseja realmente excluir este item?' }
    });

    let result = await dialogRef.afterClosed().toPromise();

    if (result) {
      try {
        await this.acaoSrv.excluir(id)
        this.ngOnInit()
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 3000
        })
      }
      catch (error) {
        alert('Erro: Não foi possível excluir o item')
      }
    }
  }
}