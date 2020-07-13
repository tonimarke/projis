import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { MainToolbarComponent } from "./ui/main-toolbar/main-toolbar.component";
import { MainMenuComponent } from "./ui/main-menu/main-menu.component";
import { MainFooterComponent } from "./ui/main-footer/main-footer.component";
import { AcaoListComponent } from "./acao/acao-list/acao-list.component";
import { UsuarioListComponent } from "./usuario/usuario-list/usuario-list.component";
import { EstagiarioListComponent } from "./estagiario/estagiario-list/estagiario-list.component";
import { PcontrariaListComponent } from "./pcontraria/pcontraria-list/pcontraria-list.component";
import { SupervisorListComponent } from "./supervisor/supervisor-list/supervisor-list.component";
import { ConfirmDlgComponent } from "./ui/confirm-dlg/confirm-dlg.component";
import { EstagiarioFormComponent } from "./estagiario/estagiario-form/estagiario-form.component";
import { EstagiarioNestedComponent } from './estagiario/estagiario-nested/estagiario-nested.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { AcaoFormComponent } from "./acao/acao-form/acao-form.component";
import { PcontrariaFormComponent } from "./pcontraria/pcontraria-form/pcontraria-form.component";
import { SupervisorFormComponent } from "./supervisor/supervisor-form/supervisor-form.component";
import { UsuarioFormComponent } from "./usuario/usuario-form/usuario-form.component";
import { MatRadioModule } from "@angular/material/radio";
import { EstagiarioPadraoComponent } from './estagiario/estagiario-padrao/estagiario-padrao.component';


// // Habilitar formatação de moeda e data em português
// import { registerLocaleData } from "@angular/common";
// import localePt from "@angular/common/locales/pt";
// registerLocaleData(localePt);

// /**** Datas em português no MatDatepicker  ****/

// // É preciso instalar os seguintes pacotes:
// // yarn add @angular/material-moment-adapter moment

// import {
//   MatMomentDateModule,
//   MAT_MOMENT_DATE_FORMATS,
// } from "@angular/material-moment-adapter";
// import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from "@angular/material/core";

// refs componentes
//import { ItemVendaListComponent } from './item-venda/item-venda-list/item-venda-list.component';
//import { ItemVendaFormComponent } from './item-venda/item-venda-form/item-venda-form.component';
/**********************************************/

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
    UsuarioFormComponent,
    EstagiarioNestedComponent,
    EstagiarioPadraoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MaterialModule,
    //MatMomentDateModule,
    //MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [
    /**** Datas em português no MatDatepicker  ****/
    // { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    /**********************************************/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
