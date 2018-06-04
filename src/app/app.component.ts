import { Component } from '@angular/core';
import { SlideUnit } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <app-slider [slides]="slides" [width]="800" [height]="600"></app-slider>
    </div>`
})
export class AppComponent {
  slides: SlideUnit[] = [
    {
      backgroundImage: "assets/images/schoenbrunn.png",
      caption: "Schönbrunn Palace",
      description: "A former imperial summer residence."
    },
    {
      backgroundImage: "assets/images/stephansdom.png",
      caption: "St. Stephen's Cathedral",
      description: "One of the most iconic buildings in Vienna."
    },
    {
      backgroundImage: "assets/images/riesenrad.png",
      caption: "Wiener Riesenrad",
      description: "Was the world's tallest extant Ferris wheel till 1985."
    }
  ];
}
