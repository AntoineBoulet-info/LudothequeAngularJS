import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../_services/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-user',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 3%">
    <form [formGroup]="formulaire" (ngSubmit)="onSubmit()">
      <div class="p-formgroup-inline">
        <div class="p-field">
          <label for="nom" class="p-sr-only">Nom</label>
          <input id="nom" type="text" pInputText placeholder="Nom" formControlName="nom">
          <div *ngIf="nom.invalid && (nom.dirty || nom.touched)" class="mat-error">
            <div *ngIf="nom?.errors.required" style="color:crimson">Le nom est obligatoire</div>
            <div *ngIf="nom?.errors.minlength"  style="color:crimson">Le nom doit comporter entre 2 et 100 car.</div>
          </div>
        </div>
      </div>
      <div class="p-formgroup-inline">
        <div class="p-field">
          <label for="prenom" class="p-sr-only">Prénom</label>
          <input id="prenom" type="text" pInputText placeholder="Prenom" formControlName="prenom">
          <div *ngIf="prenom.invalid && (prenom.dirty || prenom.touched)" class="mat-error">
            <div *ngIf="prenom?.errors.required" style="color:crimson">Le prénom est obligatoire</div>
            <div *ngIf="prenom?.errors.minlength"  style="color:crimson">Le prénom doit comporter entre 2 et 100 car.</div>
          </div>
        </div>
      </div>
      <div class="p-formgroup-inline">
        <div class="p-field">
          <label for="pseudo" class="p-sr-only">Pseudo</label>
          <input id="pseudo" type="text" pInputText placeholder="Pseudo" formControlName="pseudo">
          <div *ngIf="pseudo.invalid && (pseudo.dirty || pseudo.touched)" class="mat-error">
            <div *ngIf="pseudo?.errors.required" style="color:crimson">Le pseudo est obligatoire</div>
            <div *ngIf="pseudo?.errors.minlength"  style="color:crimson">Le pseudo doit comporter entre 2 et 100 car.</div>
          </div>
        </div>
      </div>
      <div class="p-formgroup-inline">
        <div class="p-field">
          <label for="email" class="p-sr-only">Email</label>
          <input id="email" type="text" pInputText placeholder="Email" formControlName="email">
          <div *ngIf="email.invalid && (email.dirty || email.touched)" class="mat-error">
            <div *ngIf="email?.errors.required" style="color:crimson">L'email est obligatoire</div>
            <div *ngIf="email?.errors.pattern"  style="color:crimson">L'email doit être au format XXXX@XXXXX.XXX</div>
          </div>
        </div>
      </div>
      <div class="p-formgroup-inline">
        <div class="p-field">
          <label for="password" class="p-sr-only">Mot de passe</label>
          <input id="password" type="text" pInputText placeholder="Mot de passe" formControlName="password">
          <div *ngIf="password.invalid && (password.dirty || password.touched)" class="mat-error">
            <div *ngIf="password?.errors.required" style="color:crimson">Le mot de passe est obligatoire</div>
            <div *ngIf="password?.errors.pattern"  style="color:crimson">Le mot de passe doit contenir au moins un chiffre et une majuscule</div>
          </div>
        </div>
      </div>
      <button [disabled]="formulaire.valid" class="ButtonVal" >Valide</button>
    </form>
    </div>
  `,
  styles: [
   ' .ButtonVal{border: none;border-radius: 0;color: #fff !important;font-size: 16px;outline: none;padding: 7px 20px;background: #2fb8f8;text-decoration: none !important;display: inline-block;border-radius: 10px;}',

  ]
})
export class AddUserComponent implements OnInit {
  user: any = {
    pseudo: null,
    nom: null,
    prenom: null,
    email: null,
    password: null
  };
  returnUrl: string;
  error = '';

  loading: boolean;

  formulaire = new FormGroup(
    {
      nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      pseudo: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]), // Validators.pattern('[A-Z]+[0-9]*')]),
      password2: new FormControl('', [Validators.required]), // Besoin de 2nd verif à finir
    }
  );

  // tslint:disable-next-line:max-line-length
  constructor(private messageService: MessageService, private authService: AuthentificationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  get nom(): AbstractControl{
    return this.formulaire.get('nom');
  }
  get prenom(): AbstractControl{
    return this.formulaire.get('prenom');
  }
  get pseudo(): AbstractControl{
    return this.formulaire.get('pseudo');
  }
  get email(): AbstractControl{
    return this.formulaire.get('email');
  }
  get password(): AbstractControl {
    return this.formulaire.get('password');
  }


  onSubmit(): void {
   /* this.user = {...this.user, ...this.formulaire.value};
    this.loading = true;
    this.authService.createUser(this.user);
    this.loading = false;
    this.router.navigate(['/profile']);
*/
    this.user = {...this.user, ...this.formulaire.value};
    this.loading = true;
    this.authService.createUser(this.user.pseudo, this.user.nom, this.user.prenom, this.user.email, this.user.password)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('Erreur: ', error);
          // this.error = error.error.data.values[0];
          this.loading = false;
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: this.error, key: 'main'});
        });


  }

  // Gaëtan - Presque fonctionnel - injection dans api à finir
}
