import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLottieComponent } from './animation-lottie.component';

describe('AnimationLottieComponent', () => {
  let component: AnimationLottieComponent;
  let fixture: ComponentFixture<AnimationLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimationLottieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
