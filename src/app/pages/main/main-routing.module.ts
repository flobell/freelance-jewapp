import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  { path: '', component: MainPage,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)},
      { path: 'chats', loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)},
      { path: 'favoritos', loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)},
      { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
