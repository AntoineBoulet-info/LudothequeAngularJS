import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../_models/game';
import {MenuItem} from 'primeng/api';
import {GamesService} from '../_services/games.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-games-list',
  template: `
    <p-splitButton style="margin-left:1px"  label="Tri" icon="pi pi-check" iconPos="right" [model]="items"></p-splitButton>
    <p-splitButton style="margin-left:1px"  label="Filtre par âge: " icon="pi pi-check" iconPos="right" [model]="items_age"></p-splitButton>
      <p-splitButton style="margin-left:1px"   label="Filtre par Nombre de Joueurs: " icon="pi pi-check" iconPos="right" [model]="items_joueurs"></p-splitButton>
    <p-table [value]="game$ | async">
       <ng-template pTemplate="header">
         <tr>
           <th>Nom</th>
           <th>Photo</th>
           <th>Thème</th>
           <th>Durée</th>
           <th>Joueurs</th>
           <th>Age minimum</th>
           <th>Détails</th>
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
            <p-button type="button" styleClass="p-button p-button-rounded p-mr-2" icon="pi pi-search" [routerLink]="['/games', game.id]"></p-button>
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
  items_age: MenuItem[];
  items_joueurs: MenuItem[];
  tri: number;
  game$: Observable<Game[]>;
  age: number = 4;
  constructor(private service: GamesService) {
    this.game$ = service.getGamesObs();
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Tri par nom', icon: 'pi pi-check', command: () => {
          this.tri = 0;
          this.game$ = this.service.getSortGame(this.tri);
        }},
      {label: 'Tri par note', icon: 'pi pi-check', command: () => {
          this.tri = 1;
          this.game$ = this.service.getSortGame(this.tri);
        }},
      {label: 'Réinitialiser Tri', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getGamesObs();
        }},
    ];
    this.items_age = [
      {label: '<= 4', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterAge(4);
        }},
      {label: '<= 6', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterAge(6);
        }},
      {label: '<= 10', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterAge(10);
        }},
      {label: '<= 14', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterAge(14);
        }},
      {label: '<= 18', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterAge(18);
        }},
    ];
    this.items_joueurs = [
      {label: '<= 2', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterJoueurs(2);
        }},
      {label: '<= 4', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterJoueurs(4);
        }},
      {label: '<= 6', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterJoueurs(6);
        }},
      {label: '<=8', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterJoueurs(8);
        }},
      {label: '<= 10', icon: 'pi pi-check', command: () => {
          this.game$ = this.service.getFilterJoueurs(10);
        }},
    ];
    this.game$ = this.service.getGamesObs();
    console.log(this.game$);
  }
}
