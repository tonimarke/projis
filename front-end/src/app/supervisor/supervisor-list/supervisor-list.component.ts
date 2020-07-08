import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { SupervisorService } from './../supervisor.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';


@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss']
})
export class SupervisorListComponent implements OnInit {

  supervisores: any = []
  displayedColumns: any = ['nome', 'cpf', 'rg', 'profissao']
    // [campos supervisor]   nome:, cpf:, rg:, profissao:

  constructor(
    private supervisorSrv: SupervisorService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.supervisores = await this.supervisorSrv.listar()
    console.log(this.supervisores)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: { question: 'Deseja realmente excluir este item?' }
    });

    let result = await dialogRef.afterClosed().toPromise();

    if (result) {
      try {
        await this.supervisorSrv.excluir(id)
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