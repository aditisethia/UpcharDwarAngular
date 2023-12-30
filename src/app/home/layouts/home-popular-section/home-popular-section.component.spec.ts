import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularSectionComponent } from './home-popular-section.component';

describe('HomePopularSectionComponent', () => {
  let component: HomePopularSectionComponent;
  let fixture: ComponentFixture<HomePopularSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePopularSectionComponent]
    });
    fixture = TestBed.createComponent(HomePopularSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
