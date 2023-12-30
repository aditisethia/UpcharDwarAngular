import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDashboardDataComponent } from './lab-dashboard-data.component';

describe('LabDashboardDataComponent', () => {
  let component: LabDashboardDataComponent;
  let fixture: ComponentFixture<LabDashboardDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabDashboardDataComponent]
    });
    fixture = TestBed.createComponent(LabDashboardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
