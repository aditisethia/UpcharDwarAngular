import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorBreadCrumComponent } from './search-doctor-bread-crum.component';

describe('SearchDoctorBreadCrumComponent', () => {
  let component: SearchDoctorBreadCrumComponent;
  let fixture: ComponentFixture<SearchDoctorBreadCrumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDoctorBreadCrumComponent]
    });
    fixture = TestBed.createComponent(SearchDoctorBreadCrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
