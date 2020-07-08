import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { AcaoListComponent } from './acao/acao-list/acao-list.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { EstagiarioListComponent } from './estagiario/estagiario-list/estagiario-list.component';
import { PcontrariaListComponent } from './pcontraria/pcontraria-list/pcontraria-list.component';
import { SupervisorListComponent } from './supervisor/supervisor-list/supervisor-list.component';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';
import { EstagiarioFormComponent } from './estagiario/estagiario-form/estagiario-form.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AcaoFormComponent } from './acao/acao-form/acao-form.component';
import { PcontrariaFormComponent } from './pcontraria/pcontraria-form/pcontraria-form.component';
import { SupervisorFormComponent } from './supervisor/supervisor-form/supervisor-form.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    AcaoListComponent,
    UsuarioListComponent,
    EstagiarioListComponent,
    PcontrariaListComponent,
    SupervisorListComponent,
    ConfirmDlgComponent,
    EstagiarioFormComponent,
    AcaoFormComponent,
    PcontrariaFormComponent,
    SupervisorFormComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
