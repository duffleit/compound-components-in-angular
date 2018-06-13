import { Component, OnInit, Input } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'av-slide',
  template: `
    <div class="slide"
        [ngStyle]="{'background-image': 'url(' + definition.backgroundImage + ')'}">
      <div class="caption">
        <div class="title">{{definition.caption}}</div>
        <div class="description">{{definition.description}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input()
  definition: SlideDefinition;

  constructor(
    private slider: SliderComponent
  ) { }

  ngOnInit() {
    this.slider.registerSlide(this.definition);
  }

}
