import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabtestComponent } from './edit-labtest.component';

describe('EditLabtestComponent', () => {
  let component: EditLabtestComponent;
  let fixture: ComponentFixture<EditLabtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLabtestComponent]
    });
    fixture = TestBed.createComponent(EditLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
