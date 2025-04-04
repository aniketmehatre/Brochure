import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSupportComponent } from './career-support.component';

describe('CareerSupportComponent', () => {
  let component: CareerSupportComponent;
  let fixture: ComponentFixture<CareerSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerSupportComponent]
    });
    fixture = TestBed.createComponent(CareerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
