import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminSidebarComponent } from './pharmacy-admin-sidebar.component';

describe('PharmacyAdminSidebarComponent', () => {
  let component: PharmacyAdminSidebarComponent;
  let fixture: ComponentFixture<PharmacyAdminSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminSidebarComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
