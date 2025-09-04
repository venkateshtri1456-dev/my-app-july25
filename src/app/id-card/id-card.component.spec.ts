import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardComponent } from './id-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('IdCardComponent', () => {
  let component: IdCardComponent;
  let fixture: ComponentFixture<IdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCardComponent ],
      imports: [HttpClientTestingModule,
         FormsModule]   // ✅ Provides HttpClient
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
