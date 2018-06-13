import { Component } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <av-slider [slides]="slides" [width]="800" [height]="600"></av-slider>
    </div>`
})
export class AppComponent {
  slides: SlideDefinition[] = [
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
