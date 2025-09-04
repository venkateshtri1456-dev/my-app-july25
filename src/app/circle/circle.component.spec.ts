import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleComponent } from './circle.component';
import { FormsModule } from '@angular/forms';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleComponent ],
            imports: [FormsModule]   // ✅ needed for ngModel

    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
