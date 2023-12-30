import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBreadcrumbComponent } from './doctor-breadcrumb.component';

describe('DoctorBreadcrumbComponent', () => {
  let component: DoctorBreadcrumbComponent;
  let fixture: ComponentFixture<DoctorBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(DoctorBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
