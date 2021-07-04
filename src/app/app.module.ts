import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomScrollerComponent } from './components/custom-scroller/custom-scroller.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ComponentSliderComponent } from './components/component-slider/component-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomScrollerComponent,
    HomeViewComponent,
    ComponentSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
