import { TestBed } from '@angular/core/testing';

import { PinInterestService } from './pin-interest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PinInterestService', () => {
  let service: PinInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule]   // ✅ provides HttpClient for tests
    });
    service = TestBed.inject(PinInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
