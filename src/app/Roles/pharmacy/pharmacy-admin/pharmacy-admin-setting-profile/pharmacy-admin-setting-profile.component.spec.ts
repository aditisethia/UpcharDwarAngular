import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminSettingProfileComponent } from './pharmacy-admin-setting-profile.component';

describe('PharmacyAdminSettingProfileComponent', () => {
  let component: PharmacyAdminSettingProfileComponent;
  let fixture: ComponentFixture<PharmacyAdminSettingProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminSettingProfileComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminSettingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
