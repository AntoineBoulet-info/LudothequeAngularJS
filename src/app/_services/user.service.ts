import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {UserInfo} from '../_models/user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {ANONYMOUS_USER} from "./authentification.service";
import {AbstractControl} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<UserInfo> {
    return this.http.get<any>(environment.apiUrl + '/auth/user-profile', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }

  postAchat(lieu: string, prix: number, date_achat: Date, jeu_id: number): Observable<any> {
    console.log('Create Achat');
    return this.http.post<any>('${environment.apiUrl}/users/' + jeu_id + '/achat' , {lieu, prix, date_achat, jeu_id}, httpOptions)
      .pipe(
        tap(rep => console.log(rep)),
        map(rep => {
          const achat = {achat: rep.data.value, jwtToken: rep.data.token};
          return achat;
        }),
        shareReplay(),
        catchError(err => {
          return throwError('bug');
          // return of('');
        }));

  }
}
