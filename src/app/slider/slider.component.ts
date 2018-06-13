import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Component({
  selector: 'av-slider',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  slides: SlideDefinition[] = [];
  currentSlide: Subject<SlideDefinition> = new Subject();

  registerSlide(slide: SlideDefinition): void {
    this.slides.push(slide);
  }
}

export interface SlideDefinition {
  backgroundImage: String,
  thumbnail: TemplateRef<any>,
}

