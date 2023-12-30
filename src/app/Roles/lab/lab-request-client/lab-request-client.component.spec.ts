import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRequestClientComponent } from './lab-request-client.component';

describe('LabRequestClientComponent', () => {
  let component: LabRequestClientComponent;
  let fixture: ComponentFixture<LabRequestClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabRequestClientComponent]
    });
    fixture = TestBed.createComponent(LabRequestClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
