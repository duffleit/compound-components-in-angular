import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';

@Component({
  selector: 'av-dot-navigation',
  template: `
    <div class="dot-container">
      <div *ngFor="let slide of slides" (click)="goToSlide(slide)" class="dot"></div>
    </div>
  `,
  styleUrls: ['./dot-navigation.component.scss']
})
export class DotNavigationComponent {
  get slides(): SlideDefinition[] {
    return this.slider.slides;
  }

  goToSlide(slide: SlideDefinition) {
    this.slider.currentSlide.next(slide);
  }

  constructor(
    private slider: SliderComponent
  ) { }
}
