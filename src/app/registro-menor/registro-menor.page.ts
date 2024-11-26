import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-menor',
  templateUrl: './registro-menor.page.html',
  styleUrls: ['./registro-menor.page.scss'],
})
export class RegistroMenorPage implements OnInit {
    
  regMenor: any;

  nombre: any;
  apellidos: any;
  edad: any;
  nacimiento: any;
  CURP: any;
  email: any;
  telefono: any;
  parentesco: any;

  constructor() { }
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.regMenor = new FormGroup({
      "nombr": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]),
      "apellido": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      "eda": new FormControl(null,[Validators.required, Validators.pattern("[0-9]*")]),
      "cur": new FormControl(null,[Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]),
      "born": new FormControl(null,[Validators.required]),
      "correo": new FormControl(null,[Validators.required, Validators.email]),
      "phone": new FormControl(null,[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      "paren": new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]),
    });
  }

  submitData(){
    console.log(this.regMenor.value);
  }

  get nombr() {return this.regMenor.get('nombr');}
  get apellido() {return this.regMenor.get('apellido');}
  get eda() {return this.regMenor.get('eda');}
  get cur() {return this.regMenor.get('cur');}
  get correo() {return this.regMenor.get('correo');}
  get born() {return this.regMenor.get('born');}
  get phone() {return this.regMenor.get('phone');}  
  get paren() {return this.regMenor.get('paren');}


}
