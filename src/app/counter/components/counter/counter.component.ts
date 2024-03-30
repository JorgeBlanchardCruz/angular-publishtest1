import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
  <div class="counter">
    <h3>{{ counter }}</h3>
    <button (click)="increment()">+1</button>
    <button (click)="reset()">Reset </button>
    <button (click)="decrement()">-1</button>
  </div>`,
})

export class CounterComponent {
  public counter: number = 0;

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }

  public reset(): void {
    this.counter = 0;
  }
}
