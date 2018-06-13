import { Component, OnInit, TemplateRef } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';

@Component({
  selector: 'av-menu',
  template: `
    <ng-container *ngFor="let slide of slides">
      <div class="menu-item" (click)="goToItem(slide)">
        <ng-container *ngTemplateOutlet="slide.thumbnail"></ng-container>
      </div>
    </ng-container>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private slider: SliderComponent) { }

  get slides(): SlideDefinition[] {
    return this.slider.slides;
  }

  goToItem(item: SlideDefinition) {
    this.slider.currentSlide.next(item);
  }
}
