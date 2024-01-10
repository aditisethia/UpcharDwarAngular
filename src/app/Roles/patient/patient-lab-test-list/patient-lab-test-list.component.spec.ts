import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLabTestListComponent } from './patient-lab-test-list.component';

describe('PatientLabTestListComponent', () => {
  let component: PatientLabTestListComponent;
  let fixture: ComponentFixture<PatientLabTestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLabTestListComponent]
    });
    fixture = TestBed.createComponent(PatientLabTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
