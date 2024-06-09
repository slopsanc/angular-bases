import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}} </h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class counterComponent  {
  public counter: number = 10;

  //Creamos un nuevo metodo para nuestro contador
  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }


}
