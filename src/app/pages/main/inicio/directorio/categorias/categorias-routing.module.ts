import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  { path: '', component: CategoriasPage },
  { path: 'seleccion/:id/:name', loadChildren: () => import('./seleccion/seleccion.module').then( m => m.SeleccionPageModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
