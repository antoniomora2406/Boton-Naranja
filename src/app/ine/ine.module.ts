import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { INEPageRoutingModule } from './ine-routing.module';

import { INEPage } from './ine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    INEPageRoutingModule
  ],
  declarations: [INEPage]
})
export class INEPageModule {}
