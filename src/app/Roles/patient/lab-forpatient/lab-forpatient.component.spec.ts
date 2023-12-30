import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabForpatientComponent } from './lab-forpatient.component';

describe('LabForpatientComponent', () => {
  let component: LabForpatientComponent;
  let fixture: ComponentFixture<LabForpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabForpatientComponent]
    });
    fixture = TestBed.createComponent(LabForpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
