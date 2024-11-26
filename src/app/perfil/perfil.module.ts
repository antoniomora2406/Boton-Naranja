import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
