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
import { ActionListComponent } from './action/action-list/action-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { OpponentListComponent } from './opponent/opponent-list/opponent-list.component';
import { SupervisorListComponent } from './supervisor/supervisor-list/supervisor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    ActionListComponent,
    CustomerListComponent,
    InternListComponent,
    OpponentListComponent,
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
