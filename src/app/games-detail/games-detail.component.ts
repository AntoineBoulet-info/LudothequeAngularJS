import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../_models/game";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../_services/games.service";
import {Observable, Subscription} from 'rxjs';
import {Theme} from '../_models/theme';
import {Mecaniques} from "../_models/mecaniques";

@Component({
  selector: 'app-games-detail',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 3%;">
    <p-card header="{{game.nom}}" subheader="{{game.description}}" [style]="{width: '1000px'}" styleClass="p-card-shadow" >
      <ng-template pTemplate="header">
        <img alt="Card" src="{{game.url_media}}" style="width: 500px; display: flex; justify-content: center; align-items: center;">
      </ng-template>
      <ul>
        <li>Mécanique : {{game.mecanique}}</li>
        <li>Thème : {{game.theme}}</li>
        <li>Règles : {{game.regles}}</li>
        <li>Catégorie : {{game.categorie}}</li>
        <li>Langue : {{game.langue}}</li>
        <li>Editeur : {{game.editeur}}</li>
        <li>Nb Joueurs : {{game.nombre_joueurs}}</li>
        <li>Age : {{game.age}}</li>
        <li>Poids : {{game.poids}}</li>
        <li>Durée : {{game.duree}}</li>
    </ul>
      <ng-template pTemplate="footer">
        <p-button type="button" styleClass="p-button-success p-button-rounded p-mr-2" icon="pi pi-star" style="margin-left: 3%" [routerLink]="['/comment', game.id]"></p-button>
      </ng-template>
    </p-card>
    </div>
  `,
  styles: [
  ]
})
export class GamesDetailComponent implements OnInit {
  game: Game;
  theme: Theme;
  meca: Mecaniques;


  constructor(private route: ActivatedRoute, private router: Router,  private service: GamesService ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getGame(id).subscribe(
      (value) => {
        this.game = value;
      });
    this.service.getTheme(id).subscribe(
      (value) => {
        this.theme = value;
      });
    this.service.getMeca(id).subscribe(
      (value) => {
        this.meca = value;
      });
  }

}
