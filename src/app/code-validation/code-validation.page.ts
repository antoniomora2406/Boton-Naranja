import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-code-validation',
  templateUrl: './code-validation.page.html',
  styleUrls: ['./code-validation.page.scss'],
})
export class CodeValidationPage implements OnInit {

  title = 'otp-app';
  codigo: boolean = false;

  otp!: string;

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'reze',
    allowNumbersOnly:true
  }
  constructor() { }

  ngOnInit() {
  }

  onOtpChange(event: any) {
    if (event.length === 6) {
      this.codigo = true;
    } else {
      this.codigo = false;
    }
  }

}
