import { UsuarioFormComponent } from "./usuario/usuario-form/usuario-form.component";
import { PcontrariaFormComponent } from "./pcontraria/pcontraria-form/pcontraria-form.component";
import { SupervisorFormComponent } from "./supervisor/supervisor-form/supervisor-form.component";
import { EstagiarioFormComponent } from "./estagiario/estagiario-form/estagiario-form.component";
import { PcontrariaListComponent } from "./pcontraria/pcontraria-list/pcontraria-list.component";
import { EstagiarioListComponent } from "./estagiario/estagiario-list/estagiario-list.component";
import { UsuarioListComponent } from "./usuario/usuario-list/usuario-list.component";
import { AcaoListComponent } from "./acao/acao-list/acao-list.component";
import { SupervisorListComponent } from "./supervisor/supervisor-list/supervisor-list.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcaoFormComponent } from "./acao/acao-form/acao-form.component";
import { EstagiarioNestedComponent } from './estagiario/estagiario-nested/estagiario-nested.component';

const routes: Routes = [
  {
    path: "acao", // rotas dos ativos do projeto, começa sem a /
    component: AcaoListComponent,
  },
  {
    path: "acao/novo", // nova ação
    component: AcaoFormComponent,
  },
  {
    path: "acao/:id", // edita ação existente
    component: AcaoFormComponent,
  },
  {
    path: "estagiario", // listagem
    component: EstagiarioListComponent,
  },
  {
    path: "estagnested", // listagem
    component: EstagiarioNestedComponent,
  },
  {
    path: "estagiario/novo", // cadastra um novo stag
    component: EstagiarioFormComponent,
  },
  {
    path: "estagiario/:id", // editar um stag existente
    component: EstagiarioFormComponent,
  },
  {
    path: "pcontraria", // listagem
    component: PcontrariaListComponent,
  },
  {
    path: "pcontraria/novo", // cadastra nova parte contrária
    component: PcontrariaFormComponent,
  },
  {
    path: "pcontraria/:id", // edita parte contrária existente
    component: PcontrariaFormComponent,
  },
  {
    path: "supervisor", // listagem
    component: SupervisorListComponent,
  },
  {
    path: "supervisor/novo", // novo supervisor
    component: SupervisorFormComponent,
  },
  {
    path: "supervisor/:id", // edita um supervisor existente
    component: SupervisorFormComponent,
  },
  {
    path: "usuario", // listagem
    component: UsuarioListComponent,
  },
  {
    path: "usuario/novo", // cadastra novo usuário
    component: UsuarioFormComponent,
  },
  {
    path: "usuario/:id", // edita usuario existente
    component: UsuarioFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
