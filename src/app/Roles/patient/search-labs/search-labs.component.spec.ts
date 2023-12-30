import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLabsComponent } from './search-labs.component';

describe('SearchLabsComponent', () => {
  let component: SearchLabsComponent;
  let fixture: ComponentFixture<SearchLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLabsComponent]
    });
    fixture = TestBed.createComponent(SearchLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
