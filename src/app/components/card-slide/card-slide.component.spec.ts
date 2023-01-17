import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSlideComponent } from './card-slide.component';

describe('CardSlideComponent', () => {
  let component: CardSlideComponent;
  let fixture: ComponentFixture<CardSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
