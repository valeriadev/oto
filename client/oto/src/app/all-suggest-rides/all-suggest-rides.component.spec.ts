import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSuggestRidesComponent } from './all-suggest-rides.component';

describe('AllSuggestRidesComponent', () => {
  let component: AllSuggestRidesComponent;
  let fixture: ComponentFixture<AllSuggestRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSuggestRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSuggestRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
