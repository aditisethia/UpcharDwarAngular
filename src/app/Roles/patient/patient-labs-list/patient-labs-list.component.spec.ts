import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLabsListComponent } from './patient-labs-list.component';

describe('PatientLabsListComponent', () => {
  let component: PatientLabsListComponent;
  let fixture: ComponentFixture<PatientLabsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientLabsListComponent]
    });
    fixture = TestBed.createComponent(PatientLabsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
