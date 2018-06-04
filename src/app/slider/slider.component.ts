import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  template: `
    <div class="slider-container" [ngStyle]="{'width.px': width, 'height.px': height}">
      <div class="screen" [ngStyle]="{'margin-top.px': offset}">
        <div class="slide" *ngFor="let slide of slides"
            [ngStyle]="{'width.px': width, 'height.px': height, 'background-image': 'url(' + slide.backgroundImage + ')'}">
          <div class="caption">
            <div class="title">{{slide.caption}}</div>
            <div class="description">{{slide.description}}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  slides: SlideUnit[];
  @Input()
  width: number;
  @Input()
  height: number;

  public offset: number;
  private intervalSubscriber: any;

  ngOnInit(): void {
    this.intervalSubscriber = interval(3000).subscribe(val => {
      const currentSlide = val % this.slides.length;
      this.offset = currentSlide * this.height * -1;
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}

export interface SlideUnit {
  backgroundImage: String,
  caption: String,
  description: String,
}

