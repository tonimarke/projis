import { PcontrariaService } from './../pcontraria.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';


@Component({
  selector: 'app-pcontraria-list',
  templateUrl: './pcontraria-list.component.html',
  styleUrls: ['./pcontraria-list.component.scss']
})
export class PcontrariaListComponent implements OnInit {

  pcontrarias: any = [] // vetor vazio
  // display com todas as colunas para referencia
  // ['nome','cpf','rg','enderecos','telefones','ocupacao']
  displayedColumns: any = ['nome', 'cpf', 'rg', 'enderecos', 'telefones', 'ocupacao', 'editar', 'excluir']

  constructor(
    private pcontrariaSrv: PcontrariaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.pcontrarias = await this.pcontrariaSrv.listar()
    console.log(this.pcontrarias)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: { question: 'Deseja realmente excluir este item?' }
    });

    let result = await dialogRef.afterClosed().toPromise();

    if (result) {
      try {
        await this.pcontrariaSrv.excluir(id)
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