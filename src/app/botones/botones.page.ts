import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'La ayuda va en camino.\n'+'Guarda la calma y dirígete a un lugar seguro',
      duration: 2500,
      icon: 'alert'
    });

    await toast.present();
  }
}

