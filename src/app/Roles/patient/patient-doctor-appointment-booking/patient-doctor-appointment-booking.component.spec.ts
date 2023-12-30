import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorAppointmentBookingComponent } from './patient-doctor-appointment-booking.component';

describe('PatientDoctorAppointmentBookingComponent', () => {
  let component: PatientDoctorAppointmentBookingComponent;
  let fixture: ComponentFixture<PatientDoctorAppointmentBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDoctorAppointmentBookingComponent]
    });
    fixture = TestBed.createComponent(PatientDoctorAppointmentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
