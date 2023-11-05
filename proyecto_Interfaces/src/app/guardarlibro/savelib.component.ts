import { libroModel } from './../models/libros';
import { Router, RouterLink } from '@angular/router';
import { events } from '../services/events';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GamesService } from '../services/serviceapi';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-savelib',
  templateUrl: './savelib.component.html',
  styleUrls: ['./savelib.component.css']
})
export class savelibcomponent implements OnInit {
  url: any;
  character : any[] ;
  descriptions : any[];
  path : any[] ;
  extension : any[] ;
  extension2 : any[] ;
  games: any = [];
  libroModel: libroModel[];
  id : any;
  formulario: FormGroup; 

  constructor(public router: Router, private gameService : GamesService, libroModel: libroModel, private formBuilder: FormBuilder ) {
    this.formulario = this.formBuilder.group({

        NOMBRE: ['', [Validators.required]],
        DESCRIPCION: ['', [Validators.required]],
        DISPONIBLES: ['', [Validators.required]],
        ESTADO: ['', [Validators.required]]
       

    

    })
   }
   idlib: string;
  ngOnInit(): void {
    let id_code = sessionStorage.getItem('idlibro');
    if(id_code!=null){
    this.idlib= id_code
    console.log(id_code)
    }
  console.log("inicio")
  //this.traerjuegos()

}


guardarcomic(){
    console.log(this.formulario.value)
    this.gameService.saveGame(this.formulario.value).subscribe(data =>
        console.log(data))
}


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