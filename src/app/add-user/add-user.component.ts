import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../_services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  template: `
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
      <button [disabled]="!formulaire.valid">Valide</button>
    </form>
  `,
  styles: [
  ]
})
export class AddUserComponent implements OnInit {
  user: any = {
    nom: null,
    prenom: null,
    pseudo: null,
    email: null,
    password: null
  };
  loading: boolean;

  formulaire = new FormGroup(
    {
      nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      prenom: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      pseudo: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]), // Validators.pattern('[A-Z]+[0-9]*')]),
      password2: new FormControl('', [Validators.required]), // Besoin de 2nd verif à finir
    }
  );

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
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
    this.user = {...this.user, ...this.formulaire.value};
    this.loading = true;
    this.authService.createUser(this.user);
    this.loading = false;
    this.router.navigate(['/profile']);


  }

  // Gaëtan - Presque fonctionnel - injection dans api à finir
}
