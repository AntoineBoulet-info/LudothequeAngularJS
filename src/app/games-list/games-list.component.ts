import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../_models/game';
import {MenuItem} from 'primeng/api';
import {GamesService} from '../_services/games.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-games-list',
  template: `
    <p-splitButton label="Tri" icon="pi pi-check" iconPos="right" [model]="items"></p-splitButton>
    <p-table [value]="game$ | async">
    <ng-template pTemplate="body" let-game>
      <p-card header="{{game.nom}}" subheader="{{game.theme}}" [style]="{width: '360px'}" styleClass="p-card-shadow">
        <ng-template pTemplate="header">
          <img alt="Card" src="{{game.url_media}}">
        </ng-template>
        <ul>
          <li>Durée : {{game.duree}}</li>
          <li>Nombre joueurs : {{game.nombre_joueurs}}</li>
          <li>Age minimum : {{game.age}}</li>
        </ul>
        <ng-template pTemplate="footer">
          <button type="button" pButton pRipple icon="pi pi-search" [routerLink]="['/games', game.id]"></button>
        </ng-template>
      </p-card>
    </ng-template>
    </p-table>
  `,
  styles: [
  ]
})
export class GamesListComponent implements OnInit {
  items: MenuItem[];
  tri: number;
  game$: Observable<Game[]>;
  constructor(private service: GamesService) {
    // this.game = service.getGame();
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Tri par nom', icon: 'pi pi-check', command: () => {
        this.tri = 1;
        // this.games = this.service.getGame(this.tri);
        }},
      {label: 'Tri par note', icon: 'pi pi-check', command: () => {
          this.tri = 0;
          // this.games = this.service.getGame(this.tri);
        }},
    ];
    this.game$ = this.service.getGamesObs();
    console.log(this.game$);
  }

}
