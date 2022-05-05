import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCorrentistasComponent } from './components/cadastrar-correntistas/cadastrar-correntistas.component';
import { CorrentistaComponent } from './components/correntista/correntista.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'movimentacoes-new', component: MovimentacaoNewComponent},
  { path: 'movimentacoes', component: MovimentacaoListComponent},
  { path: 'correntistas', component: CorrentistaComponent},
  { path: 'cadastrar-correntistas', component: CadastrarCorrentistasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
