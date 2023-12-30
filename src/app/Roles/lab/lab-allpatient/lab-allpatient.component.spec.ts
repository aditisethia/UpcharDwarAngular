import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAllpatientComponent } from './lab-allpatient.component';

describe('LabAllpatientComponent', () => {
  let component: LabAllpatientComponent;
  let fixture: ComponentFixture<LabAllpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabAllpatientComponent]
    });
    fixture = TestBed.createComponent(LabAllpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
