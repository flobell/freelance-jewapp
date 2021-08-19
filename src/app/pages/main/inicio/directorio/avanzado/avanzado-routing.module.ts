import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvanzadoPage } from './avanzado.page';

const routes: Routes = [
  {
    path: '',
    component: AvanzadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvanzadoPageRoutingModule {}
