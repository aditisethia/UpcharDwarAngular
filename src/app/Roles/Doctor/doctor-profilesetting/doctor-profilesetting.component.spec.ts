import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfilesettingComponent } from './doctor-profilesetting.component';

describe('DoctorProfilesettingComponent', () => {
  let component: DoctorProfilesettingComponent;
  let fixture: ComponentFixture<DoctorProfilesettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorProfilesettingComponent]
    });
    fixture = TestBed.createComponent(DoctorProfilesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
