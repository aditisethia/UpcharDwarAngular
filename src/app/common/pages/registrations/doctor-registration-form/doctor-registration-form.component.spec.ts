import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegistrationFormComponent } from './doctor-registration-form.component';

describe('DoctorRegistrationFormComponent', () => {
  let component: DoctorRegistrationFormComponent;
  let fixture: ComponentFixture<DoctorRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(DoctorRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
