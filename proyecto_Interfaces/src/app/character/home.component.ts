import { Service } from './../services/collection';
import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listacodigos : any[] | undefined;
  character : any[] ;

  constructor(public router: Router, public service: Service) {

   }

  ngOnInit(): void {
   /*this.service.llamar().subscribe(data=>{


      this.character = data as any[]
      console.log(data)
      for (const character of this.character) {
        let urlHero = character.urls[0].url;
        console.log(urlHero)
        console.log(character.thumbnail.path)
        console.log(character.name)
        /*contentHTML += `
          <div class="col-md-4">
              <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${hero.name}</h3>
          </div>`;
          
      }
      
    }
      )*/
  
}

  Ajustes(){
  
   
  }
  play(){
    
    
   }

   logros(){
//
   }


}
