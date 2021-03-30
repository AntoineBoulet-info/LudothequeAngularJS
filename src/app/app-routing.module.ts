import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LpSolverTestComponent} from './lp-solver-test/lp-solver-test.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GamesFormComponent} from './games-form/games-form.component';
import {AddUserComponent} from './add-user/add-user.component';
import {GamesDetailComponent} from './games-detail/games-detail.component';
import {GamesListComponent} from './games-list/games-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ro', component: LpSolverTestComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-game', component: GamesFormComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'details/:id', component: GamesDetailComponent},
  {path: 'games', component: GamesListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
