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
  ngOnInit(): void {
  }
}






