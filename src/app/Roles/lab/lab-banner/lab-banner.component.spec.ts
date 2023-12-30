import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBannerComponent } from './lab-banner.component';

describe('LabBannerComponent', () => {
  let component: LabBannerComponent;
  let fixture: ComponentFixture<LabBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabBannerComponent]
    });
    fixture = TestBed.createComponent(LabBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
