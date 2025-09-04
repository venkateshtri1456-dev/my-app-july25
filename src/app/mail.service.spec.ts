import { TestBed } from '@angular/core/testing';

import { MailService } from './mail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MailService', () => {
  let service: MailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
