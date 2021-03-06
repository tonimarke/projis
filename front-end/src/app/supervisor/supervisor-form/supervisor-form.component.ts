import { SupervisorService } from './../supervisor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.scss']
})
export class SupervisorFormComponent implements OnInit {

  titulo: string = 'Novo Supervisor'
  
  profissoes : any = [
    {
      codigo: 'ADV',
      nome: 'Advogado(a)'
    },
    {
      codigo: 'ASS',
      nome: 'Assistente Social'
    }
  ]

  supervisor: any = {} // objeto vazio

  constructor(
    private snackBar: MatSnackBar,
    private supervisorSrv: SupervisorService,
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
        this.supervisor = await this.supervisorSrv.obterUm(params['id'])
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Que pena!', { duration: 5000 })
      }
    }
    // plotando o conteudo volátil
    // this.supervisores = await this.servidorSrv.listar()
    // console.log(this.servidores)
    //plotando se usar o FormGroup: 
    //supervisorform: FormGroup;
    //this.nomedoForm.valueChanges.subscribe(console.log)
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = 'Supervisor atualizado com sucesso'
        // Atualizar: já existe o atributo _id no item
        if (this.supervisor._id) {
          await this.supervisorSrv.atualizar(this.supervisor)
        }
        else {
          await this.supervisorSrv.novo(this.supervisor)
          msg = 'Novo supervisor criado com sucesso'
        }
        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // retorna pra pagina de listagem
        this.router.navigate(['/supervisor'])
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
      this.router.navigate(['/supervisor']); // Retorna à listagem
    }

  }
}
