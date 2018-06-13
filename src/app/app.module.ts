import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import { VerticalRotatorComponent } from './vertical-rotator/vertical-rotator.component';
import { DotNavigationComponent } from './dot-navigation/dot-navigation.component';
import { HorizontalRotatorComponent } from './horizontal-rotator/horizontal-rotator.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SlideComponent,
    VerticalRotatorComponent,
    DotNavigationComponent,
    HorizontalRotatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
