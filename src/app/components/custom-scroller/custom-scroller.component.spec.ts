import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScrollerComponent } from './custom-scroller.component';

describe('CustomScrollerComponent', () => {
  let component: CustomScrollerComponent;
  let fixture: ComponentFixture<CustomScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
