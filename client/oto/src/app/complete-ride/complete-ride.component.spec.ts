import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRideComponent } from './complete-ride.component';

describe('CompleteRideComponent', () => {
  let component: CompleteRideComponent;
  let fixture: ComponentFixture<CompleteRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
