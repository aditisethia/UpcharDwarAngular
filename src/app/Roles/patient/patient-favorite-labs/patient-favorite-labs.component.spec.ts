import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFavoriteLabsComponent } from './patient-favorite-labs.component';

describe('PatientFavoriteLabsComponent', () => {
  let component: PatientFavoriteLabsComponent;
  let fixture: ComponentFixture<PatientFavoriteLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientFavoriteLabsComponent]
    });
    fixture = TestBed.createComponent(PatientFavoriteLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
