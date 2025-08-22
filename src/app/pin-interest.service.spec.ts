import { TestBed } from '@angular/core/testing';

import { PinInterestService } from './pin-interest.service';

describe('PinInterestService', () => {
  let service: PinInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
