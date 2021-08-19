import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionPage } from './seleccion.page';

const routes: Routes = [
  { path: '', component: SeleccionPage },
  { path: 'local/:id', loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SeleccionPageRoutingModule {}
