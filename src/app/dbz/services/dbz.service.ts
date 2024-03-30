import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 9000 },
    { id: uuid(), name: 'Krillin', power: 2000 },
    { id: uuid(), name: 'Piccolo', power: 3000 },
    { id: uuid(), name: 'Gohan', power: 8000 }
  ];


  public addCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character,
      id: uuid()
    };

    this.characters.unshift(newCharacter);
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
