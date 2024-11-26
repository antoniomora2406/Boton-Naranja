import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { IonicModule } from '@ionic/angular';

import { RegistroMenorPageRoutingModule } from './registro-menor-routing.module';

import { RegistroMenorPage } from './registro-menor.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMenorPageRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  declarations: [RegistroMenorPage]
})
export class RegistroMenorPageModule {}
