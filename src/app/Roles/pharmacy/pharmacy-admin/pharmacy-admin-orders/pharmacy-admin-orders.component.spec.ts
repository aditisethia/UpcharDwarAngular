import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminOrdersComponent } from './pharmacy-admin-orders.component';

describe('PharmacyAdminOrdersComponent', () => {
  let component: PharmacyAdminOrdersComponent;
  let fixture: ComponentFixture<PharmacyAdminOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminOrdersComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
