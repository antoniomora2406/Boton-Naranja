import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { IonicModule } from '@ionic/angular';

import { FormularioRegPageRoutingModule } from './formulario-reg-routing.module';

import { FormularioRegPage } from './formulario-reg.page';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioRegPageRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  declarations: [FormularioRegPage]
})
export class FormularioRegPageModule {}
