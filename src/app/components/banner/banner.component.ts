import { Component } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  images = [1, 2, 3].map((n) => `assets/img/nave-${n}.png`);
  constructor(config: NgbCarouselConfig) {
		config.interval = 5000;
    config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
    config.showNavigationIndicators = false;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.pauseOnFocus = false;
	}
}
