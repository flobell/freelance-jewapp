import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriasPage } from './subcategorias.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriasPage
  },
  {
    path: 'seleccion',
    loadChildren: () => import('./seleccion/seleccion.module').then( m => m.SeleccionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriasPageRoutingModule {}
