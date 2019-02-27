import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUsersComponent } from './live-users.component';

describe('LiveUsersComponent', () => {
  let component: LiveUsersComponent;
  let fixture: ComponentFixture<LiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
