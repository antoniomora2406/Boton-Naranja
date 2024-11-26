import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizaRegistroPageRoutingModule } from './finaliza-registro-routing.module';

import { FinalizaRegistroPage } from './finaliza-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizaRegistroPageRoutingModule
  ],
  declarations: [FinalizaRegistroPage]
})
export class FinalizaRegistroPageModule {}
