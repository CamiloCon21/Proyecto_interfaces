import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { series } from '../services/series';
import { NavbarComponent } from '../navbar/navbar.component';



@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class seriesComponent implements OnInit {
  url: any;
  character : any[] ;
  descriptions : any[];
  path : any[] ;
  extension : any[] ;
  extension2 : any[] ;
  id_serie: any;

  constructor(public router: Router, public service: series) {

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



}
