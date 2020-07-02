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
    SupervisorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
