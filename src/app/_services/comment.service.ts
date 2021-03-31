import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
export class CommentService{



  constructor(private router: Router, private http: HttpClient, private messageService: MessageService) {}


  postComment(note: number, commentaire: string, jeu_id: number){
    const date_com = Date.now()
    return this.http.post<any>(`${environment.apiUrl}/auth/commentaires`, {note, commentaire, jeu_id, date_com}, httpOptions)
      .pipe(
        tap(rep => console.log(rep)),
        map(rep => {
          const user = {...rep.data.user, jwtToken: rep.data.token};
          return user;
        }),
        shareReplay(),
        catchError(err => {
          return throwError('bug');
          // return of('');
        }));
  }
}
