import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantBtnComponent } from './contant-btn.component';

describe('ContantBtnComponent', () => {
  let component: ContantBtnComponent;
  let fixture: ComponentFixture<ContantBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContantBtnComponent]
    });
    fixture = TestBed.createComponent(ContantBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
