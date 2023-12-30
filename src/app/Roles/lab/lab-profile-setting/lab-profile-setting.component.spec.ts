import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabProfileSettingComponent } from './lab-profile-setting.component';

describe('LabProfileSettingComponent', () => {
  let component: LabProfileSettingComponent;
  let fixture: ComponentFixture<LabProfileSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabProfileSettingComponent]
    });
    fixture = TestBed.createComponent(LabProfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
