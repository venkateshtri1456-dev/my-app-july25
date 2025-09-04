import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinInterestComponent } from './pin-interest.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PinInterestComponent', () => {
  let component: PinInterestComponent;
  let fixture: ComponentFixture<PinInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinInterestComponent ],
      imports: [HttpClientTestingModule]   // ✅ Provides HttpClient
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
