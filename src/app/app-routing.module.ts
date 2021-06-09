import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrimeiraTelaComponent } from './primeira-tela/primeira-tela.component';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';
import { TelaErroComponent } from './tela-erro/tela-erro.component';

const routes: Routes = [
  {path: '', component: PrimeiraTelaComponent},
  {path: 'segundaTela', component: SegundaTelaComponent},
  {path: 'telaErro', component: TelaErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
