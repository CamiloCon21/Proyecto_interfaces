import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
import { libroModel } from '../models/libros';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/libreria`);
  }

  getGame(id: number) {
    return this.http.get(`${this.API_URI}/libreria/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: libroModel) {
    return this.http.post(`${this.API_URI}/libreria`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }

  getcomicspres(){
    return this.http.get(`${this.API_URI}/comicspres`);
  }

  getcomicpres(id: number){
    return this.http.get(`${this.API_URI}/comicspres/${id}`);
  }

}
