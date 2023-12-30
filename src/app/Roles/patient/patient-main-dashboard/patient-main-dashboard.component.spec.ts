import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMainDashboardComponent } from './patient-main-dashboard.component';

describe('PatientMainDashboardComponent', () => {
  let component: PatientMainDashboardComponent;
  let fixture: ComponentFixture<PatientMainDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientMainDashboardComponent]
    });
    fixture = TestBed.createComponent(PatientMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
