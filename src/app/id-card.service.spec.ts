import { TestBed } from '@angular/core/testing';

import { IdCardService } from './id-card.service';
import { ParentComponent } from './parent/parent.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IdCardService', () => {
  let service: IdCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [ ParentComponent ],
      imports: [ HttpClientTestingModule ],  // ✅
      providers: [ IdCardService ]
    });
    service = TestBed.inject(IdCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
