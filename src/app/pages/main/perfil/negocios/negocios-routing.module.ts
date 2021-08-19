import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosPage } from './negocios.page';

const routes: Routes = [
  {
    path: '',
    component: NegociosPage
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegociosPageRoutingModule {}
