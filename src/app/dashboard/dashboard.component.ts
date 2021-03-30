import { Component, OnInit } from '@angular/core';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MenuItem} from 'primeng/api';


// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-dashboard',
  template: `
    <!--<p-menubar [model]="items">
&lt;!&ndash;      <ng-template pTemplate="end">
        <input type="text" pInputText placeholder="Search">
      </ng-template>&ndash;&gt;
      <button type="button" pButton label="Logout" icon="pi pi-power-off" style="margin-left:.25em"></button>

    </p-menubar>-->
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
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
      },
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
      {
        label: 'Utilisateurs',
        icon: 'pi pi-fw pi-user',
/*
        visible : () => this.isUserAdmin();
*/
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




        ],
      }
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
}





