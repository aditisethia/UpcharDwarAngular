import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorBookingSuccessComponent } from './patient-doctor-booking-success.component';

describe('PatientDoctorBookingSuccessComponent', () => {
  let component: PatientDoctorBookingSuccessComponent;
  let fixture: ComponentFixture<PatientDoctorBookingSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDoctorBookingSuccessComponent]
    });
    fixture = TestBed.createComponent(PatientDoctorBookingSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
