import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'av-horizontal-rotator',
  template: `
    <div class="slider-container" [ngStyle]="{'width.px': width, 'height.px': height}">
      <div class="screen" [ngStyle]="{'margin-left.px': offset, 'width.px': screenWidth}">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./horizontal-rotator.component.scss']
})
export class HorizontalRotatorComponent implements OnInit {

  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  speed: number = 2000;

  constructor(
    private slider: SliderComponent) { }

  public offset: number;
  private intervalSubscriber: any;
  private currentSlideSubscriber: any;

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const nextSlideIndex = val % this.slider.slides.length;
      this.slider.currentSlide.next(this.slider.slides[nextSlideIndex]);
    })
    this.slider.currentSlide.subscribe(s => {
      const selectedSlideIndex = this.slider.slides.indexOf(s);
      this.goToSlide(selectedSlideIndex)
    })
  }

  get screenWidth(): number {
    return this.width * this.slider.slides.length;
  }

  private goToSlide(slideIndex: number) {
    this.offset = slideIndex * this.width * -1;
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
    this.currentSlideSubscriber.unsubscribe();
  }

}
