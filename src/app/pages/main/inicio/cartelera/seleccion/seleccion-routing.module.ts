import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionPage } from './seleccion.page';

const routes: Routes = [
  { path: '', component: SeleccionPage },
  { path: 'informacion', loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionPageRoutingModule {}
