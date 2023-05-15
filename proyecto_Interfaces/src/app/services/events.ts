import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';//variables de entorno
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class events {
    public  pubkey = "e8d61b257c5cfbfe3380aceace1062d5";
    public  prikey = "d4b27568db912fee2ad47449cfe0a0a68d7ed4fa";
    public  ts = new Date().getDate();

    constructor(private http: HttpClient) {

    }
   
    llamar(){
        let apikey = this.pubkey;
        let message = this.ts+this.prikey+this.pubkey
        let a= Md5.hashStr(message)
        let hash = a.toString()
        
        const urlAPI = "https://gateway.marvel.com:443/v1/public/series?apikey="+apikey+"&hash="+hash+"&ts="+this.ts+"";
        let contentHTML = '';
        const container = document.querySelector('#marvel-row');
    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
            
        }
        
      })
      
      return this.http.get<any>("https://gateway.marvel.com:443/v1/public/series?apikey="+apikey+"&hash="+hash+"&ts="+this.ts+"").pipe(map((data: any)=>data.data.results[5]));
  }
 
};
