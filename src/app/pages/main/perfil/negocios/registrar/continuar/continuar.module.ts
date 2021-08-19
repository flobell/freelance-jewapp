import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuarPageRoutingModule } from './continuar-routing.module';

import { ContinuarPage } from './continuar.page';

import { ReactiveFormsModule } from '@angular/forms'

//import {IonTagsInputModule} from "ionic-tags-input";

import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuarPageRoutingModule,
    ReactiveFormsModule,
    //IonTagsInputModule,
    TagInputModule,
  ],
  declarations: [ContinuarPage]
})
export class ContinuarPageModule {}
