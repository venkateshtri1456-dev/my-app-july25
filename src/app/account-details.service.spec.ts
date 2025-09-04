import { TestBed } from '@angular/core/testing';

import { AccountDetailsService } from './account-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountDetailsService', () => {
  let service: AccountDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],  // 👈 Fix: provide HttpClient
      providers: [AccountDetailsService]
    
    });
    service = TestBed.inject(AccountDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
