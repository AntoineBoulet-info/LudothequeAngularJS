import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../_models/game';
import {MenuItem} from 'primeng/api';
import {GamesService} from '../_services/games.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-games-list',
  template: `
    <p-splitButton label="Tri" icon="pi pi-check" iconPos="right" [model]="items"></p-splitButton>
    <p-table>[value]="game"</p-table>
    <ng-template pTemplate="body" let-gamesService>
      <p-card header="{{gamesService.nom}}" subheader="{{gamesService.theme}}" [style]="{width: '360px'}" styleClass="p-card-shadow">
        <ng-template pTemplate="header">
          <img alt="Card" src="{{gamesService.url_media}}">
        </ng-template>
        <ul>
          <li>Durée : {{gamesService.duree}}</li>
          <li>Nombre joueurs : {{gamesService.nombre_joueurs}}</li>
          <li>Age minimum : {{gamesService.age}}</li>
        </ul>
        <ng-template pTemplate="footer">
          <button type="button" pButton pRipple icon="pi pi-search" [routerLink]="['/games', gamesService.id]"></button>
        </ng-template>
      </p-card>
    </ng-template>
  `,
  styles: [
  ]
})
export class GamesListComponent implements OnInit {
  items: MenuItem[];
  tri: number;
  game$: Observable<Game[]>;
  game: Game[];

  constructor(protected service: GamesService) {
    // this.game = service.getGame();
  }

  ngOnInit(): void {
    const games: Game[] = [];
    this.service.getGamesObs().subscribe(
      val => console.log(val),
      err => console.log(err),
      () => this.game$ = of(games)
    );
    this.game = games;
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
  }

}
