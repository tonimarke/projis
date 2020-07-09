import { UsuarioService } from './../usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  titulo: string = 'Novo Usuario'

  usuario: any = {} // objeto vazio

  constructor(
    private snackBar: MatSnackBar,
    private usuarioSrv: UsuarioService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    // capturando parametros se vieram na rota de origem pro formulário
    let params = this.actRoute.snapshot.params;

    // se veio com parametro :id
    if (params['id']) {
      // então é atualização, precisa chamar o obterUm() do service pra buscar o registro
      try {
        this.usuario = await this.usuarioSrv.obterUm(params['id'])
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Que pena!', { duration: 5000 })
      }
    }
    // plotando o conteudo volátil
    // this.usuarios = await this.servidorSrv.listar()
    // console.log(this.servidores)
    //plotando se usar o FormGroup: 
    //usuarioform: FormGroup;
    //this.nomedoForm.valueChanges.subscribe(console.log)
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = 'Usuario atualizado com sucesso'
        // Atualizar: já existe o atributo _id no item
        if (this.usuario._id) {
          await this.usuarioSrv.atualizar(this.usuario)
        }
        else {
          await this.usuarioSrv.novo(this.usuario)
          msg = 'Novo usuario criado com sucesso'
        }
        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // retorna pra pagina de listagem
        this.router.navigate(['/usuario'])
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Falhou :(', { duration: 5000 })
      }
    }
  }

  async voltar(form: NgForm) {

    let result = true;
    console.log(form);
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if (form.dirty && form.touched) {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '50%',
        data: { question: 'Há dados não salvos. Deseja realmente voltar?' }
      });

      result = await dialogRef.afterClosed().toPromise();

    }

    if (result) {
      this.router.navigate(['/usuario']); // Retorna à listagem
    }

  }
}
