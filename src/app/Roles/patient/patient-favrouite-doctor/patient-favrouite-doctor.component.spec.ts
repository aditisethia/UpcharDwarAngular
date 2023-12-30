import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFavrouiteDoctorComponent } from './patient-favrouite-doctor.component';

describe('PatientFavrouiteDoctorComponent', () => {
  let component: PatientFavrouiteDoctorComponent;
  let fixture: ComponentFixture<PatientFavrouiteDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientFavrouiteDoctorComponent]
    });
    fixture = TestBed.createComponent(PatientFavrouiteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
