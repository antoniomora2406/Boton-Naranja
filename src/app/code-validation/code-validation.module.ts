import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';

import { IonicModule } from '@ionic/angular';

import { CodeValidationPageRoutingModule } from './code-validation-routing.module';

import { CodeValidationPage } from './code-validation.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOtpInputModule,
    CodeValidationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CodeValidationPage]
})
export class CodeValidationPageModule {}
