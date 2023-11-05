import { libroModel } from './../models/libros';
import { Router, RouterLink } from '@angular/router';
import { events } from '../services/events';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GamesService } from '../services/serviceapi';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/loginservice';
import { UserModel } from '../models/UserModel';
import { PrestamoService } from '../services/prestamoservice';
import { PrestamoModel } from '../models/PrestamoModel';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-libreria',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class prestamocomponent implements OnInit {
  url: any;
  character : any[] ;
  descriptions : any[];
  path : any[] ;
  extension : any[] ;
  extension2 : any[] ;
  games: any = [];
  libroModel: libroModel;
  id : any;
  Usuario : UserModel
  pres: PrestamoModel []
  pres2: PrestamoModel 
  array : boolean;
  object: boolean;

  constructor(public router: Router, private gameService : GamesService, libroModel: libroModel, public login : UserService, public prestamo: PrestamoService ) {
    this.libroModel = libroModel;
   }


 idlib: any;
  ngOnInit(): void {

  this.TraerUsuario();
 
  


}

TraerUsuario() {
  this.login.getUserLogged().subscribe(user => { // llamamos al metodo getuser para  traer el id del usuario que ingreso
    this.Usuario = user as UserModel


    console.log(this.Usuario)

    this.traerjuego(this.Usuario)
    /*if(this.Usuario.rol != 'Administrador'){  // con un condicional verificamos si es administrador o no
      console.log('No es Admin')
    }else{
      this.verificacionUsuario = true        // si es administrador esta variable se activara mostrando mas opciones en la pantalla principal
    }    
  */})}




traerjuego(usuario: UserModel){
this.array= false;
this.object = false;
console.log("HOLA")
console.log(this.Usuario.id_user)

this.prestamo.getBook(usuario.id_user!).subscribe(res=>{
  if(Array.isArray(res)){
    this.array = true;
    this.pres = res as PrestamoModel[]

    console.log(this.pres)
  }else if (typeof res === 'object') {
    this.object = true;
    this.pres2 = res as PrestamoModel
  }


  
})

/*
  this.gameService.getGame(this.Usuario.id_user!)
  .subscribe(
    res => {
      this.libroModel  = res as libroModel;
      console.log(this.libroModel)
    },
    err => console.error(err)
  )*/
}

enviarlibro(){
  console.log(this.id)
  const idlib = this.id
  sessionStorage.setItem('idlibro', idlib);
  this.router.navigate(["auth/prestamo"]);
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