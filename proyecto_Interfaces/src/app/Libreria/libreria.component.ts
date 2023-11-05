import { libroModel } from './../models/libros';
import { Router, RouterLink } from '@angular/router';
import { events } from '../services/events';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GamesService } from '../services/serviceapi';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/loginservice';
import { UserModel } from '../models/UserModel';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class libreriacomponent implements OnInit {
  url: any;
  character : any[] ;
  descriptions : any[];
  path : any[] ;
  extension : any[] ;
  extension2 : any[] ;
  games: any = [];
  libroModel: libroModel[];
  id : any;
  Usuario: UserModel

  constructor(public router: Router, private gameService : GamesService, libroModel: libroModel, public login : UserService ) {

   }

  ngOnInit(): void {
   
  console.log("inicio")
  this.TraerUsuario()
  this.traerjuegos()

}

TraerUsuario() {
  this.login.getUserLogged().subscribe(user => { // llamamos al metodo getuser para  traer el id del usuario que ingreso
    this.Usuario = user as UserModel


    console.log(this.Usuario)
    /*if(this.Usuario.rol != 'Administrador'){  // con un condicional verificamos si es administrador o no
      console.log('No es Admin')
    }else{
      this.verificacionUsuario = true        // si es administrador esta variable se activara mostrando mas opciones en la pantalla principal
    }    
  */})}

traerjuegos(){

  this.gameService.getGames()
  .subscribe(
    res => {
      this.libroModel  = res as libroModel[];
      console.log(this.libroModel)
    },
    err => console.error(err)
  );
}

enviarlibro(){
  console.log(this.id)
  const idlib = this.id
  sessionStorage.setItem('idlibro', idlib);
  this.router.navigate(["auth/sollib"]);
  /*this.gameService.getGame(id)
  .subscribe(
    res => {
      this.libroModel  = res as libroModel[];
      console.log(this.games)
      console.log("ADENTRO")
    },
    err => console.error(err)
  );*/
}
}