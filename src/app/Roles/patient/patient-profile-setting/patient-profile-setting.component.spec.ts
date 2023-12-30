import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileSettingComponent } from './patient-profile-setting.component';

describe('PatientProfileSettingComponent', () => {
  let component: PatientProfileSettingComponent;
  let fixture: ComponentFixture<PatientProfileSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientProfileSettingComponent]
    });
    fixture = TestBed.createComponent(PatientProfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
