import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../_models/game';
import {MenuItem} from 'primeng/api';
import {GamesService} from '../_services/games.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-games-list',
  template: `
    <p-splitButton label="Tri" icon="pi pi-check" iconPos="right" [model]="items"></p-splitButton>
<!--      rows]="10" [paginator]="true"-->
<!--
      <p-table [value]="game$ | async">
        <ng-template pTemplate="header">
          <tr>
            <th>Nom</th>
            <th>Photo</th>
            <th>Thème</th>
            <th>Durée</th>
            <th>Joueurs</th>
            <th>Age minimum</th>
            <th>Action</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-jeuxService>
          <tr>
            <td>{{game.nom}}}</td>
            <td><img src="{{jeuxService.url_media}}" width="150px"></td>
            <td>{{game.service.theme_id.nom}}</td>
            <td>{{jeuxService.duree}}</td>
            <td>{{jeuxService.nombre_joueurs}}</td>
            <td>{{jeuxService.age}}</td>
            <td>
              <button type="button" pButton pRipple icon="pi pi-search" [routerLink]="['/games', jeuxService.id]"></button>
            </td>
          </tr>
        </ng-template>
      </p-table>
-->
    <p-table [value]="game$ | async">
       <ng-template pTemplate="header">
         <tr>
           <th>Nom</th>
           <th>Photo</th>
           <th>Thème</th>
           <th>Durée</th>
           <th>Joueurs</th>
           <th>Age minimum</th>
           <th>Action</th>
         </tr>
       </ng-template>
    <ng-template pTemplate="body" let-game>
        <tr>
          <td>{{game.nom}}</td>
          <td><img src="{{game.url_media}}" width="150px"> </td>
          <td>{{game.theme}}</td>
          <td>{{game.duree}}</td>
          <td>{{game.nombre_joueurs}}</td>
          <td>{{game.age}}</td>
          <td>
            <button type="button" pButton pRipple icon="pi pi-search" [routerLink]="['/games', game.id]"></button>
          </td>
          </tr>
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
