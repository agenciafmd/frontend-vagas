import { Component, Input, OnInit } from '@angular/core';

import { AnimationOptions } from 'ngx-lottie';
import { SplashAnimationType } from './animation-lottie-type';

@Component({
  selector: 'app-animation-lottie',
  templateUrl: './animation-lottie.component.html',
  styleUrls: ['./animation-lottie.component.scss'],
})
export class AnimationLottieComponent implements OnInit {
  options: AnimationOptions = {
    path: './assets/lottie/pikachu.json',
  };

  windowWidth: string | undefined;
  splashTransition: string | undefined;
  opacityChange: number = 1;
  showSplash = true;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() splashAnimationType = SplashAnimationType.SlideLeft;

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = '';
      switch (this.splashAnimationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + 'px';
          transitionStyle = 'right ' + this.animationDuration + 's';
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = 'opacity ' + this.animationDuration + 's';
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.animationDuration * 10000);
    }, this.duration * 2000);
  }
}
