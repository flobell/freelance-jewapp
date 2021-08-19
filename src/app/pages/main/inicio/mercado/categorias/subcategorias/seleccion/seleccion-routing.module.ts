import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionPage } from './seleccion.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionPage
  },
  {
    path: 'articulo',
    loadChildren: () => import('./articulo/articulo.module').then( m => m.ArticuloPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionPageRoutingModule {}
