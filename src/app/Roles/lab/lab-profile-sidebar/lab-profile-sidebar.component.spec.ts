import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabProfileSidebarComponent } from './lab-profile-sidebar.component';

describe('LabProfileSidebarComponent', () => {
  let component: LabProfileSidebarComponent;
  let fixture: ComponentFixture<LabProfileSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabProfileSidebarComponent]
    });
    fixture = TestBed.createComponent(LabProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
