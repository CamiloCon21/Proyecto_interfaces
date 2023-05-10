import { Component, Injectable, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    let id_code = sessionStorage.getItem('UsuarioLogin');
    if(id_code!=null){
    this.nombre= id_code
    console.log(id_code)
    }
  }
  
  
  click(){
    this.activate= true
    }
}
