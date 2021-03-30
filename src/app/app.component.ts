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
/*      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },*/
      /*      {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Left',
                  icon: 'pi pi-fw pi-align-left'
                },
                {
                  label: 'Right',
                  icon: 'pi pi-fw pi-align-right'
                },
                {
                  label: 'Center',
                  icon: 'pi pi-fw pi-align-center'
                },
                {
                  label: 'Justify',
                  icon: 'pi pi-fw pi-align-justify'
                },

              ]
            },*/
      /*{
        label: 'Utilisateurs',
        icon: 'pi pi-fw pi-user',
        /!*
                visible : () => this.isUserAdmin();
        *!/
        items: [
          {
            label: 'Nouvel Utilisateur',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Supprimer un utilisateur',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Rechercher',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filtre',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          },
        ]
      },*/
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
     /* {
        label: 'Logout',
        icon: 'pi pi-power-off',
        routerLink: '/',
        routerLinkActiveOptions: {exact: true},
      },*/
      {label: 'Games',
      icon: 'pi pi-desktop'},

      /*{
         label: 'Events',
         icon: 'pi pi-fw pi-calendar',
         items: [
           {
             label: 'Edit',
             icon: 'pi pi-fw pi-pencil',
             items: [
               {
                 label: 'Save',
                 icon: 'pi pi-fw pi-calendar-plus'
               },
               {
                 label: 'Delete',
                 icon: 'pi pi-fw pi-calendar-minus'
               },

             ]
           },
           {
             label: 'Archieve',
             icon: 'pi pi-fw pi-calendar-times',
             items: [
               {
                 label: 'Remove',
                 icon: 'pi pi-fw pi-calendar-minus'
               }
             ]
           }
         ]
       }*/
      /*      {
              label: 'Quit',
              icon : 'pi pi-fw pi-power-off'
            }*/
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
