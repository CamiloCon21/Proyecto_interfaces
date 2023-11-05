import { FormGroup, FormBuilder } from '@angular/forms';
import { libroModel } from './../models/libros';
import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { GamesService } from '../services/serviceapi';
import { UserService } from '../services/loginservice';
import { UserModel } from '../models/UserModel';
import { SolicitarlibroService } from '../services/solicitarlibro';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-libreria',
  templateUrl: './sollib.component.html',
  styleUrls: ['./sollib.component.css']
})
export class sollibcomponent implements OnInit {
  url: any;
  character: any[];
  descriptions: any[];
  path: any[];
  extension: any[];
  extension2: any[];
  games: any = [];
  libroModel: libroModel;
  id: any;
  Usuario: UserModel;
  formulario: FormGroup;

  constructor(public router: Router, private gameService: GamesService, public login: UserService, public books: SolicitarlibroService, public formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id_user: ['', [Validators.required]], // Initialize without value
      id_libro: ['', [Validators.required]],// Initialize without value
      fecha_prestamo: ['', [Validators.required]],
      fecha_devolucion: ['', [Validators.required]]
    });
  }

  idlib: any;

  ngOnInit(): void {
    this.TraerUsuario();
    let id_code = sessionStorage.getItem('idlibro');
    if (id_code != null) {
      this.idlib = id_code;
      console.log(this.idlib);
    }
    this.traerjuego();
  }

  TraerUsuario() {
    this.login.getUserLogged().subscribe(user => {
      this.Usuario = user as UserModel;
      console.log(this.Usuario);
    });
  }

  traerjuego() {
    this.gameService.getGame(this.idlib).subscribe(
      res => {
        this.libroModel = res as libroModel;
        console.log(this.libroModel);
  
        // Verificar que libroModel esté definido antes de usarlo
        if (this.libroModel) {
          // Después de obtener los datos del libro, inicializa el formulario aquí
          this.formulario.patchValue({
            id_libro: this.libroModel.ID_LIBRO,
            // Otras propiedades del libro
          });
        }
      },
      err => console.error(err)
    );
  }
  

  enviarlibro() {
    // Asignar valores a id_user y id_libro antes de enviar el formulario
    this.formulario.patchValue({
      id_user: this.Usuario.id_user,
      id_libro: this.libroModel.ID_LIBRO
    });

    this.books.saveBook(this.formulario.value).subscribe(res => {
      console.log(res);
    });
  }
}
