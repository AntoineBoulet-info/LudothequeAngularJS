import { Component, OnInit } from '@angular/core';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs';
import {Game} from '../_models/game';
import {GamesService} from '../_services/games.service';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-dashboard',
  template: `
    <p-carousel [value]="game$ | async" styleClass="custom-carousel" [numVisible]="3" [numScroll]="1" [circular]="true" [autoplayInterval]="3000" [responsiveOptions]="responsiveOptions">
      <ng-template pTemplate="header" let-game>
        <h5 style="display: flex; justify-content: center; align-items: center; margin-top: 3%">GameHub</h5>
      </ng-template>
      <ng-template let-game pTemplate="item">
        <div class="product-item">
          <div class="product-item-content">
            <div class="p-mb-3">
              <img src="{{game.url_media}}" [alt]="game.nom" class="product-image" />
            </div>
            <div>
              <h4 class="p-mb-2">{{game.nom}}</h4>
              <div class="car-buttons p-mt-5">
                <p-button type="button" styleClass="p-button p-button-rounded p-mr-2" icon="pi pi-search" [routerLink]="['/games', game.id]"></p-button>
              </div>
            </div>
          </div>
        </div>
      </ng-template>
    </p-carousel>
    <style>
      .product-item-content {
        border: 1px solid var(--surface-d);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
      }

      .product-image {
        width: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
      }

    </style>

  `,
  styles: [`

  `]
})
export class DashboardComponent implements OnInit {
  game$: Observable<Game[]>;
  responsiveOptions;

  constructor(private service: GamesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
    this.game$ = this.service.getGamesObs();
  }
}






