import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
import { libroModel } from '../models/libros';

@Injectable({
  providedIn: 'root'
})
export class metricasService {

  API_URI = 'http://localhost:3000/api/metricas';

  constructor(private http: HttpClient) { }

  mtlibpres() {
    return this.http.get(`${this.API_URI}/metlibpres`);
  }

  getBook(id: number) {
    console.log("EL ID QUE ME TRAEN ES: "+id)
    return this.http.get(`${this.API_URI}/comicspres/${id}`);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.API_URI}/comicspres/${id}`);
  }

  saveBook(game: libroModel) {
    return this.http.post(`${this.API_URI}/comicspres`, game);
  }

  updateBook(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/comicspres/${id}`, updatedGame);
  }

  getcomicspres(){
    return this.http.get(`${this.API_URI}/prestamo`);
  }

  getcomicpres(id: number){
    return this.http.get(`${this.API_URI}/prestamo/${id}`);
  }

}
