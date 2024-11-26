import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-pdw-new',
  templateUrl: './pdw-new.page.html',
  styleUrls: ['./pdw-new.page.scss'],
})
export class PdwNewPage implements OnInit {

  contrase:any;
  contrasena:any;
  confirmContrasena:any;
  
  showPassword = false;
  showPassword2 = false;

  constructor(private fb: FormBuilder) { }
  
  reactiveForm!: FormGroup;
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'

  ngOnInit(): void {
    this.contrase = this.fb.group({
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
    console.log(this.contrase.value);
  }

  get password() {return this.contrase.get('password');}
  get confirmPassword() {return this.contrase.get('confirmPassword');}
}
