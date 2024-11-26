import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-formulario-reg',
  templateUrl: './formulario-reg.page.html',
  styleUrls: ['./formulario-reg.page.scss'],
})

export class FormularioRegPage{

  regMenor: any;
  showPassword = false;
  showPassword2 = false;

  nombre: any;
  apellidos: any;
  edad: any;
  nacimiento: any;
  CURP: any;
  email: any;
  telefono: any;
  emergencyPhone: any;
  emergencyPhone2: any;
  contrasena: any;
  confirmContrasena: any;

  constructor(private fb: FormBuilder) { }
  reactiveForm!: FormGroup;
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'

  ngOnInit(): void {
    this.regMenor = this.fb.group({
      "nombr": [null, Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)],
      "apellido": [null, Validators.required, Validators.pattern('[a-zA-Z ]*')],
      "eda": [null, Validators.required, Validators.pattern("[0-9]*")],
      "cur": [null, Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")],
      "correo": [null, Validators.required, Validators.email],
      "born": [null, Validators.required],
      "phone": [null, Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)],
      "telefonoOpc": [null, Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)],
      "telefonoOpc2": [null, Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)],
      "password": [null, Validators.required],
      "confirmPassword": [null, Validators.required]
    }, { validators: this.checkPasswords });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibility2() {
    this.showPassword2 = !this.showPassword2;
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
  get telefonoOpc() {return this.regMenor.get('telefonoOpc');}
  get telefonoOpc2() {return this.regMenor.get('telefonoOpc2');}
  
  get password() {return this.regMenor.get('password');}
  get confirmPassword() {return this.regMenor.get('confirmPassword');}

}
