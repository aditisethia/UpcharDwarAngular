import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOrdersComponent } from './pharmacy-orders.component';

describe('PharmacyOrdersComponent', () => {
  let component: PharmacyOrdersComponent;
  let fixture: ComponentFixture<PharmacyOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyOrdersComponent]
    });
    fixture = TestBed.createComponent(PharmacyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
