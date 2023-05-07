import { Service } from './../services/collection';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { events } from '../services/events';
import { eventmodel } from '../models/events.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: any;
  character : any[] ;
  descriptions : any[];
  path : any[] ;
  extension : any[] ;
  extension2 : any[] ;

  constructor(public router: Router, public service: events, public model:eventmodel ) {

   }

  ngOnInit(): void {
   this.service.llamar().subscribe(data=>{


    this.character = data as any[]; 
     console.log(this.character)
     
      const array = Object.values(this.character); 
     for (let i = 0; i < array.length; i++) {
      // console.log(array[i]);
        this.descriptions = array[2];

        this.path = array[10];
        
    }
 
    console.log(this.path);
    
    const arreglo = Object.values(this.path); 
     for (let i = 0; i < arreglo.length; i++) {
       this.extension =  arreglo[0];
       this.extension2 =  arreglo[1];

       
       
        
    }
    this.url= this.extension+"."+this.extension2
    console.log(this.url)
    
     
      
      /*for (const character of this.character) {
        let urlHero = character.urls[0].url;
        this.descriptions = character.description;
        let description = character[5]['description']
        
          
        console.log(character.description)
        console.log(character.thumbnail.path)
        contentHTML += `
          <div class="col-md-4">
              <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${hero.name}</h3>
          </div>`;
          
      }*/
      
    }
      )
  
}

  Ajustes(){
  
   
  }
  play(){
    
    
   }

   logros(){
//
   }


}
