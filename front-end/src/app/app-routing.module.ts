import { ActionListComponent } from './action/action-list/action-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { OpponentListComponent } from './opponent/opponent-list/opponent-list.component';
import { SupervisorListComponent } from './supervisor/supervisor-list/supervisor-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'action', // rotas dos ativos do projeto, começa sem a /
    component: ActionListComponent
  },
  {
    path: 'customer', 
    component: CustomerListComponent
  },
  {
    path: 'intern', 
    component: InternListComponent
  },
  {
    path: 'opponent', 
    component: OpponentListComponent
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
