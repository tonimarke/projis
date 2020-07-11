import { EstagiarioService } from './../../estagiario/estagiario.service';
import { SupervisorService } from './../../supervisor/supervisor.service';
import { PcontrariaService } from './../../pcontraria/pcontraria.service';
import { UsuarioService } from './../../usuario/usuario.service';
import { AcaoService } from './../acao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from 'src/app/ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-acao-form',
  templateUrl: './acao-form.component.html',
  styleUrls: ['./acao-form.component.scss']
})
export class AcaoFormComponent implements OnInit {

  titulo: string = 'Nova Ação'

  acao: any = {} // objeto vazio

  //entidades relacionadas
  usuarios : any = [] //vetor vazio
  pcontrarias : any = [] //vetor vazio
  supervisores : any = [] //vetor vazio
  estagiarios : any = [] //vetor vazio
  

  constructor(
    private snackBar: MatSnackBar,
    private acaoSrv: AcaoService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog,
    private usuarioSrv: UsuarioService,
    private pcontrariaSrv: PcontrariaService,
    private supervisorSrv: SupervisorService,
    private estagiarioSrv: EstagiarioService
  ) { }

  async ngOnInit() {
    // capturando parametros se vieram na rota de origem pro formulário
    let params = this.actRoute.snapshot.params;

    // se veio com parametro :id
    if (params['id']) {
      // então é atualização, precisa chamar o obterUm() do service pra buscar o registro
      try {
        this.acao = await this.acaoSrv.obterUm(params['id'])
      }
      catch (erro) {
        this.snackBar.open(erro.message, 'Que pena!', { duration: 5000 })
      }
    }

    // Preenchendo entidades relacionadas
    try {
      this.usuarios = await this.usuarioSrv.listar(),
      this.pcontrarias = await this.pcontrariaSrv.listar(),
      this.supervisores = await this.supervisorSrv.listar(),
      this.estagiarios = await this.estagiarioSrv.listar()
    } catch (erro) {
      this.snackBar.open(erro.message, 'Que pena!', { duration: 5000 })
    }
    // plotando o conteudo volátil
    // this.acoes = await this.servidorSrv.listar()
    // console.log(this.servidores)
    //plotando se usar o FormGroup: 
    //acaoform: FormGroup;
    //this.nomedoForm.valueChanges.subscribe(console.log)
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = 'Acao atualizado com sucesso'
        // Atualizar: já existe o atributo _id no item
        if (this.acao._id) {
          await this.acaoSrv.atualizar(this.acao)
        }
        else {
          await this.acaoSrv.novo(this.acao)
          msg = 'Novo acao criado com sucesso'
        }
        this.snackBar.open(msg, 'Entendi', { duration: 5000 })
        // retorna pra pagina de listagem
        this.router.navigate(['/acao'])
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
      this.router.navigate(['/acao']); // Retorna à listagem
    }

  }
}
