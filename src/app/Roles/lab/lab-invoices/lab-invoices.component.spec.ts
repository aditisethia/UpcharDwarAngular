import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInvoicesComponent } from './lab-invoices.component';

describe('LabInvoicesComponent', () => {
  let component: LabInvoicesComponent;
  let fixture: ComponentFixture<LabInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabInvoicesComponent]
    });
    fixture = TestBed.createComponent(LabInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
