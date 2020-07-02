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
    path: 'usuario', 
    component: UsuarioListComponent
  },
  {
    path: 'estagiario', 
    component: EstagiarioListComponent
  },
  {
    path: 'pcontraria', 
    component: PcontrariaListComponent
  },
  {
    path: 'supervisor', 
    component: SupervisorListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
