import { TestBed } from '@angular/core/testing';

import { LabReviewService } from './lab-review.service';

describe('LabReviewService', () => {
  let service: LabReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
