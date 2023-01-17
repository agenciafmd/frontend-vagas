import { Component } from '@angular/core';

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.css']
})
export class CardSlideComponent {

  images = [1, 2, 3].map((n) => `assets/img/nave-${n}.png`);

  constructor() {
   
  }

}

