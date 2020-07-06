import { EstagiarioFormComponent } from './estagiario/estagiario-form/estagiario-form.component';
import { PcontrariaListComponent } from './pcontraria/pcontraria-list/pcontraria-list.component';
import { EstagiarioListComponent } from './estagiario/estagiario-list/estagiario-list.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { AcaoListComponent } from './acao/acao-list/acao-list.component';
import { SupervisorListComponent } from './supervisor/supervisor-list/supervisor-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'acao', // rotas dos ativos do projeto, começa sem a /
    component: AcaoListComponent
  },
  {
    path: 'estagiario',
    component: EstagiarioListComponent
  },
  {
    path: 'estagiario/novo', // cadastra um novo stag
    component: EstagiarioFormComponent
  },
  {
    path: 'estagiario/:id', // editar um stag existente
    component: EstagiarioFormComponent
  },
  {
    path: 'pcontraria',
    component: PcontrariaListComponent
  },
  {
    path: 'supervisor',
    component: SupervisorListComponent
  },
  {
    path: 'usuario',
    component: UsuarioListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
