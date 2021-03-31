import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthentificationService} from './_services/authentification.service';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import {MomentModule} from 'ngx-moment';
import 'moment/locale/fr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from './_services/jwt-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './_services/user.service';
import { LpSolverTestComponent } from './lp-solver-test/lp-solver-test.component';
import {MarkdownModule} from 'ngx-markdown';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AddUserComponent } from './add-user/add-user.component';
import { GamesFormComponent } from './games-form/games-form.component';
import {CardModule} from "primeng/card";
import {Dropdown, DropdownModule} from "primeng/dropdown";
import {PanelModule} from "primeng/panel";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {AvatarModule} from "primeng/avatar";
import {GamesListComponent} from "./games-list/games-list.component";
import {GamesDetailComponent} from "./games-detail/games-detail.component";
import {RippleModule} from "primeng/ripple";
import {SplitButtonModule} from "primeng/splitbutton";
import {TableModule} from "primeng/table";
import { CommentComponent } from './comment/comment.component';
import {RatingModule} from 'primeng/rating';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LpSolverTestComponent,
    GamesFormComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AddUserComponent,
    GamesListComponent,
    GamesDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    MomentModule,
    MessagesModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    DropdownModule,
    PanelModule,
    InputTextareaModule,
    ReactiveFormsModule,
    MenubarModule,
    ButtonModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    InputTextModule,
    ConfirmDialogModule,
    RippleModule,
    SplitButtonModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    AvatarModule,
    RatingModule,
    FormsModule
  ],
  providers: [AuthentificationService, MessageService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
