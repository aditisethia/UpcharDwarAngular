import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorlistComponent } from './admin-doctorlist.component';

describe('AdminDoctorlistComponent', () => {
  let component: AdminDoctorlistComponent;
  let fixture: ComponentFixture<AdminDoctorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDoctorlistComponent]
    });
    fixture = TestBed.createComponent(AdminDoctorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
