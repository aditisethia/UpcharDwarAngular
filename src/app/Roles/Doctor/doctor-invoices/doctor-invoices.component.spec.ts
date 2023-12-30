import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInvoicesComponent } from './doctor-invoices.component';

describe('DoctorInvoicesComponent', () => {
  let component: DoctorInvoicesComponent;
  let fixture: ComponentFixture<DoctorInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorInvoicesComponent]
    });
    fixture = TestBed.createComponent(DoctorInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
