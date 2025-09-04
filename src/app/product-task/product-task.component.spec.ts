import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTaskComponent } from './product-task.component';
import { FormsModule } from '@angular/forms';

describe('ProductTaskComponent', () => {
  let component: ProductTaskComponent;
  let fixture: ComponentFixture<ProductTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTaskComponent ],
        imports: [FormsModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
