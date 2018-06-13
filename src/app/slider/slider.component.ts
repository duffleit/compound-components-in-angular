import { Component, OnInit, Input } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';

@Component({
  selector: 'av-slider',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  slides: SlideDefinition[] = [];
  currentSlide: ReplaySubject<SlideDefinition> = new ReplaySubject();

  registerSlide(slide: SlideDefinition): void {
    this.slides.push(slide);
  }
}

export interface SlideDefinition {
  backgroundImage: String,
  caption: String,
  description: String,
}

