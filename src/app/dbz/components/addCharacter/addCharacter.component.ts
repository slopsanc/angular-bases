import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent  {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  //Cuando pulsamos el botón de Agregar
  emitCharacter(): void{

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    //Vaciar lo que se envía en el form
    this.character = { name: '', power: 0};
  }
}
