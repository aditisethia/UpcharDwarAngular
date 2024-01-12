import { TestBed } from '@angular/core/testing';

import { LabAppointmentServiceService } from './lab-appointment-service.service';

describe('LabAppointmentServiceService', () => {
  let service: LabAppointmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabAppointmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
