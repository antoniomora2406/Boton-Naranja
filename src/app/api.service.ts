import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addUsuario(data: { Nombre: any; Apellidos: any; Edad: any; nacimiento: any; CURP: any; email: any; Telefono: any; TelefonoOpc: any; TelefonoOpc2: any; password: any; }) {
    return this.http.post('http://localhost/Projects/Aplicacion/create.php',data);
  }
}
