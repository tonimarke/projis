import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { EstagiarioService } from './../estagiario.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';


@Component({
  selector: 'app-estagiario-list',
  templateUrl: './estagiario-list.component.html',
  styleUrls: ['./estagiario-list.component.scss']
})
export class EstagiarioListComponent implements OnInit {

  estagiarios : any = []
  displayedColumns: any = ['nome', 'cpf', 'enderecos', 'telefones','inicio_vinculo', 'fim_vinculo','excluir']

  constructor(
    private estagiarioSrv: EstagiarioService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit(){
    this.estagiarios = await this.estagiarioSrv.listar()
    console.log(this.estagiarios)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: {question: 'Deseja realmente excluir este item?'}
    });

    let result = await dialogRef.afterClosed().toPromise();

    if(result) {
          try {
            await this.estagiarioSrv.excluir(id)
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