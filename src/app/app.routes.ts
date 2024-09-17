import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EdicaoComponent } from './pages/edicao/edicao.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'edicao/:id', component: EdicaoComponent},
  {path: 'detalhes/:id', component: DetalhesComponent},
];
