import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'av-slider',
  template: `
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

  public offset: number;
  private intervalSubscriber: any;

  ngOnInit(): void {
    this.intervalSubscriber = interval(2000).subscribe(val => {
      const currentSlide = val % this.slides.length;
      this.offset = currentSlide * this.height * -1;
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}

export interface SlideDefinition {
  backgroundImage: String,
  caption: String,
  description: String,
}

