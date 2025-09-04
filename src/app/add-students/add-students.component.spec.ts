import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentsComponent } from './add-students.component';
import { IdCardService } from '../id-card.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddStudentsComponent', () => {
  let component: AddStudentsComponent;
  let fixture: ComponentFixture<AddStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentsComponent ],
       imports: [
        HttpClientTestingModule,  // ✅ fixes NullInjectorError
        FormsModule,
          RouterTestingModule ,
                  ReactiveFormsModule,   // ✅ for formControl/formGroup
                                        // ✅ provides ActivatedRoute, Router, etc.
                                         // ✅ required if template uses [(ngModel)]
      ],
      providers: [IdCardService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
