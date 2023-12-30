import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInvoicesDetailsComponent } from './lab-invoices-details.component';

describe('LabInvoicesDetailsComponent', () => {
  let component: LabInvoicesDetailsComponent;
  let fixture: ComponentFixture<LabInvoicesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabInvoicesDetailsComponent]
    });
    fixture = TestBed.createComponent(LabInvoicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
