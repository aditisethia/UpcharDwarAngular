import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminSalesComponent } from './pharmacy-admin-sales.component';

describe('PharmacyAdminSalesComponent', () => {
  let component: PharmacyAdminSalesComponent;
  let fixture: ComponentFixture<PharmacyAdminSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminSalesComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
