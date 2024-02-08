import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetVarificationComponent } from './forget-varification.component';

describe('ForgetVarificationComponent', () => {
  let component: ForgetVarificationComponent;
  let fixture: ComponentFixture<ForgetVarificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetVarificationComponent]
    });
    fixture = TestBed.createComponent(ForgetVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
