import { Component, OnInit } from '@angular/core';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MenuItem} from 'primeng/api';


// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-dashboard',
  template: `<app-games-list></app-games-list>

  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }
}






