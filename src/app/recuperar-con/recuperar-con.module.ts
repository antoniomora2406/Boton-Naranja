import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { IonicModule } from '@ionic/angular';

import { RecuperarConPageRoutingModule } from './recuperar-con-routing.module';

import { RecuperarConPage } from './recuperar-con.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarConPageRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  declarations: [RecuperarConPage]
})
export class RecuperarConPageModule {}
