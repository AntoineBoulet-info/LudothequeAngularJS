import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../_models/game';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Theme} from '../_models/theme';
import {Editeur} from '../_models/editeur';
import {Observable, of} from "rxjs";
import {Mecaniques} from "../_models/mecaniques";
import {GamesService} from "../_services/games.service";


@Component({
  selector: 'app-games-form',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 3%">
    <p-card header="Games" [style]="{'width': '50rem', 'margin-bottom': '2em'}" >
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
              <label for="theme" class="p-sr-only">Thème</label> Thème :
              <p-dropdown id="theme" name="theme" optionLabel="nom" optionValue="nom" [options]="theme$ | async"
                          formControlName="theme"></p-dropdown>
            </div>
          </div>
          <div class="p-field">
            <label for="editeur" class="p-sr-only">Editeur</label> Editeur :
            <p-dropdown id="editeur" name="editeur" optionLabel="nom" optionValue="nom" [options]="editeur$ | async"
                        formControlName="editeur"></p-dropdown>
          </div>
          <div class="p-field">
            <label for="mecanique" class="p-sr-only">Mécanique</label> Mécanique :
            <p-dropdown id="mecanique" name="mecanique" optionLabel="nom" optionValue="nom" [options]="mecaniques$ |async"
                        formControlName="mecanique"></p-dropdown>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="categorie" class="p-sr-only">Catégorie</label>
            <input id="categorie" type="text" pInputText placeholder="Categorie" formControlName="categorie">
            <div *ngIf="categorie.invalid && (categorie.dirty || categorie.touched)" class="mat-error">
              <div *ngIf="categorie?.errors.required" style="color: crimson">La catégorie est obligatoire</div>
              <div *ngIf="categorie?.errors.pattern" style="color:crimson"> Uniquement des lettres !  </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="regles" class="p-sr-only">Règles du jeu</label>
            <textarea id="regles" [rows]="5" [cols]="30" type="textarea" pInputTextarea placeholder="Regles"
                      autoResize="autoResize"></textarea>
            <div *ngIf="regles.invalid && (regles.dirty || regles.touched)" class="mat-error">
              <div *ngIf="regles?.errors.required" style="color: #dc143c">La règle du jeu est obligatoire</div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="langue" class="p-sr-only">Langue</label>
            <input id="langue" type="text" pInputText placeholder="Langue" formControlName="langue">
            <div *ngIf="langue.invalid && (langue.dirty || langue.touched)" class="mat-error">
              <div *ngIf="langue?.errors.required" style="color: crimson">La langue est obligatoire</div>
              <div *ngIf="langue?.errors.minlength" style="color:crimson">Minimum 3 lettres ! </div>
              <div *ngIf="langue?.errors.pattern" style="color:crimson"> Uniquement des lettres !  </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="nombre_joueurs" class="p-sr-only">Nombre de joueurs</label>
            <input id="nombre_joueurs" type="text" pInputText placeholder="Nombre de joueurs" formControlName="nombre_joueurs">
            <div *ngIf="nombre_joueurs.invalid && (nombre_joueurs.dirty || nombre_joueurs.touched)" class="mat-error">
              <div *ngIf="nombre_joueurs?.errors.required" style="color: crimson">Le nombre de joueurs est obligatoire</div>
              <div *ngIf="nombre_joueurs?.errors.min || nombre_joueurs?.errors.max" style="color:crimson">Le nombre de joueurs est entre 2 et 8 </div>
              <div *ngIf="nombre_joueurs?.errors.pattern" style="color:crimson"> Uniquement des chiffres !  </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="age" class="p-sr-only">Age</label>
            <input id="age" type="text" pInputText placeholder="Age" formControlName="age">
            <div *ngIf="age.invalid && ( age.dirty || age.touched)" class="mat-error">
              <div *ngIf="age?.errors.required" style="color: crimson">L'âge est obligatoire</div>
              <div *ngIf="age?.errors.min || age?.errors.max" style="color:crimson">L'âge doit être compris entre 1 et 16 ans</div>
              <div *ngIf="age?.errors.pattern" style="color:crimson"> Uniquement des chiffres !  </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="poids" class="p-sr-only">Poids</label>
            <input id="poids" type="text" pInputText placeholder="Poids" formControlName="poids">
            <div *ngIf="poids.invalid && (poids.dirty || poids.touched)" class="mat-error">
              <div *ngIf="poids?.errors.required" style="color: crimson">Le poids est obligatoire</div>
              <div *ngIf="poids?.errors.min || poids?.errors.max" style="color:crimson">Le poids doit être compris entre 0.100 et 5.00</div>
              <div *ngIf="poids?.errors.pattern" style="color:crimson"> Uniquement des chiffres !  </div>
            </div>
          </div>
          <div class="p-fluid forms-grid" style="margin: 1em 0">
            <label for="duree" class="p-sr-only">Durée</label>
            <input id="duree" type="text" pInputText placeholder="Duree" formControlName="duree">
            <div *ngIf="duree.invalid && (duree.dirty || duree.touched)" class="mat-error">
              <div *ngIf="duree?.errors.required" style="color: crimson">La durée est obligatoire</div>
              <div *ngIf="duree?.errors.pattern" style="color:crimson"> Uniquement des chiffres !  </div>
            </div>
          </div>

          <button pButton type="submit" label="Valide" [disabled]="formulaire.valid"></button>

        </p-panel>
      </form>
      <ng-template pTemplate="footer">
        Saisir les informations d'un jeu
      </ng-template>
    </p-card>
    </div>
  `,
  styles: [
  ]
})
export class GamesFormComponent implements OnInit {
  // @Input() Game: Game;
  titre: string;
  editeur$: Observable<Editeur[]> ;
  theme$: Observable<Theme[]>;
  mecaniques$: Observable<Mecaniques[]>;

  formulaire = new FormGroup({
    nom: new FormControl(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    description: new FormControl(undefined, [Validators.required]),
    theme: new FormControl(''),
    editeur: new FormControl(''),
    mecanique: new FormControl(''),
    categorie: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    regles: new FormControl(undefined, [Validators.required]),
    langue: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3)]),
    nombre_joueurs: new FormControl(undefined, [Validators.min(2), Validators.max(8), Validators.pattern('[0-9]*')]),
    age: new FormControl(undefined, [Validators.min(1), Validators.max(16), Validators.pattern('[0-9]*') ]),
    poids: new FormControl(undefined, [Validators.required, Validators.min(0.100), Validators.max(5.00), Validators.pattern('[0-9]*')]),
    duree: new FormControl(undefined, [Validators.required, Validators.pattern('[0-9]*')]),
  });


  constructor(private service: GamesService) {
  }

  ngOnInit(): void {

    this.editeur$ = this.service.getEditeurObs();
    this.theme$ = this.service.getThemeObs();
    this.mecaniques$ = this.service.getMecanicsObs();

    /*this.service.getThemeObs().subscribe(
      val => theme_obs.push(val),
      err => console.log(err),
      () => this.theme$ = of(theme_obs)
    );
    this.service.getMecanicsObs().subscribe(
      val => mecanics_obs.push(val),
      err => console.log(err),
      () => this.mecaniques$ = of(mecanics_obs)
    );*/

  }

  onSubmit(): void {
    //this.game = { ...this.game, ...this.formulaire.value};
    //console.log(this.game);
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
  get langue(): AbstractControl{
    return this.formulaire.get('langue');
  }

  get categorie(): AbstractControl{
    return this.formulaire.get('categorie');
  }


}

