import { Component } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <av-slider>
        <av-dot-navigation></av-dot-navigation>
        <av-vertical-rotator [speed]="4000" [width]="800" [height]="600">
          <av-slide backgroundImage="assets/images/schoenbrunn.png">
            <ng-template #thumbnail><b>Schönbrunn</b> Palace</ng-template>
            <h1>Schönbrunn Palace</h1>
            <div>A former imperial summer residence.</div>
          </av-slide>
          <av-slide backgroundImage="assets/images/stephansdom.png">
            <ng-template #thumbnail><b>St. Stephen's</b> Cathedral</ng-template>
            <h1>St. Stephen's Cathedral</h1>
            <div>One of the most iconic buildings in Vienna.</div>
          </av-slide>
        </av-vertical-rotator>
      </av-slider>
    </div>`
})
export class AppComponent {
}
