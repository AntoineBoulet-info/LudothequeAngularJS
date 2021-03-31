import {Theme} from './theme';
import {Editeur} from './editeur';
import {User} from './user';
import {Mecaniques} from "./mecaniques";

export interface Game {
  id: number;
  nom: string;
  description: string;
  theme: Theme;
  editeur: Editeur;
  user: User;
  mecanique: Mecaniques;
  url_media: string;
  categorie: string;
  regles: string;
  langue: string;
  nombre_joueurs: number;
  age: number;
  poids: number;
  duree: string;


}
