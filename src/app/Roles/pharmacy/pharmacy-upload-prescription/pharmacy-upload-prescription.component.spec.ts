import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyUploadPrescriptionComponent } from './pharmacy-upload-prescription.component';

describe('PharmacyUploadPrescriptionComponent', () => {
  let component: PharmacyUploadPrescriptionComponent;
  let fixture: ComponentFixture<PharmacyUploadPrescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyUploadPrescriptionComponent]
    });
    fixture = TestBed.createComponent(PharmacyUploadPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
