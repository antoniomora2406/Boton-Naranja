import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  cambios:any;

  correo:any;
  telefono:any;
  telefonoEmer:any;
  telefonoEmer2:any;

  constructor() { }
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.cambios = new FormGroup({
      "mail": new FormControl(null,[Validators.required, Validators.email]),
      "tel": new FormControl(null,[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      "telOp": new FormControl(null,[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      "telOp2": new FormControl(null,[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    });
  }

  submitData(){
    console.log(this.cambios.value);
  }

  get mail() {return this.cambios.get('mail');}
  get tel() {return this.cambios.get('tel');}
  get telOp() {return this.cambios.get('telOp');}
  get telOp2() {return this.cambios.get('telOp2');}

}
