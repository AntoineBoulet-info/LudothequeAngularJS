import { Component, OnInit } from '@angular/core';
import {Game} from "../_models/game";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../_services/games.service";

@Component({
  selector: 'app-games-detail',
  template: `
    <p-panel header="Game"  [toggleable]="true">
      <ul>
        <li>Nom : {{game.nom}}</li>
        <li>Mécanique : {{game.mecanique}}</li>
        <li>Description : {{game.description}}</li>
        <li>Photo : <img src="{{game.url_media}}"  alt="image"/></li>
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
    </p-panel>
  `,
  styles: [
  ]
})
export class GamesDetailComponent implements OnInit {
  game: Game;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: GamesService ) { }

  ngOnInit(): void {
  }

}
