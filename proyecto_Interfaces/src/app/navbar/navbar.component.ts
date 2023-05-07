import { Component, Injectable, OnInit } from '@angular/core';
import { Service } from '../services/collection';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  listacodigos!: any[];

  constructor() { }

  ngOnInit(): void {
    /*this.service.llamar().subscribe(data => {


      this.listacodigos = data as any[]
      console.log(data)
    })*/
  }
  
  
  click(){
    console.log("Hola mundo");}
}
