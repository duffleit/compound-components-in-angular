import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'av-slide',
  template: `
    <div class="slide"
        [ngStyle]="{'background-image': 'url(' + backgroundImage + ')'}">
        <div class="caption">
          <ng-content></ng-content>
        </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input()
  backgroundImage: string;

  @ContentChild('thumbnail')
  thumbnail: TemplateRef<any>;

  constructor(
    private slider: SliderComponent
  ) { }

  ngOnInit() {
    this.slider.registerSlide({ backgroundImage: this.backgroundImage, thumbnail: this.thumbnail });
  }

}
