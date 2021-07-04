import { Component, Input, OnInit } from '@angular/core';

export interface IComponentSliders {
  component: any,
  tooltip: string,
  active: boolean
}

@Component({
  selector: 'app-component-slider',
  templateUrl: './component-slider.component.html',
  styleUrls: ['./component-slider.component.scss']
})
export class ComponentSliderComponent implements OnInit {

  @Input() views: Array<IComponentSliders>;

  constructor() { }

  ngOnInit(): void {
  }

}
