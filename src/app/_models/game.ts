import {Theme} from './theme';
import {Editeur} from './editeur';
import {User} from './user';

export interface Game {
  id: number;
  nom: string;
  description: string;
  theme: Theme;
  editeur: Editeur;
  user: User;
  mecanique: string;
  url_media: string;
  categorie: string;
  regles: string;
  langue: string;
  nombre_joueurs: number;
  age: number;
  poids: number;
  duree: string;


}
