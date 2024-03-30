import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Output()
  public onDelete = new EventEmitter<string>();

  @Input()
  public charactersList: Character[] = [];


  public onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }

}
