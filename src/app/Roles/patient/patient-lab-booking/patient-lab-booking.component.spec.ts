import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLabBookingComponent } from './patient-lab-booking.component';

describe('PatientLabBookingComponent', () => {
  let component: PatientLabBookingComponent;
  let fixture: ComponentFixture<PatientLabBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLabBookingComponent]
    });
    fixture = TestBed.createComponent(PatientLabBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
