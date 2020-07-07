import { EstagiarioService } from './../estagiario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estagiario-form',
  templateUrl: './estagiario-form.component.html',
  styleUrls: ['./estagiario-form.component.scss']
})
export class EstagiarioFormComponent implements OnInit {

  titulo: string = 'Novo Estagiário'

  estagiario: any = {} // objeto vazio

  constructor(
    private snackBar: MatSnackBar,
    private estagiarioSrv: EstagiarioService
  ) { }

  ngOnInit(): void {
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = 'Novo estagiário criado com sucesso'
        // Atualizar: já existe o atributo _id no item
        if (this.estagiario._id) {
          await this.estagiarioSrv.atualizar(this.estagiario)
        }
        else {
          await this.estagiarioSrv.novo(this.estagiario)
          msg = 'Estagiário atualizado com sucesso'
        }
        this.snackBar.open(msg, 'Entendi', {duration: 5000})
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Falhou :(', {duration: 5000})
      }
    }
  }
}
