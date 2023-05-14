import { eventmodel } from '../models/events.model';
import { comics } from '../services/comics';

import { Router, RouterLink } from '@angular/router';
import { events } from '../services/events';
import { character } from '../services/collection';

import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';





@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class characterComponent implements OnInit {
  url: any;
  character : any[] ;
  descriptions : any[];
  path : any[] ;
  extension : any[] ;
  extension2 : any[] ;
  id_comic : any

  constructor(public router: Router, public service: character, public model:eventmodel ) {

   }

  ngOnInit(): void {

    this.service.llamar().subscribe(data=>{


        this.character = data as any[]
        console.log(data)
        for (const character of this.character) {
          let urlHero = character.urls[0].url;
          console.log(urlHero)
          console.log(character.thumbnail.path)
          console.log(character.name)        
            
        }
        
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
