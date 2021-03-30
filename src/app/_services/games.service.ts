import {Injectable, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Game} from '../_models/game';
import {Observable, of} from 'rxjs';
import {catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GamesService{
  map: Map<number, Game>;
  game: Game[];


  constructor(private http: HttpClient) {
    this.map = new Map();
    this.game.forEach((x: Game) => this.map.set(x.id, x));
  }

  getGame(): Game[] {
    return this.game;
  }

  getGamesObs(): Observable<Game[]> {
    const url = 'http://localhost:8000/api/jeux';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // @ts-ignore
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }








}
