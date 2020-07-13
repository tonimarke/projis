import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup, NgForm, FormControl } from "@angular/forms";
import { EstagiarioService } from "../estagiario.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { ConfirmDlgComponent } from "src/app/ui/confirm-dlg/confirm-dlg.component";

@Component({
  selector: "app-estagiario-nested",
  templateUrl: "./estagiario-nested.component.html",
  styleUrls: ["./estagiario-nested.component.scss"],
})
export class EstagiarioNestedComponent implements OnInit {
  titulo: string = "Formulário Estagiários Completo";

  public stags: FormArray;

  estagiario: any = {}; // objeto vazio

  displayedColumns: any = [
    "nome",
    "cpf",
    "rg",
    "email",
    "data_nascimento",
    "enderecos",
    "telefones",
    "inicio_vinculo",
    "fim_vinculo",
    "editar",
    "excluir",
  ];

  innerDisplayEnderecos: any = [
    "Logradouro",
    "Nº",
    "Bairro",
    "Complemento",
    "CEP",
    "Cidade",
    "Estado",
  ];
  innerDisplayTelefones: any = ["Tipo", "Nº"];

  // pro selector de cursos
  cursos: any = [
    {
      codigo: "DI",
      nome: "Direito",
    },
    {
      codigo: "SS",
      nome: "Serviço Social",
    },
  ];

  constructor(
    private estagiarioSrv: EstagiarioService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  //     Referencias para os formgroups:
  // 'nome', 'cpf', 'rg', 'email','data_nascimento', 'enderecos':
  //     [itens:{'logradouro', 'numero', 'bairro', 'complemento', 'cep', 'cidade','estado}],
  // 'telefones':
  //     [itens:{'numero', 'tipo'}],
  // 'inicio_vinculo', 'fim_vinculo','curso','status'

  ngOnInit(): void {
    this.stags = new FormArray([
      new FormGroup({
        nome: new FormControl(""),
        cpf: new FormControl(""),
        rg: new FormControl(""),
        email: new FormControl(""),
        data_nascimento: new FormControl(""),
        // enderecos new FormGroup([
        //   logradouro: new FormControl(''),
        //   numero: new FormControl(''),
        //   bairro: new FormControl(''),
        //   complemento: new FormControl(''),
        //   cep: new FormControl(''),
        //   cidade: new FormControl(''),
        //   estado: new FormControl(''),
        // ]),
        // telefones new FormGroup({
        //   numero: new FormControl(''),
        //   tipo: new FormControl(''),
        // }),
        inicio_vinculo: new FormControl(""),
        fim_vinculo: new FormControl(""),
        curso: new FormControl(""),
        status: new FormControl(""),
      }),
    ]);
  }

  async salvar(form: NgForm) {
    // só vai tentar salvar se validar os dados do formulário
    if (form.valid) {
      try {
        let msg = "Estagiário atualizado com sucesso";
        // Atualizar: já existe o atributo _id no item
        if (this.estagiario._id) {
          await this.estagiarioSrv.atualizar(this.estagiario);
        } else {
          await this.estagiarioSrv.novo(this.estagiario);
          msg = "Novo estagiário criado com sucesso";
        }
        this.snackBar.open(msg, "Entendi", { duration: 5000 });
        // retorna pra pagina de listagem
        this.router.navigate(["/estagiario"]);
      } catch (erro) {
        this.snackBar.open(erro.message, "Falhou :(", { duration: 5000 });
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
        width: "50%",
        data: { question: "Há dados não salvos. Deseja realmente voltar?" },
      });

      result = await dialogRef.afterClosed().toPromise();
    }

    if (result) {
      this.router.navigate(["/estagiario"]); // Retorna à listagem
    }
  }
}
