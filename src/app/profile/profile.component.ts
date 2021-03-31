import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {UserInfo} from '../_models/user-info';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {GamesService} from '../_services/games.service';
import {Game} from '../_models/game';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  game$: Observable<Game[]>;

  formulaire = new FormGroup({
    date_achat: new FormControl(undefined, [Validators.required, Validators.pattern('^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$')]),
    lieu: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    prix: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*\\.[0-9]*')]),
  });

  loading: boolean;
  user: UserInfo;

  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private messageService: MessageService, private router: Router, private service: GamesService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getProfile().subscribe(
      user => {
        this.user = {...this.user, ...user};
        this.loading = false;
      },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'impossible d\'obtenir le profil de l\'utilisateur' , key: 'main'});
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    );
    this.game$ = this.service.getGamesObs();
  }

/*  onSubmit(): void {
    var lieu = <string> this.formulaire.get('lieu');
    var prix = <number> this.formulaire.get('prix');
    var date_achat = <Date> this.formulaire.get('date_achat');
    this.userService.postAchat(lieu, prix, date_achat, this.user.id)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('Erreur: ', error);
          // this.error = error.error.data.values[0];
          this.loading = false;
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: this.error, key: 'main'});
        });



  }*/// Non Fonctionnel

  get lieu(): AbstractControl {
    return this.formulaire.get('lieu');
  }
  get date_achat(): AbstractControl {
    return this.formulaire.get('date_achat');
  }
  get prix(): AbstractControl {
    return this.formulaire.get('prix');
  }




}
