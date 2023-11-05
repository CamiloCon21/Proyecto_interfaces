import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  APIURL= 'http://localhost:3000/api/';
 



  listUsers: UserModel[];
  User: UserModel;
  id: string;
  public validadorEstado: boolean = false;
  public validarUsuario: boolean;


  constructor(private http: HttpClient, private cookies: CookieService, private router: Router ) {
  }
  usuarioLogeado(usuario: UserModel) {
    this.User = usuario;
    console.log(this.User);
  }

  traerUsuarios() {
    return this.http.get(this.APIURL + 'login');
  }

  
  agregarUsuario(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('https://localhost:44319/api/Usuario/enviarUsuario', user);

  } 

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  salir(){
    this.cookies.delete("token");   
    
  }
  getUserLogged() {
    const token = this.getToken();
    return this.http.get('http://localhost:3000/api/login/'+token);
    // Aquí iría el endpoint para devolver el usuario para un token
  }

  usuarioID(id: string){
    return this.http.get('https://localhost:44319/api/Usuario/listarUno/'+id)
  }

  actualizarUsuario(user: UserModel, id: string){
     return this.http.put('https://localhost:44319/api/Usuario/editarUsuario/'+id, user)
  }
}
