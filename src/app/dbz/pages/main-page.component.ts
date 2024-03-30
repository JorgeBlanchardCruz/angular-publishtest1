import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  public onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

}
