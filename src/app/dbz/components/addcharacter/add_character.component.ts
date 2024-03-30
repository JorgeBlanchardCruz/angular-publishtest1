import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add_character.component.html',
  styleUrls: ['./add_character.component.css']
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter = new EventEmitter<Character>();

  public newCharacter: Character = {
    id: '',
    name: '',
    power: 0
  };


  public emitCharacter(): void {

    if (this.newCharacter.name.trim().length === 0)
      return;

    this.onNewCharacter.emit({...this.newCharacter});
  }

}
