import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorButtonComponent } from './door-button.component';

describe('DoorButtonComponent', () => {
  let component: DoorButtonComponent;
  let fixture: ComponentFixture<DoorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
