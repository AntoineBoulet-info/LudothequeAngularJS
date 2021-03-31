import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../_models/game";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../_services/games.service";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-games-detail',
  template: `
    <p-panel header="Game"  [toggleable]="true">
      <p-table [value]="game$ | async">
        <ng-template pTemplate="body" let-game>
      <ul>
        <li>Nom : {{game.nom}}</li>
        <li>Mécanique : {{game.mecanique}}</li>
        <li>Description : {{game.description}}</li>
        <li>Photo : <img src="{{game.url_media}}"  alt="image" style="width: 50px"/></li>
        <li>Thème: {{game.theme}}</li>
        <li>Règles : {{game.regles}}</li>
        <li>Catégorie : {{game.categorie}}</li>
        <li>Langue : {{game.langue}}</li>
        <li>Editeur : {{game.editeur}}</li>
        <li>Nb Joueurs : {{game.nombre_joueurs}}</li>
        <li>Age : {{game.age}}</li>
        <li>Poids : {{game.poids}}</li>
        <li>Durée : {{game.duree}}</li>
      </ul>
        </ng-template>
      </p-table>
    </p-panel>
  `,
  styles: [
  ]
})
export class GamesDetailComponent implements OnInit {
  game$: Observable<Game[]>;


  constructor(private route: ActivatedRoute, private router: Router,  private service: GamesService ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    /*this.game$ = this.service.getGame(id);*/
  }

}
