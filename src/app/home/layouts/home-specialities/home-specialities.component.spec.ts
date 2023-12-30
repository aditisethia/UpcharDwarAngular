import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialitiesComponent } from './home-specialities.component';

describe('HomeSpecialitiesComponent', () => {
  let component: HomeSpecialitiesComponent;
  let fixture: ComponentFixture<HomeSpecialitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSpecialitiesComponent]
    });
    fixture = TestBed.createComponent(HomeSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
