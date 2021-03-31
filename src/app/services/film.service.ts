import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  //je déclare une var _client private qui appelle le service angular HttpClient
  constructor(private _client : HttpClient) { }

  //methode pour aller chercher tous les films sur les studio Ghibli
  getall(url : string) : Observable<Film[]>{
    return this._client.get<Film[]>(url);
  }
  getById(id : string, url : string) : Observable<Film>{
    return this._client.get<Film>(`${url}/${id}`);
  }
}
