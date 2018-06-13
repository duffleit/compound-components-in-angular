import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'av-slider',
  template: `
    <div *ngIf="dotNavigationOption === dotNavigationOptions.Above" class="dot-container">
      <div *ngFor="let dot of dots" (click)="goToSlide(dot)" class="dot"></div>
    </div>
    <div class="slider-container" [ngStyle]="{'width.px': width, 'height.px': height}">
      <div class="screen" [ngStyle]="{'margin-top.px': offset}">
        <div class="slide" *ngFor="let definition of slides"
            [ngStyle]="{'background-image': 'url(' + definition.backgroundImage + ')'}">
          <div class="caption">
            <div class="title">{{definition.caption}}</div>
            <div class="description">{{definition.description}}</div>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="dotNavigationOption === dotNavigationOptions.Below" class="dot-container">
      <div *ngFor="let dot of dots" (click)="goToSlide(dot)" class="dot"></div>
    </div>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  slides: SlideDefinition[];
  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  speed: number = 2000;
  @Input()
  dotNavigationOption: DotNavigationOption;

  dotNavigationOptions = DotNavigationOption;

  public offset: number;
  private intervalSubscriber: any;

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const currentSlide = val % this.slides.length;
      this.goToSlide(currentSlide);
    })
  }

  private goToSlide(slideIndex: number) {
    this.offset = slideIndex * this.height * -1;
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }

  get dots(): number[] {
    return this.slides.map((s, i) => i);
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

