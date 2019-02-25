import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewDriveComponent } from './new-drive.component';

describe('NewDriveComponent', () => {
  let component: NewDriveComponent;
  let fixture: ComponentFixture<NewDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
