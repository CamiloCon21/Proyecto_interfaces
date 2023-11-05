import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from '../services/loginservice';
import { UserModel } from '../models/UserModel';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nombre: string;
  activate = false
  constructor(public login: UserService, public router: Router) { }
  Usuario : UserModel
  ngOnInit(): void {
    /*let id_code = sessionStorage.getItem('UsuarioLogin');
    if(id_code!=null){
    this.nombre= id_code
    console.log(id_code)
    }*/

    this.TraerUsuario()
  }
  TraerUsuario() {
    this.login.getUserLogged().subscribe(user => { // llamamos al metodo getuser para  traer el id del usuario que ingreso
      this.Usuario = user as UserModel
      this.nombre = this.Usuario.nombre

      console.log(this.Usuario)
      /*if(this.Usuario.rol != 'Administrador'){  // con un condicional verificamos si es administrador o no
        console.log('No es Admin')
      }else{
        this.verificacionUsuario = true        // si es administrador esta variable se activara mostrando mas opciones en la pantalla principal
      }    
    */})}
  
    libreria(){
      this.router.navigate(['/auth/libreria']);
      console.log("acasd")
    }
  
  click(){
    this.activate= true
    }
}
