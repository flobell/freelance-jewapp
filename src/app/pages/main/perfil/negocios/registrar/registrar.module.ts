import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPageRoutingModule } from './registrar-routing.module';

import { RegistrarPage } from './registrar.page';

import { ReactiveFormsModule } from '@angular/forms'

//import {RlTagInputModule} from 'angular2-tag-input';

//import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPageRoutingModule,
    ReactiveFormsModule,
  //  RlTagInputModule,
  //  IonTagsInputModule,
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
