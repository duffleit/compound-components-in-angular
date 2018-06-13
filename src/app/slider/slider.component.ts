import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'av-slider',
  template: `
    <div *ngIf="dotNavigationOption === dotNavigationOptions.Above" class="dot-container">
      <div *ngFor="let dot of dots" (click)="goToSlide(dot)" class="dot"></div>
    </div>
    <ng-content></ng-content>
    <div *ngIf="dotNavigationOption === dotNavigationOptions.Below" class="dot-container">
      <div *ngFor="let dot of dots" (click)="goToSlide(dot)" class="dot"></div>
    </div>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides: SlideDefinition[] = [];

  @Input()
  dotNavigationOption: DotNavigationOption;

  dotNavigationOptions = DotNavigationOption;

  get dots(): number[] {
    return this.slides.map((s, i) => i);
  }

  registerSlide(slide: SlideDefinition): void {
    this.slides.push(slide);
  }
}

export interface SlideDefinition {
  backgroundImage: String,
  caption: String,
  description: String,
}

export enum DotNavigationOption {
  None,
  Above,
  Below,
}

