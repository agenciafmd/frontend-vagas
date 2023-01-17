import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-slide',
  templateUrl: './card-slide.component.html',
  styleUrls: ['./card-slide.component.css']
})
export class CardSlideComponent implements OnInit {

  images = [1, 2, 3].map((n) => `assets/img/nave-${n}.png`);
 
  slider: any
  slides: any
  isDragging: Boolean = false
  startPos: number = 0
  currentTranslate: number = 0
  prevTranslate: number = 0
  animationID: any
  currentIndex: number = 0

  constructor(config: NgbCarouselConfig) {
    this.slider = document.querySelector('.slider-container')
    this.slides = Array.from(document.querySelectorAll('.slide'))
    config.interval = 5000;
    config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
    config.showNavigationIndicators = false;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.pauseOnFocus = false;
  }

  ngOnInit(): void {

   /* this.slides.forEach((slide: any, index: any) => {
      const slideImage = slide.querySelector('img')
      // disable default image drag
      slideImage.addEventListener('dragstart', (e: any) => e.preventDefault())
      // pointer events
      slide.addEventListener('pointerdown', this.pointerDown(index))
      slide.addEventListener('pointerup', this.pointerUp)
      slide.addEventListener('pointerleave', this.pointerUp)
      slide.addEventListener('pointermove', this.pointerMove)
    })

    // make responsive to viewport changes
    window.addEventListener('resize', this.setPositionByIndex)

    // prevent menu popup on long press
    window.oncontextmenu = function (event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    } */
  }
  // use a HOF so we have index in a closure
 /* pointerDown(index: number) {
    let currentIndex = this.currentIndex = index
    let startPos = this.startPos
    let isDragging = this.isDragging
    let animationID = this.animationID
    let slider = this.slider
    const animation = this.animation
    return function (event: any) {
      currentIndex = index
        startPos = event.clientX
        isDragging = true
        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing')
    }
  }

  pointerMove(event: any) {
    if (this.isDragging) {
      const currentPosition = event.clientX
      this.currentTranslate = this.prevTranslate + currentPosition - this.startPos
    }
  }

  pointerUp() {
    cancelAnimationFrame(this.animationID)
    this.isDragging = false
    const movedBy = this.currentTranslate - this.prevTranslate

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && this.currentIndex < this.slides.length - 1) this.currentIndex += 1

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && this.currentIndex > 0) this.currentIndex -= 1

    this.setPositionByIndex()

    this.slider.classList.remove('grabbing')
  }

  animation() {
    this.setSliderPosition()
    if (this.isDragging) requestAnimationFrame(this.animation)
  }

  setPositionByIndex() {
    this.currentTranslate = this.currentIndex * -window.innerWidth
    this.prevTranslate = this.currentTranslate
    this.setSliderPosition()
  }

  setSliderPosition() {
    this.slider.style.transform = `translateX(${this.currentTranslate}px)`
  } */

}
