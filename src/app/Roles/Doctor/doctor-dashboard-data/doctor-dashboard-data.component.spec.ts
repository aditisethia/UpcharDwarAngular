import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashboardDataComponent } from './doctor-dashboard-data.component';

describe('DoctorDashboardDataComponent', () => {
  let component: DoctorDashboardDataComponent;
  let fixture: ComponentFixture<DoctorDashboardDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorDashboardDataComponent]
    });
    fixture = TestBed.createComponent(DoctorDashboardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
