import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabListForPatientComponent } from './lab-list-for-patient.component';

describe('LabListForPatientComponent', () => {
  let component: LabListForPatientComponent;
  let fixture: ComponentFixture<LabListForPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabListForPatientComponent]
    });
    fixture = TestBed.createComponent(LabListForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
