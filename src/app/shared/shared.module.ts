import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SlideCarouselComponent } from './slide-carousel/slide-carousel.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SlideCarouselComponent],
  imports: [CommonModule, MdbCarouselModule],
  exports: [NavbarComponent, FooterComponent, SlideCarouselComponent],
})
export class SharedModule {}
