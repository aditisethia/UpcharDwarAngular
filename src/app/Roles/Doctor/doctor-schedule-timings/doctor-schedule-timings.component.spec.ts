import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorScheduleTimingsComponent } from './doctor-schedule-timings.component';

describe('DoctorScheduleTimingsComponent', () => {
  let component: DoctorScheduleTimingsComponent;
  let fixture: ComponentFixture<DoctorScheduleTimingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorScheduleTimingsComponent]
    });
    fixture = TestBed.createComponent(DoctorScheduleTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
