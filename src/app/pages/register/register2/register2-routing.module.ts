import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register2Page } from './register2.page';

const routes: Routes = [
  { path: '', component: Register2Page },
  { path: 'register3', loadChildren: () => import('./register3/register3.module').then( m => m.Register3PageModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register2PageRoutingModule {}
