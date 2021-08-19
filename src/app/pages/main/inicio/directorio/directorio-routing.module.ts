import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorioPage } from './directorio.page';

const routes: Routes = [
  { path: '', component: DirectorioPage },
  { path: 'avanzado', loadChildren: () => import('./avanzado/avanzado.module').then( m => m.AvanzadoPageModule)},
  { path: 'categorias/:id/:name', loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorioPageRoutingModule {}
