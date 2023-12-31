import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecialitiesComponent } from './admin-specialities.component';

describe('AdminSpecialitiesComponent', () => {
  let component: AdminSpecialitiesComponent;
  let fixture: ComponentFixture<AdminSpecialitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSpecialitiesComponent]
    });
    fixture = TestBed.createComponent(AdminSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
