import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatientlistComponent } from './admin-patientlist.component';

describe('AdminPatientlistComponent', () => {
  let component: AdminPatientlistComponent;
  let fixture: ComponentFixture<AdminPatientlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPatientlistComponent]
    });
    fixture = TestBed.createComponent(AdminPatientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
