import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminDashboardComponent } from './pharmacy-admin-dashboard.component';

describe('PharmacyAdminDashboardComponent', () => {
  let component: PharmacyAdminDashboardComponent;
  let fixture: ComponentFixture<PharmacyAdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminDashboardComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
