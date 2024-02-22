import { TestBed } from '@angular/core/testing';

import { TimesloteService } from './timeslote.service';

describe('TimesloteService', () => {
  let service: TimesloteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesloteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
