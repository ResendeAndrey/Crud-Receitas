import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ReceitasDetalheComponent } from './content/receitas-detalhe/receitas-detalhe.component';
import { ReceitasEditarComponent } from './content/receitas-editar/receitas-editar.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: "AngularFood"
    }
  },
    {
      path: 'receitas/:id',
      component: ReceitasDetalheComponent,
    },
    {
      path: 'receitas/edit/:id',
      component: ReceitasEditarComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
