import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminDashboardDataComponent } from './pharmacy-admin-dashboard-data.component';

describe('PharmacyAdminDashboardDataComponent', () => {
  let component: PharmacyAdminDashboardDataComponent;
  let fixture: ComponentFixture<PharmacyAdminDashboardDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminDashboardDataComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminDashboardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
