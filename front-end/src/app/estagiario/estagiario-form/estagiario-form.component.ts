import { EstagiarioService } from './../estagiario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-estagiario-form',
  templateUrl: './estagiario-form.component.html',
  styleUrls: ['./estagiario-form.component.scss']
})
export class EstagiarioFormComponent implements OnInit {

  titulo: string = 'Novo Estagiário'

  estagiario: any = {} // objeto vazio

  cursos : any = [
    {
      codigo: 'DI',
      nome: 'Direito'
    },
    {
      codigo: 'SS',
      nome: 'Serviço Social'
    }
  ]

  constructor(
    private snackBar: MatSnackBar,
    private estagiarioSrv: EstagiarioService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {

    let params = this.actRoute.snapshot.params;

    if (params['id']) {
      try {
        this.estagiario = await this.estagiarioSrv.obterUm(params['id'])
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Que pena!', { duration: 5000 })
      }
    }
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = 'Estagiário atualizado com sucesso'
        // Atualizar: já existe o atributo _id no item
        if (this.estagiario._id) {
          await this.estagiarioSrv.atualizar(this.estagiario)
        }
        else {
          await this.estagiarioSrv.novo(this.estagiario)
          msg = 'Novo estagiário criado com sucesso'
        }
        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // retorna pra pagina de listagem
        this.router.navigate(['/estagiario'])
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
      this.router.navigate(['/estagiario']); // Retorna à listagem
    }

  }
}
