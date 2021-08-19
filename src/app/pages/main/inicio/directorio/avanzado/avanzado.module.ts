import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvanzadoPageRoutingModule } from './avanzado-routing.module';

import { AvanzadoPage } from './avanzado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvanzadoPageRoutingModule
  ],
  declarations: [AvanzadoPage]
})
export class AvanzadoPageModule {}
