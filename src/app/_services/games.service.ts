import {Injectable, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Game} from '../_models/game';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Theme} from "../_models/theme";
import {Mecaniques} from "../_models/mecaniques";
import {Editeur} from "../_models/editeur";



@Injectable({
  providedIn: 'root'
})
export class GamesService{
  game: Game[];
  theme: Theme[];
  mecanique: Mecaniques[];
  editeur: Editeur[];


  constructor(private http: HttpClient) {

  }

  getGame(id: number): Observable<Game> {
    const url = 'http://localhost:8000/api/jeux/' + id;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(val => console.log(val)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }

  // tslint:disable-next-line:typedef
  getSortGame(x: number){
    // tslint:disable-next-line:triple-equals
    if (x == 1){
      const url = 'http://localhost:8000/api/jeux/?sort=note';
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      return this.http.get<any>(url, httpOptions)
        .pipe(
          map(res => res.data.item),
          tap(val => console.log(val)),
          catchError(err => {
            console.log('Erreur http : ', err);
            return of([]);
          }),
        );
    }
    else {
      const url = 'http://localhost:8000/api/jeux/?sort=nom';
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      return this.http.get<any>(url, httpOptions)
        .pipe(
          map(res => res.data.item),
          tap(val => console.log(val)),
          catchError(err => {
            console.log('Erreur http : ', err);
            return of([]);
          }),
        );
    }
  }

  getFilterAge(x: number){
    // tslint:disable-next-line:triple-equals
      const url = 'http://localhost:8000/api/jeux/?age=' + x;
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      return this.http.get<any>(url, httpOptions)
        .pipe(
          map(res => res.data.item),
          tap(val => console.log(val)),
          catchError(err => {
            console.log('Erreur http : ', err);
            return of([]);
          }),
        );
  }
  getFilterJoueurs(x: number){
    // tslint:disable-next-line:triple-equals
    const url = 'http://localhost:8000/api/jeux/?nbJoueurs=' + x;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(val => console.log(val)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }


  getTheme(id: number): Observable<Theme> {
    const url = 'http://localhost:8000/api/theme/' + id;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(val => console.log(val)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }


  getGamesObs(): Observable<Game[]> {
    const url = 'http://localhost:8000/api/jeux';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(val => console.log(val)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }
  getThemeObs(): Observable<Theme[]> {
    const url = 'http://localhost:8000/api/themes';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // @ts-ignore
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.items),
        tap(val => console.log(val)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }
  getEditeurObs(): Observable<Editeur[]> {
    const url = 'http://localhost:8000/api/editeurs';
    console.log("test");
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.items),
        tap(val => console.log(val)),
        catchError(err => {
          console.log(err);
          return of([]);
        }),
      );
  }
  getMecanicsObs(): Observable<Mecaniques[]> {
    const url = 'http://localhost:8000/api/mecanics';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // @ts-ignore
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.items),
        tap(val => console.log(val)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of([]);
        }),
      );
  }


  createGame(game: Game): Observable<Game> {
    const url = 'http://localhost:8000/api/jeux';
    console.log(url);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<any>(url, game, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(body => console.log(body)),
        catchError(err => {
          console.log('Erreur http : ', err);
          return of(undefined);
        })
      );
  }

  postGame(game: Game): void {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(environment.apiUrl + '/jeux', {
      nom: game.nom,
      description: game.description,
      theme: game.theme,
      editeur: game.editeur,
      langue: game.langue,
      age: game.age,
      poids: game.poids,
      nombre_joueurs: game.nombre_joueurs,
      duree: game.duree,
      categories: game.categorie,
    }, httpOptions).pipe(
      tap(rep => console.log(rep)),
      shareReplay(),
      catchError(err => {
        return throwError(err);
        // return of('');
      }));
  }








}
