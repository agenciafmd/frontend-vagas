import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  template: `<div class="pokedex" alt="pokedex quadrado sendo vermelha, preta e branca">
    <div class="pokemon"><i></i></div>
    <div class="text">Assine nossa newsletter</div>
  </div>`,
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent {}
