import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabtestComponent } from './create-labtest.component';

describe('CreateLabtestComponent', () => {
  let component: CreateLabtestComponent;
  let fixture: ComponentFixture<CreateLabtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLabtestComponent]
    });
    fixture = TestBed.createComponent(CreateLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
