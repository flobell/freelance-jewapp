import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  { path: '', component: InicioPage, },
  { path: 'directorio', loadChildren: () => import('./directorio/directorio.module').then( m => m.DirectorioPageModule)},
  { path: 'cartelera', loadChildren: () => import('./cartelera/cartelera.module').then( m => m.CarteleraPageModule)},
  { path: 'mercado', loadChildren: () => import('./mercado/mercado.module').then( m => m.MercadoPageModule)},
  { path: 'anuncios', loadChildren: () => import('./anuncios/anuncios.module').then( m => m.AnunciosPageModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
