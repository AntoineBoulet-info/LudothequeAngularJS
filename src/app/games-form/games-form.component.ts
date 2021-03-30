import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../_models/game';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Theme} from '../_models/theme';
import {Editeur} from '../_models/editeur';


@Component({
  selector: 'app-games-form',
  template: `
    <p-card header="Games" [style]="{'width': '50rem', 'margin-bottom': '2em'}">
      <form [formGroup]="formulaire" (ngSubmit)="onSubmit()">
        <p-panel [header]="titre">
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="nom" class="p-sr-only">Nom</label>
            <input id="nom" type="text" pInputText placeholder="Nom" formControlName="nom">
            <div *ngIf="nom.invalid && (nom.dirty || nom.touched)" class="mat-error">
              <div *ngIf="nom?.errors.required" style="color: crimson">Le nom est obligatoire</div>
              <div *ngIf="nom?.errors.minlength" style="color:crimson">Le nom doit comporter au moins 10 caractères</div>
<!--              //todo block int for this label -->
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="description" class="p-sr-only">Description</label>
            <textarea id="description" [rows]="5" [cols]="30" type="textarea" pInputTextarea placeholder="Description"
                      autoResize="autoResize"></textarea>
            <div *ngIf="description.invalid && (description.dirty || description.touched)" class="mat-error">
              <div *ngIf="description?.errors.required" style="color: crimson">La description est obligatoire</div>
            </div>
          </div>
          <div class="p-formgroup-inline">
            <div class="p-field">
              <label for="theme" class="p-sr-only">Theme</label>
              <p-dropdown id="theme" name="theme" optionLabel="nom" optionValue="nom" [options]="theme"
                          formControlName="theme"></p-dropdown>
            </div>
          </div>
          <div class="p-field">
            <label for="editeur" class="p-sr-only">Editeur</label>
            <p-dropdown id="editeur" name="editeur" optionLabel="nom" optionValue="nom" [options]="editeur"
                        formControlName="editeur"></p-dropdown>
          </div>
          <div class="p-field">
            <label for="mecanique" class="p-sr-only">Mecanique</label>
            <p-dropdown id="mecanique" name="mecanique" optionLabel="nom" optionValue="nom" [options]="theme"
                        formControlName="mecanique"></p-dropdown>
          </div>
          <div class="p-field">
            <label for="url_media" class="p-sr-only">Photo</label>
            <option [value]="url_media"></option>
          </div>
          <div class="p-field">
            <label for="categorie" class="p-sr-only">Categorie</label>
            <p-dropdown id="categorie" name="categorie" optionLabel="nom" optionValue="nom" [options]="theme"
                        formControlName="categorie"></p-dropdown>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="regles" class="p-sr-only">Règles du jeu</label>
            <textarea id="regles" [rows]="5" [cols]="30" type="textarea" pInputTextarea placeholder="Regles"
                      autoResize="autoResize"></textarea>
            <div *ngIf="regles.invalid && (regles.dirty || regles.touched)" class="mat-error">
              <div *ngIf="regles?.errors.required" style="color: #dc143c">La règle du jeu est obligatoire</div>
            </div>
          </div>
          <div class="p-field">
            <label for="langue" class="p-sr-only">Langue</label>
            <p-dropdown id="langue" name="langue" optionLabel="nom" optionValue="nom" [options]="theme"
                        formControlName="langue"></p-dropdown>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="nombre_joueurs" class="p-sr-only">Nombre de joueurs</label>
            <input id="nombre_joueurs" type="text" pInputText placeholder="Nombre de joueurs" formControlName="nombre_joueurs">
            <div *ngIf="nombre_joueurs.invalid && (nombre_joueurs.dirty || nombre_joueurs.touched)" class="mat-error">
              <div *ngIf="nombre_joueurs?.errors.required" style="color: crimson">Le nombre de joueurs est obligatoire</div>
              <div *ngIf="nombre_joueurs?.errors.minlength" style="color:crimson">Le nombre de joueurs est entre 2 et 8 </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="age" class="p-sr-only">Age</label>
            <input id="age" type="text" pInputText placeholder="Age" formControlName="age">
            <div *ngIf="age.invalid && ( age.dirty || age.touched)" class="mat-error">
              <div *ngIf="age?.errors.required" style="color: crimson">L'âge est obligatoire</div>
              <div *ngIf="age?.errors.minlength" style="color:crimson">L'âge doit être compris entre 1 et 16 ans </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="poids" class="p-sr-only">Poids</label>
            <input id="poids" type="text" pInputText placeholder="poids" formControlName="poids">
            <div *ngIf="poids.invalid && (poids.dirty || poids.touched)" class="mat-error">
              <div *ngIf="poids?.errors.required" style="color: crimson">Le poids est obligatoire</div>
              <div *ngIf="poids?.errors.minlength" style="color:crimson">Le poids doit être compris entre 0.100 et 5.00</div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="duree" class="p-sr-only">Durée</label>
            <input id="duree" type="text" pInputText placeholder="duree" formControlName="duree">
            <div *ngIf="duree.invalid && (duree.dirty || duree.touched)" class="mat-error">
              <div *ngIf="duree?.errors.required" style="color: crimson">La durée est obligatoire</div>
            </div>
          </div>

          <button pButton type="submit" label="Valide" [disabled]="!formulaire.valid"></button>

        </p-panel>
      </form>
      <ng-template pTemplate="footer">
        Saisir les informations d'un jeu
      </ng-template>
    </p-card>
  `,
  styles: [
  ]
})
export class GamesFormComponent implements OnInit {
  // @Input() Game: Game;
  titre: string;
  game: Game = {
    id: null,
    nom: null,
    description: null,
    theme: null,
    editeur: null,
    user: null,
    mecanique: null,
    url_media: null,
    categorie: null,
    regles: null,
    langue: null,
    nombre_joueurs: null,
    age: null,
    poids: null,
    duree: null
  };

  // TODO THEME
  theme: Theme[] = [{id: 1, nom: 'Suspense'},
    {id: 2, nom: 'Adventure'},
    {id: 3, nom: 'Cars'},
    {id: 4, nom: 'Building'},
    {id: 5, nom: 'Fantasy'},
    {id: 6, nom: 'Fishing'},
    {id: 7, nom: 'Action'},
    {id: 8, nom: 'War'},
    {id: 9, nom: 'Economic'},
    {id: 10, nom: 'Cycling'},
  ];

  editeur: Editeur[] = [{id: 1, nom: 'Suspense'},
    {id: 2, nom: 'Adventure'},

  ];

  formulaire = new FormGroup({
    nom: new FormControl(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    description: new FormControl(undefined, [Validators.required]),
    theme: new FormControl(''),
    editeur: new FormControl(''),
    mecanique: new FormControl(''),
    url_media: new FormControl(undefined, [Validators.required]),
    categorie: new FormControl(''),
    regles: new FormControl(undefined, [Validators.required]),
    langue: new FormControl(''),
    nombre_joueurs: new FormControl(undefined, [Validators.min(2), Validators.max(8)]),
    age: new FormControl(undefined, [Validators.min(1), Validators.max(16)]),
    poids: new FormControl(undefined, [Validators.required, Validators.min(0.100), Validators.max(5.00)]),
    duree: new FormControl(undefined, [Validators.required]),
  });


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.game = { ...this.game, ...this.formulaire.value};
    console.log(this.game);
  }


  get nom(): AbstractControl {
    return this.formulaire.get('nom');
  }

  get description(): AbstractControl {
    return this.formulaire.get('description');
  }

  get url_media(): AbstractControl {
    return this.formulaire.get('url_media');
  }

  get regles(): AbstractControl {
    return this.formulaire.get('regles');
  }

  get poids(): AbstractControl {
    return this.formulaire.get('poids');
  }

  get nombre_joueurs(): AbstractControl {
    return this.formulaire.get('nombre_joueurs');
  }

  get duree(): AbstractControl {
    return this.formulaire.get('duree');
  }

  get age(): AbstractControl {
    return this.formulaire.get('age');
  }


}

