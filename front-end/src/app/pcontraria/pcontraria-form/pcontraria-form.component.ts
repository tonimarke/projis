import { PcontrariaService } from './../pcontraria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-pcontraria-form',
  templateUrl: './pcontraria-form.component.html',
  styleUrls: ['./pcontraria-form.component.scss']
})
export class PcontrariaFormComponent implements OnInit {

  titulo: string = 'Nova Parte Contrária'

  pcontraria: any = {} // objeto vazio

  constructor(
    private snackBar: MatSnackBar,
    private pcontrariaSrv: PcontrariaService,
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
        this.pcontraria = await this.pcontrariaSrv.obterUm(params['id'])
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Que pena!', { duration: 5000 })
      }
    }
    // plotando o conteudo volátil
    // this.pcontrarias = await this.servidorSrv.listar()
    // console.log(this.servidores)
    //plotando se usar o FormGroup: 
    //pcontrariaform: FormGroup;
    //this.nomedoForm.valueChanges.subscribe(console.log)
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = 'Parte Contrária atualizado com sucesso'
        // Atualizar: já existe o atributo _id no item
        if (this.pcontraria._id) {
          await this.pcontrariaSrv.atualizar(this.pcontraria)
        }
        else {
          await this.pcontrariaSrv.novo(this.pcontraria)
          msg = 'Nova parte contrária criado com sucesso'
        }
        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // retorna pra pagina de listagem
        this.router.navigate(['/pcontraria'])
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
      this.router.navigate(['/pcontraria']); // Retorna à listagem
    }

  }
}
