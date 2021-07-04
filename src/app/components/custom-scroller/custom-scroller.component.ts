import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-scroller',
  templateUrl: './custom-scroller.component.html',
  styleUrls: ['./custom-scroller.component.scss']
})
export class CustomScrollerComponent implements OnInit {

  @Input() views: Array<any>;

  ngOnInit(): void {
  }

}
