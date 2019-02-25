import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedProfileComponent } from './visited-profile.component';

describe('VisitedProfileComponent', () => {
  let component: VisitedProfileComponent;
  let fixture: ComponentFixture<VisitedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
