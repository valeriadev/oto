import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourScheduleComponent } from './your-schedule.component';

describe('YourScheduleComponent', () => {
  let component: YourScheduleComponent;
  let fixture: ComponentFixture<YourScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
