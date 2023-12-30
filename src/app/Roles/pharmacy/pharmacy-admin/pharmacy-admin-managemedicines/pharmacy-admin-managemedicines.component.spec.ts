import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminManagemedicinesComponent } from './pharmacy-admin-managemedicines.component';

describe('PharmacyAdminManagemedicinesComponent', () => {
  let component: PharmacyAdminManagemedicinesComponent;
  let fixture: ComponentFixture<PharmacyAdminManagemedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyAdminManagemedicinesComponent]
    });
    fixture = TestBed.createComponent(PharmacyAdminManagemedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
