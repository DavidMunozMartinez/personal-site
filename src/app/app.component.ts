import { Component } from '@angular/core';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { IComponentSliders } from './components/component-slider/component-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  views: Array<IComponentSliders> = [
    {
      component: HomeViewComponent,
      tooltip: 'Home',
      active: true
    }
  ]

  ngOnInit() {

  }
}
