import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotVarifiedComponent } from './not-varified.component';

describe('NotVarifiedComponent', () => {
  let component: NotVarifiedComponent;
  let fixture: ComponentFixture<NotVarifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotVarifiedComponent]
    });
    fixture = TestBed.createComponent(NotVarifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
