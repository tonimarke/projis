import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuarios: any = [] // vetor vazio
  // display com todas as colunas para referencia
  // ['nome', 'cpf', 'rg', 'enderecos', 'telefones', 'data_nascimento', 'registrado_por']
  displayedColumns: any = ['nome', 'cpf', 'rg', 'enderecos', 'telefones', 'data_nascimento', 'registrado_por', 'editar', 'excluir']

  constructor(
    private usuarioSrv: UsuarioService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.usuarios = await this.usuarioSrv.listar()
    console.log(this.usuarios)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: { question: 'Deseja realmente excluir este item?' }
    });

    let result = await dialogRef.afterClosed().toPromise();

    if (result) {
      try {
        await this.usuarioSrv.excluir(id)
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