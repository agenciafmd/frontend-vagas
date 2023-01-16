import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SlideCarouselComponent } from './slide-carousel/slide-carousel.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AnimationLottieComponent } from './animation-lottie/animation-lottie.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ModalComponent } from './modal/modal.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [NavbarComponent, FooterComponent, SlideCarouselComponent, AnimationLottieComponent, ModalComponent],
  imports: [CommonModule, MdbCarouselModule, LottieModule.forRoot({ player: playerFactory })],
  exports: [NavbarComponent, FooterComponent, SlideCarouselComponent, AnimationLottieComponent],
})
export class SharedModule {}
