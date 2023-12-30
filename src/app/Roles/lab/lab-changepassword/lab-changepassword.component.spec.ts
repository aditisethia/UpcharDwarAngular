import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabChangepasswordComponent } from './lab-changepassword.component';

describe('LabChangepasswordComponent', () => {
  let component: LabChangepasswordComponent;
  let fixture: ComponentFixture<LabChangepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabChangepasswordComponent]
    });
    fixture = TestBed.createComponent(LabChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
