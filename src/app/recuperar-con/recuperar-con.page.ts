import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
})
export class RecuperarConPage implements OnInit {

  registro:any;
  correo:any;

  constructor() { }
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.registro = new FormGroup({
      "mail": new FormControl(null,[Validators.required, Validators.email])
    });
  }

  submitData(){
    console.log(this.registro.value);
  }

  get mail() {return this.registro.get('mail');}
}
