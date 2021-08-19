import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPage } from './registrar.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPage
  },
  {
    path: 'continuar',
    loadChildren: () => import('./continuar/continuar.module').then( m => m.ContinuarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPageRoutingModule {}
