import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Arkkan', 'Rothgard', 'Batman', 'Superman', 'Thor', 'Ironman', 'Spiderman', 'John Wick', 'Hulk', 'Flash'];
  public lastRemovedHero?: string;

  public removeLastHero(): void {
    this.lastRemovedHero = this.heroesNames.pop();
  }

}
