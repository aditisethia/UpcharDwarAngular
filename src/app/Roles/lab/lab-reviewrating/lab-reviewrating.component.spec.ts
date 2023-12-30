import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReviewratingComponent } from './lab-reviewrating.component';

describe('LabReviewratingComponent', () => {
  let component: LabReviewratingComponent;
  let fixture: ComponentFixture<LabReviewratingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabReviewratingComponent]
    });
    fixture = TestBed.createComponent(LabReviewratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
