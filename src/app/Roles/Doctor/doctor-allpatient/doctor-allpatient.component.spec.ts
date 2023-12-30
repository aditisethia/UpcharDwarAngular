import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAllpatientComponent } from './doctor-allpatient.component';

describe('DoctorAllpatientComponent', () => {
  let component: DoctorAllpatientComponent;
  let fixture: ComponentFixture<DoctorAllpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorAllpatientComponent]
    });
    fixture = TestBed.createComponent(DoctorAllpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
