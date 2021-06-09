import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';
import { PrimeiraTelaComponent } from './primeira-tela/primeira-tela.component';
import { TelaErroComponent } from './tela-erro/tela-erro.component';



@NgModule({
  declarations: [
    AppComponent,
    SegundaTelaComponent,
    PrimeiraTelaComponent,
    TelaErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
