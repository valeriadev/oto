import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCarpoolsComponent } from './upcoming-carpools.component';

describe('UpcomingCarpoolsComponent', () => {
  let component: UpcomingCarpoolsComponent;
  let fixture: ComponentFixture<UpcomingCarpoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCarpoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCarpoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
