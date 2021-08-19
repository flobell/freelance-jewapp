import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteleraPage } from './cartelera.page';

const routes: Routes = [
  { path: '',component: CarteleraPage},
  { path: 'avanzado', loadChildren: () => import('./avanzado/avanzado.module').then( m => m.AvanzadoPageModule)},
  { path: 'seleccion', loadChildren: () => import('./seleccion/seleccion.module').then( m => m.SeleccionPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteleraPageRoutingModule {}
