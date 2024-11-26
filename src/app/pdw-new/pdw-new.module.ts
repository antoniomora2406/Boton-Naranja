import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { IonicModule } from '@ionic/angular';

import { PdwNewPageRoutingModule } from './pdw-new-routing.module';

import { PdwNewPage } from './pdw-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdwNewPageRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  declarations: [PdwNewPage]
})
export class PdwNewPageModule {}
