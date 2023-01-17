import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
})
export class SlideCarouselComponent {
  slide: any[] = [
    {
      image: '../../../assets/image/01.jpg',
      alt: 'banner principal do site, contendo pikachu',
      title: 'CURIOSIDADE',
      description: 'O anime de Pokémon tem 1131 episódios.',
    },
    {
      image: '../../../assets/image/01.jpg',
      alt: 'banner principal do site, contendo pikachu',
      title: 'CURIOSIDADE',
      description: 'São mais de 120 jogos de Pokémon.',
    },
    {
      image: '../../../assets/image/01.jpg',
      alt: 'banner principal do site, contendo pikachu',
      title: 'CURIOSIDADE',
      description: 'Ash teve 3 dubladores no Brasil.',
    },
  ];
}
