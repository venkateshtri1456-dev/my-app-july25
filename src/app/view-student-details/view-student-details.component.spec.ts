import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ViewStudentDetailsComponent } from './view-student-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('ViewStudentDetailsComponent', () => {
  let component: ViewStudentDetailsComponent;
  let fixture: ComponentFixture<ViewStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentDetailsComponent ],
      imports: [
        HttpClientTestingModule,   // ✅ fixes NullInjectorError
        FormsModule                // ✅ only needed if using ngModel in template
      ],
       providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),    // ✅ mock route params
            queryParams: of({ search: 'test' }), // optional mock
            snapshot: { paramMap: { get: (key: string) => '123' } }
          }
        }
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
