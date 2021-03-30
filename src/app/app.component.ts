import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {MenuItem, MessageService} from 'primeng/api';
import {AuthentificationService} from './_services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ludotheque-client';

constructor(public messageService: MessageService, public authService: AuthentificationService) {
}

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Ro',
        icon: 'pi pi-fw pi-book',
        routerLink: '/ro',
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Créer un jeu',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/create-game',
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Games',
        icon: 'pi pi-desktop',
        routerLink: '/games',
        routerLinkActiveOptions: {exact: true},
      },
      ];
  }


  show(): void {
    const now = moment().format('LL');
    this.messageService.add({
      key: 'main',
      severity: 'info',
      detail: `${this.title}, ${now}`,
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
