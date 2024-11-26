import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:any;
  cur:any;
  password:any;
  showPassword = false;

  constructor(
    private router: Router
  ) {}
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.login = new FormGroup({
      "CURP": new FormControl(null,[Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]),
      "contra": new FormControl(null)
    });
  }

  openRegister() {
    this.router.navigate(['../registro']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  submitData(){
    console.log(this.login.value);
  }
  
  get CURP() {return this.login.get('CURP');}
  get contra() {return this.login.get('contra');}

}

